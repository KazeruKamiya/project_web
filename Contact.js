const hamburger = document.querySelector('.hamburger');
const off_screen = document.querySelector('.off_screen');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    off_screen.classList.toggle('active');
});