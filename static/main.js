window.addEventListener('load',function(){'use strict';const a=document.querySelector('#preloader');a.classList.add('preloader--hiding'),a.addEventListener('transitionend',function(){this.classList.add('preloader--hidden'),this.classList.remove('preloader--hiding')})});function toggleButtonIcon(){'use strict';document.querySelector('.button--menu').classList.toggle('button--close'),document.querySelector('.button--menu').classList.toggle('button--open')}function toggleShowMenu(){'use strict';document.querySelector('.menu__list').classList.toggle('menu__list--open'),document.querySelector('body').classList.toggle('body-cover'),document.querySelector('main').classList.toggle('blur'),document.querySelector('.footer').classList.toggle('blur')}const button=document.querySelector('.button--menu');button.addEventListener('click',function(){'use strict';toggleButtonIcon(),toggleShowMenu()});function closeButtonIcon(){'use strict';document.querySelector('.button--menu').classList.add('button--close'),document.querySelector('.button--menu').classList.remove('button--open')}function closeShowMenu(){'use strict';document.querySelector('.menu__list').classList.remove('menu__list--open'),document.querySelector('body').classList.remove('body-cover'),document.querySelector('main').classList.remove('blur'),document.querySelector('.footer').classList.remove('blur')}window.addEventListener('resize',function(){'use strict';let a=document.body.scrollWidth;622<a&&(closeButtonIcon(),closeShowMenu())});const list=document.querySelector('.menu__list'),link=document.querySelectorAll('.menu__item');for(let a=0;a<=link.length;a++)link[a].addEventListener('click',function(){closeButtonIcon(),closeShowMenu()});