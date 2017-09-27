function toggleButtonIcon() {
    "use strict";
    document.querySelector(".button--menu").classList.toggle("button--close");
    document.querySelector(".button--menu").classList.toggle("button--open");
}

function toggleShowMenu() {
    "use strict";
    document.querySelector(".menu__list").classList.toggle("menu__list--open");
    document.querySelector("body").classList.toggle("body-cover");
}


var button = document.querySelector(".button--menu");
button.addEventListener("click", function () {
    "use strict";
    toggleButtonIcon();
    toggleShowMenu();
});