document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.querySelector("nav .hamburger-menu");
    const nav = document.querySelector("nav ul");


    hamburgerMenu.addEventListener("click", function () {
        if (hamburgerMenu.classList.contains("open")) {
            hamburgerMenu.classList.remove("open");
            hamburgerMenu.classList.add("close");
            nav.classList.remove("open");
            nav.classList.add("close");


        } else {
            hamburgerMenu.classList.remove("close");
            hamburgerMenu.classList.add("open");
            nav.classList.add("open");
        }
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

if (window.innerWidth > 850) {

    window.addEventListener("scroll", function () {
        const nav = document.querySelector("nav");
        const navBackground = document.querySelector(".nav-background");

        if (window.scrollY > 1) {
            // Add red background color when scrolling down
            nav.style.display = "flex";
            navBackground.style.display = "block";

            setTimeout(function () {
                nav.style.display = "none";
                navBackground.style.display = "none";
                if (window.scrollY < 1) {
                    nav.style.display = "flex";
                }
            }, 2000);
        }
    });

    window.addEventListener("scroll", function () {

        const navBackground = document.querySelector(".nav-background");

        if (window.scrollY < 2) {


            navBackground.style.display = "none";


        }
    });
}











