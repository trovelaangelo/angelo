
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar-wrapper');
    if (window.scrollY > navbar.offsetTop) {
        navbar.classList.add('sticky-nav');
    } else {
        navbar.classList.remove('sticky-nav');
    }
});
