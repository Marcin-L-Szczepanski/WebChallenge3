document.addEventListener("scroll", function() {
  "use strict";
  const project = document.querySelector(".project");
  const projectOffsetTop = project.offsetTop;
  let scrollPosition = window.scrollY;
  
  if(scrollPosition > (projectOffsetTop - 600)) {
    project.classList.add("project--showing");
  }
}, false);