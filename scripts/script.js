const smoothScroll = () => {
    const smoothLinks = document.querySelectorAll('.header-menu__item a')

    smoothLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault()
    
            const ID = e.target.getAttribute('href').substr(1)

            const section = document.getElementById(ID)

            if(section) {
                section.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })
            } else {
                seamless.elementScrollIntoView(document.getElementById("characteristics"), {
                    behavior: "smooth",
                    block: "center",
                    inline: "center",
                });
            }
        })
    })
}

smoothScroll()