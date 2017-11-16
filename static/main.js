window.addEventListener("load",function(){"use strict";const a=document.querySelector("#preloader");a.classList.add("preloader--hiding"),a.addEventListener("transitionend",function(){this.classList.add("preloader--hidden"),this.classList.remove("preloader--hiding")},!1)},!1);const screenHeight=document.documentElement.clientHeight;let section=document.querySelectorAll(".l-wrapper");section[0].classList.add("l-wrapper--showing"),700<screenHeight&&(section[1].style.WebkitTransition="none",section[1].style.MozTransition="none",section[1].classList.add("l-wrapper--showing")),document.addEventListener("scroll",function(){"use strict";let a=window.pageYOffset,b=1;for(b;b<section.length-1;b++)if(2!=b){let c=section[b].offsetTop;a>c-0.8*screenHeight&&section[b].classList.add("l-wrapper--showing")}},!1);document.querySelector("#preloader").addEventListener("transitionend",function(){"use strict";const a=document.querySelector(".banner__title"),b=document.querySelector(".banner__subtitle"),c=document.querySelector(".banner__button");setTimeout(function(){a.classList.add("is-showing")},100),setTimeout(function(){b.classList.add("is-showing")},600),setTimeout(function(){c.classList.add("is-showing")},1100)},!1);function toggleButtonIcon(){"use strict";document.querySelector(".button--menu").classList.toggle("button--close"),document.querySelector(".button--menu").classList.toggle("button--open")}function openShowMenu(){"use strict";button.setAttribute("aria-expanded","true"),button.setAttribute("title","Close menu"),document.querySelector(".menu__list").classList.remove("menu__list--close"),document.querySelector(".menu__list").classList.add("menu__list--open"),document.querySelector("body").classList.add("body-cover"),document.querySelector("main").classList.add("blur"),document.querySelector(".footer").classList.add("blur")}function closeShowMenu(){"use strict";button.setAttribute("aria-expanded","false"),button.setAttribute("title","Open menu"),document.querySelector(".menu__list").classList.remove("menu__list--open"),document.querySelector(".menu__list").classList.add("menu__list--close"),document.querySelector("body").classList.remove("body-cover"),document.querySelector("main").classList.remove("blur"),document.querySelector(".footer").classList.remove("blur")}const button=document.querySelector(".button--menu");button.addEventListener("click",function(){"use strict";toggleButtonIcon(),document.querySelector(".menu__list").classList.contains("menu__list--close")?openShowMenu():closeShowMenu()});document.addEventListener("scroll",function(){"use strict";const a=document.querySelector("#go-top");let b=window.pageYOffset;200<b?a.classList.add("go-top--showing"):a.classList.remove("go-top--showing")},!1);function fadeIn(a){"use strict";a.style.opacity=1,a.style.transform="translateY(0px)"}document.addEventListener("scroll",function(){"use strict";const a=document.querySelector(".project"),b=a.getBoundingClientRect().top,c=document.documentElement.clientHeight,d=document.querySelectorAll(".feature--inline");let e=0;0.75>b/c&&setInterval(function(){e<d.length&&(d[e].classList.add("feature--showing"),e++)},600)},!1);function closeButtonIcon(){"use strict";document.querySelector(".button--menu").classList.add("button--close"),document.querySelector(".button--menu").classList.remove("button--open")}function closeShowMenu(){"use strict";button.setAttribute("aria-expanded", "false"),button.setAttribute("title", "Open menu"),document.querySelector(".menu__list").classList.remove("menu__list--open"),document.querySelector(".menu__list").classList.add("menu__list--close"),document.querySelector("body").classList.remove("body-cover"),document.querySelector("main").classList.remove("blur"),document.querySelector(".footer").classList.remove("blur")}window.addEventListener("resize",function(){"use strict";let a=document.body.scrollWidth;622<a&&(closeButtonIcon(),closeShowMenu())});const list=document.querySelector(".menu__list"),link=document.querySelectorAll(".menu__item");let i=0;for(i;i<=link.length;i++)link[i].addEventListener("click",function(){closeButtonIcon(),closeShowMenu()});