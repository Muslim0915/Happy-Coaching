"use strict";
import { Stars } from "./stars.js";


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
}









