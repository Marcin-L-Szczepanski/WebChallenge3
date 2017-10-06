const preloader = document.querySelector('#preloader');

window.addEventListener('load', function(event) {
    preloader.classList.add('preloader__hidden');
}, false);