function toggleMenu() {
    "use strict";
    document.querySelector(".button--menu").classList.toggle("button--close");
    document.querySelector(".button--menu").classList.toggle("button--open");
    document.querySelector(".menu__list").classList.toggle("menu__list--open");
}

var button = document.querySelector(".button--menu");
button.addEventListener("click", toggleMenu);

var link = document.querySelectorAll(".menu__item");
for (var i=0; i<link.length; i++) {
    link[i].addEventListener("click", toggleMenu);
}