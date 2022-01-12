const list = document.querySelector('.cross-sell__list')
const addBtn = document.querySelector('.cross-sell__add')

let portion = 4
let count = 1

const renderItems = (items) => {
    list.innerHTML = ''

    items.forEach(item => {
        list.insertAdjacentHTML('beforeend', `
            <li>
                <article class="cross-sell__item">
                    <img class="cross-sell__image" src="${item.photo}" alt="${item.id}">
                    <h3 class="cross-sell__title">${item.name}</h3>
                    <p class="cross-sell__price">${item.price}₽</p>
                    <button type="button" class="button button_buy cross-sell__button">Купить</button>
                </article>
            </li>
        `)
    });
}

const sliceArray = (array, totalCount) => {
    return array.slice(0, totalCount)
}

const changeData = (data) => {
    const newPortion = count * portion

    renderItems(sliceArray(data, newPortion))


    if(data.length > newPortion) {
        count++
    } else {
        addBtn.style.display = 'none'
    }
}

const getData = () => {
    fetch('cross-sell-dbase/dbase.json')
        .then(res => res.json())
        .then(data => changeData(data))
}

addBtn.addEventListener('click', getData)

getData()

