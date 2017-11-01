window.addEventListener('load', function() {
    "use strict";
    const preloader = document.querySelector('#preloader');
    preloader.classList.add('preloader--hiding');
    
    preloader.addEventListener('transitionend', function() {
        this.classList.add('preloader--hidden');
        this.classList.remove('preloader--hiding');
    }, false);
}, false);