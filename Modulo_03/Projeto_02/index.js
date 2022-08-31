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


let count = 1
document.getElementById('radio1').checked = true

setInterval(function() {
    nextImage()
}, 5000)

function nextImage() {
    count++
    if(count>4) {
        count = 1
    }

    document.getElementById('radio'+count).checked = true
}