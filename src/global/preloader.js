const preloader = document.querySelector('#preloader');

window.addEventListener('load', function() {
    preloader.classList.add('preloader__hiding');
    
    preloader.addEventListener('transitionend', function() {
        preloader.classList.add('preloader__hidden');
        preloader.classList.remove('preloader__hiding');
    });
});