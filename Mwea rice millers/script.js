document.addEventListener('DOMContentLoaded', function () {
    const menu = document.getElementById('menu-bar');
    const navbar = document.querySelector('header .navbar');

    menu.addEventListener('click', function () {
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth <= 768) {
            navbar.classList.remove('active');
            menu.classList.remove('fa-times');
        }
    });
});


