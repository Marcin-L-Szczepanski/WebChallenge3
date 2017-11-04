document.addEventListener("scroll", function () {
  "use strict";
  const project = document.querySelector(".project");
  const projectPosition = project.getBoundingClientRect().y;
  const screenHeight = document.documentElement.clientHeight;
  const feature = document.querySelectorAll(".feature--inline");
  let i = 0;
  
  if(projectPosition / screenHeight < 0.75) {
    setInterval(function () {
      if(i < feature.length) {
        feature[i].classList.add("feature--showing");
        i++;
      }
    }, 600);
  }
}, false);