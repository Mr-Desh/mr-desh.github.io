"use strict"

let up = document.getElementById('up')
let header = document.querySelector('header')

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 250) {
        up.style.display = "block";
        
    } else {
        up.style.display = "none";
    }
});

up.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});