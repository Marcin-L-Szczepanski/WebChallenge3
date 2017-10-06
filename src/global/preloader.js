window.addEventListener('load', function() {
    "use strict";
    const preloader = document.querySelector('#preloader');
    preloader.classList.add('preloader__hiding');
    
    preloader.addEventListener('transitionend', function() {
        this.classList.add('preloader__hidden');
        this.classList.remove('preloader__hiding');
    });
});