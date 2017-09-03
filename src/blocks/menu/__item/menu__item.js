function closeButtonIcon() {
    "use strict";
    document.querySelector(".button--menu").classList.add("button--close");
    document.querySelector(".button--menu").classList.remove("button--open");
}

function closeShowMenu() {
    "use strict";
    document.querySelector(".menu__list").classList.remove("menu__list--open");
}

var list = document.querySelector(".menu__list");
var link = document.querySelectorAll(".menu__item");
for (var i=0; i<=link.length; i++) {
    link[i].addEventListener("click", function(){
        closeButtonIcon();
        closeShowMenu();
    });
}