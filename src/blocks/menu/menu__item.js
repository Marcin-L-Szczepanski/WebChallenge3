function closeButtonIcon() {
  "use strict";
  document.querySelector(".button--menu").classList.add("button--close");
  document.querySelector(".button--menu").classList.remove("button--open");
}

function closeShowMenu() {
  "use strict";
  document.querySelector(".menu__list").classList.remove("menu__list--open");
  document.querySelector("body").classList.remove("body-cover");
  document.querySelector("main").classList.remove("blur");
  document.querySelector(".footer").classList.remove("blur");
}

window.addEventListener("resize", function () {
  "use strict";
  let screenWidth = document.body.scrollWidth;
  if (screenWidth > 622) {
    closeButtonIcon();
    closeShowMenu();
  }
});

const list = document.querySelector(".menu__list");
const link = document.querySelectorAll(".menu__item");
let i=0;
for (i; i<=link.length; i++) {
  link[i].addEventListener("click", function(){
      closeButtonIcon();
      closeShowMenu();
  });
}


