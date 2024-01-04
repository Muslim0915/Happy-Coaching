"use strict";


const nav = document.querySelector('.navbar');
const nav_menu = document.querySelector('.nav-menu');
const burger_menu = document.querySelector('.burger-menu');
const nav_list = document.querySelectorAll('.nav-link');



for (let i = 0; i < nav_list.length; i++) {
    nav_list[i].onclick = () => {
        nav.classList.toggle('active');
        nav_menu.classList.toggle('active');
        burger_menu.classList.toggle('active');
        for (let j = 0; j < nav_list.length; j++) {
            if (j !== i) {
                nav_list[j].classList.remove('active');
            }
            else{
                nav_list[j].classList.add('active');
            }
        }
    }

}

burger_menu.onclick = () => {
    nav.classList.toggle('active');
    nav_menu.classList.toggle('active');
    burger_menu.classList.toggle('active');
}









