function toggleButtonIcon() {
    "use strict";
    document.querySelector(".button--menu").classList.toggle("button--close");
    document.querySelector(".button--menu").classList.toggle("button--open");
}

function toggleShowMenu() {
    "use strict";
    document.querySelector(".menu__list").classList.toggle("menu__list--open");
}

function closeButtonIcon() {
    "use strict";
    document.querySelector(".button--menu").classList.add("button--close");
    document.querySelector(".button--menu").classList.remove("button--open");
}

function closeShowMenu() {
    "use strict";
    document.querySelector(".menu__list").classList.remove("menu__list--open");
}

var button = document.querySelector(".button--menu");
button.addEventListener("click", function () {
    "use strict";
    toggleButtonIcon();
    toggleShowMenu();
});

var list = document.querySelector(".menu__list");
var link = document.querySelectorAll(".menu__item");
for (var i=0; i<=link.length; i++) {
    link[i].addEventListener("click", function(){
        closeButtonIcon();
        closeShowMenu();
    });
}