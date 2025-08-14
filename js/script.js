const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}

// Scroll par header background change
window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (window.scrollY > 50) { 
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Scroll par navbar links style change
window.addEventListener("scroll", function () {
    const navLinks = document.querySelectorAll("#navbar li a");
    navLinks.forEach(link => {
        if (window.scrollY > 50) { 
            link.classList.add("scrolling");
        } else {
            link.classList.remove("scrolling");
        }
    });
});

// Scroll par navbar bar Icon style change
window.addEventListener("scroll", function () {
    const navLinks = document.querySelectorAll("#bar");
    navLinks.forEach(link => {
        if (window.scrollY > 50) { 
            link.classList.add("bar-s");
        } else {
            link.classList.remove("bar-s");
        }
    });
});
