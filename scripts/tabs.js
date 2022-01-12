const tabs = document.querySelectorAll('.card-detail__change')
const tabsTitle = document.querySelector('.card-details__title')
const tabsMemory = document.querySelector('.card-details__description-item.description__memory')
const tabsPrice = document.querySelector('.card-details__price')

const variants = [
    {
        name: 'Графитовый',
        title: 'Graphite',
        memory: '128',
        price: 60000
    },
    {
        name: 'Серебристый',
        title: 'Silver',
        memory: '256',
        price: 65000
    },
    {
        name: 'Небесно-голубой',
        title: 'Sierra Blue',
        memory: '512',
        price: 70000
    }
]

const changeCharacteristics = (indexTab) => {
    tabsTitle.textContent = `Смартфон Apple iPhone 13 Pro ${variants[indexTab].memory}GB ${variants[indexTab].title}`
    tabsMemory.textContent = `Встроенная память (ROM) ${variants[indexTab].memory} ГБ`
    tabsPrice.textContent = `${variants[indexTab].price}₽`
}

const changeTab = (indexClickedTab) => {
    tabs.forEach((tab, index) => {
        tab.classList.remove('active')

        if (index === indexClickedTab) {
            tab.classList.add('active')
        }

        changeCharacteristics(indexClickedTab)
    })
}

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        changeTab(index)
    })
})

changeCharacteristics(0)