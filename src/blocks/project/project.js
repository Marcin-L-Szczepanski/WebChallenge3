document.addEventListener("scroll", function () {
  "use strict";
  const project = document.querySelector(".project");
  const projectOffsetTop = project.offsetTop;
  const feature = document.querySelectorAll(".feature--inline");
  let scrollPosition = window.scrollY;
  let i = 0;
  
  if(scrollPosition > (projectOffsetTop - 700)) {
    setInterval(function () {
      feature[i].classList.add("feature--showing");
      i++;
    }, 600);
  }
}, false);