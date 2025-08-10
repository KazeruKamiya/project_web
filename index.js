const hamburger = document.querySelector('.hamburger');
const offscreenmenu = document.querySelector('.off_screen');

hamburger.addEventListener('click', ()=> {
    hamburger.classList.toggle("active");
    offscreenmenu.classList.toggle('active');
});