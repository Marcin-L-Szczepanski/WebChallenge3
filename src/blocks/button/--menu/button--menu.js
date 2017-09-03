var button = document.querySelector(".button--menu");
button.addEventListener("click", function () {
    "use strict";
    document.querySelector(".button--menu").classList.toggle("button--close");
    document.querySelector(".button--menu").classList.toggle("button--open");
    document.querySelector(".menu__list").classList.toggle("menu__list--open");
}, false);

var link = document.querySelectorAll(".menu__item");
for (var i=0; i<link.length; i++) {
link[i].addEventListener("click", function () {
    document.querySelector(".button--menu").classList.toggle("button--close");
    document.querySelector(".button--menu").classList.toggle("button--open");
    document.querySelector(".menu__list").classList.toggle("menu__list--open");
}, false);
}