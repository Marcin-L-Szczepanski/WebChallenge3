var button = document.querySelector(".button--menu");
button.addEventListener("click", function () {
    document.querySelector(".button--menu").classList.toggle("button--close");
    document.querySelector(".button--menu").classList.toggle("button--open");
    document.querySelector(".menu__list").classList.toggle("menu__list--open");
}, false);
