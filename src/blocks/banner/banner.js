document.querySelector("#preloader").addEventListener("transitionend", function () {
  "use strict";
  const bannerTitle = document.querySelector(".banner__title");
  const bannerSubtitle = document.querySelector(".banner__subtitle");
  const bannerButton = document.querySelector(".banner__button");

  setTimeout(function () {
    bannerTitle.classList.add("is-showing");
  }, 100);
  setTimeout(function () {
      bannerSubtitle.classList.add("is-showing");
  }, 600);
  setTimeout(function () {
    bannerButton.classList.add("is-showing");
  }, 1100);
}, false);