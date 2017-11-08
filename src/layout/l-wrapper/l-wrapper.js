const screenHeight = document.documentElement.clientHeight;
let section = document.querySelectorAll(".l-wrapper");
  if(screenHeight > 700) {
    section[1].style.WebkitTransition = 'none';
    section[1].style.MozTransition = 'none';
    section[1].classList.add("l-wrapper--showing");
  }

document.addEventListener("scroll", function () {
  "use strict";
  let scrollPosition = window.pageYOffset;
  let i = 1;

  // No animation for second and last section
  for(i; i < (section.length - 1); i++) {
    if(i === 2) { continue; }
    let sectionOffsetTop = section[i].offsetTop;
    if(scrollPosition > (sectionOffsetTop - (screenHeight * 0.8))) {
      section[i].classList.add("l-wrapper--showing");
    }
  }  
}, false);