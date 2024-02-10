document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.querySelector("nav .hamburger-menu");
    const nav = document.querySelector("nav ul");

    // Toggle navigation menu and hamburger menu on hamburger icon click
    hamburgerMenu.addEventListener("click", function () {
        hamburgerMenu.classList.toggle("open");
        nav.classList.toggle("open");
    });

    // Close navigation menu when clicking outside the menu
    document.addEventListener('click', function (event) {
        const ul = document.querySelector('nav ul');
        const hamburgerMenu = document.querySelector('.hamburger-menu');

        if (!ul.contains(event.target) || !hamburgerMenu.contains(event.target)) {
            // If the click is outside the menu or hamburger icon, close the menu
            hamburgerMenu.classList.remove('open');
            ul.classList.remove('open');
        }
    });




    // Prevent clicks on hamburger menu from closing the menu when clicking inside it
    document.querySelector('.hamburger-menu').addEventListener('click', function (event) {
        event.stopPropagation();
    });

});

document.addEventListener('click', function (event) {
    const ul = document.querySelector('nav ul');
    const hamburgerMenu = document.querySelector('.hamburger-menu');

    if (event.target === hamburgerMenu) {
        ul.classList.toggle('open');
    } else if (!ul.contains(event.target) && ul.classList.contains('open')) {
        ul.classList.remove('open');
    }


    if (event.target !== hamburgerMenu && hamburgerMenu.classList.contains('open')) {
        hamburgerMenu.classList.remove('open');
    }

});


document.querySelector('.hamburger-menu').addEventListener('click', function (event) {
    event.stopPropagation();
});

if (window.innerWidth > 826) {

    window.addEventListener("scroll", function () {
        const nav = document.querySelector("nav");
        const navBackground = document.querySelector(".nav-background");

        if (window.scrollY > 1) {
            // Add red background color when scrolling down
            nav.style.opacity = "1";
            navBackground.style.opacity = "1";


        }
    });

    window.addEventListener("scroll", function () {

        const navBackground = document.querySelector(".nav-background");

        if (window.scrollY < 2) {


            navBackground.style.opacity = "0";


        }
    });
}

var sliderImages = document.querySelectorAll('.slide'),
    arrowLeft = document.querySelector('#arrow-left'),
    arrowRight = document.querySelector('#arrow-right'),
    current = 0;

function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = 'none';
    }
}

function init() {
    reset();
    sliderImages[0].style.display = 'block';
}

function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = 'block';
    current--;
}

arrowLeft.addEventListener('click', function () {
    if (current === 0) {
        current = sliderImages.length;
    }
    slideLeft();
});

function slideRight() {
    reset();
    sliderImages[current + 1].style.display = 'block';
    current++;
}

arrowRight.addEventListener('click', function () {
    if (current === sliderImages.length - 1) {
        current = -1;
    }
    slideRight();
});

init();




