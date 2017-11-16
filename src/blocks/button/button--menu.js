function toggleButtonIcon() {
    "use strict";
    document.querySelector(".button--menu").classList.toggle("button--close");
    document.querySelector(".button--menu").classList.toggle("button--open");
}

function openShowMenu() {
  "use strict";
  button.setAttribute("aria-expanded", "true");
  button.setAttribute("title", "Close menu");
  document.querySelector(".menu__list").classList.remove("menu__list--close");
  document.querySelector(".menu__list").classList.add("menu__list--open");
  document.querySelector("body").classList.add("body-cover");
  document.querySelector("main").classList.add("blur");
  document.querySelector(".footer").classList.add("blur");
}

function closeShowMenu() {
  "use strict";
  button.setAttribute("aria-expanded", "false");
  button.setAttribute("title", "Open menu");
  document.querySelector(".menu__list").classList.remove("menu__list--open");
  document.querySelector(".menu__list").classList.add("menu__list--close");
  document.querySelector("body").classList.remove("body-cover");
  document.querySelector("main").classList.remove("blur");
  document.querySelector(".footer").classList.remove("blur");
}



const button = document.querySelector(".button--menu");
button.addEventListener("click", function () {
    "use strict";
    toggleButtonIcon();
    if(document.querySelector(".menu__list").classList.contains("menu__list--close")) {
      openShowMenu();
    }
    else {
      closeShowMenu();
    }
  });