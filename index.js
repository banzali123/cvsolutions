const navSlide = () => {
const burger = document.querySelector('.burger');
const navBar = document.querySelector('.nav-links');
const navLinks = document.querySelector('.nav-links li');


burger.addEventListener('click' , () => {
    navBar.classList.toggle('nav-active');
    });
}



navSlide();