const menuBtn = document.querySelector('.toggle')
const menuTop = document.querySelector('ul')
let menuOpen = false

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open')
        menuTop.classList.add('active')
        menuOpen = true
    } else {
        menuBtn.classList.remove('open')
        menuTop.classList.remove('active')
        menuOpen = false
    }
})