var button = document.querySelector(".button--menu");
button.addEventListener("click", function () {
    document.querySelector(".button--menu").classList.toggle("button--close");
    document.querySelector(".button--menu").classList.toggle("button--open");
}, false);
