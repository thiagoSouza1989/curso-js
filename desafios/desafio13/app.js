const headerE1 = document.querySelector('.header')

const isScrolling = () => {
    const windowPosition = window.scrollY > 50
    headerE1.classList.toggle('header--active', windowPosition)
}

window.addEventListener('scroll', isScrolling)