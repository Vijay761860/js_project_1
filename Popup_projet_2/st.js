const button = document.querySelector('button')
const popup = document.querySelector('.popup-container')

const close_icon = document.querySelector('.close-icon')
const over_lay = document.querySelector('.overlay')


// open popup
button.addEventListener('click', () => {
    popup.classList.add('popup-open')
})
// close icon
close_icon.addEventListener('click', () => {
    popup.classList.remove('popup-open')
})
over_lay.addEventListener('click', () => {
    popup.classList.remove('popup-open')
})