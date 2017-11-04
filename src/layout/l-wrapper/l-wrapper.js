document.addEventListener("scroll", function () {
  "use strict";
  let wrapper = document.querySelectorAll(".l-wrapper");
  let scrollPosition = window.scrollY;
  let i = 1;
  
  for(i; i < (wrapper.length - 1); i++) {
    if(i === 2) { continue; }
    let wrapperOffsetTop = wrapper[i].offsetTop;
    if(scrollPosition > (wrapperOffsetTop - (document.documentElement.clientHeight * 0.8))) {
      wrapper[i].classList.add("l-wrapper--showing");
    }
  }
  
}, false);