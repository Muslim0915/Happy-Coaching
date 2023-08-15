"use strict"
const nav = document.querySelector('.navbar');
const nav_menu = document.querySelector('.nav-menu');
const burger_menu = document.querySelector('.burger-menu');
const nav_list = document.querySelectorAll('.nav-link');


for (let i = 0; i < nav_list.length; i++) {
    nav_list[i].onclick = () => {
        nav.classList.toggle('active');
        nav_menu.classList.toggle('active');
        burger_menu.classList.toggle('active');
    }
}

burger_menu.onclick = () => {
    nav.classList.toggle('active');
    nav_menu.classList.toggle('active');
    burger_menu.classList.toggle('active');
};

(function stars() {

    const stars = document.querySelector('.stars');
    for (let i = 0; i < 5; i++) {
        let element = document.createElement('div');
        let star = document.createElement('img');
        star.setAttribute("src", 'assets/images/svg/star-icon.svg');
        element.appendChild(star);
        element.classList.add('star');
        stars.appendChild(element);
        star.onclick = () => {
            star.classList.toggle('active');
        }
    }

})
();
