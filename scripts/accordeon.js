const accordeonItems = document.querySelectorAll('.characteristics__item')

accordeonItems.forEach(item => {
    const button = item.querySelector('.characteristics__title')
    const content = item.querySelector('.characteristics__description')

    content.style.height = 0

    button.addEventListener('click', () => {
        if(content.classList.contains('open')) {
            content.style.height = 0
        } else {
            content.style.height = content.scrollHeight + 'px'
        }

        button.classList.toggle('active')
        content.classList.toggle('open')
    })
})