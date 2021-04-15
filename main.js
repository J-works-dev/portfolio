'use strict';

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');    
    } else {
        navbar.classList.remove('navbar--dark');
    }
})

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    // console.log(event.target.dataset.link);
    scrollIntoView(link);
})

// Handle scrolling when click on the contact button
const contactBtn = document.querySelector('.home__contact');
contactBtn.addEventListener('click', (event) => {
    const link = event.target.dataset.link;
    if (link == null) {
        return;
    }
    scrollIntoView('#contact');
})

// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    home.style.opacity = 0.9 - window.scrollY / homeHeight;
})



function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth"});
}


