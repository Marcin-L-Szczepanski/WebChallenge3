document.addEventListener("scroll", function () {
  "use strict";
  let wrapper = document.querySelectorAll(".l-wrapper");
  let scrollPosition = window.scrollY;
  let i = 1;
  
  for(i; wrapper.length; i++) {
    let wrapperOffsetTop = wrapper[i].offsetTop;
    if(scrollPosition > (wrapperOffsetTop - 500)) {
      wrapper[i].classList.add("l-wrapper--showing");
    }
  }
  
}, false);