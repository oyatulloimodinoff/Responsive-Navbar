const toogleBtn = document.querySelector('.toggle-nav')
const hiddenNav = document.querySelector('.hidden-nav')

toogleBtn.addEventListener('click', () => {
    hiddenNav.classList.toggle('shownav')
})