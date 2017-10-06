var preloader = document.querySelector('#preloader');

window.addEventListener('load', function() {
    preloader.classList.add('preloader__hiding');
    
    preloader.addEventListener('transitionend', function() {
        this.classList.add('preloader__hidden');
        this.classList.remove('preloader__hiding');
    });
});