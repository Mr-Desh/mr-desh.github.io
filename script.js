"use strict";

// Count
document.querySelector('h1').innerText += ' (' + document.getElementsByClassName('main__project-card').length + ' проектов)'

// Menu
document.getElementById('menu-icon').addEventListener('click', () => {
    document.getElementById('menu-icon').style.left = '-100px'
    document.getElementById('menu').style.left = '0'
})
document.getElementById('menu-arrow-close').addEventListener('click', () => {
    document.getElementById('menu').style.left = '-500px'
    document.getElementById('menu-icon').style.left = '0'
    
})


// THEME
let theme = document.getElementById("themeToggle");
let blocks = document.querySelectorAll(".main__project-card");
let a = document.querySelectorAll("a");
let hr = document.querySelector("hr");
let p = document.querySelectorAll('p');

theme.addEventListener("click", () => {
    if (theme.innerText == "Light Theme") {
        theme.innerText = "Dark Theme";
        theme.style.color = "black";
        document.body.style.backgroundColor = "white";
        document.querySelector("h1").style.color = "black";
        hr.style.border = "5px solid black";
        a.forEach((a) => {
            a.style.color = "black";
        });
        blocks.forEach((blocks) => {
            blocks.style.border = "3px solid black";
            blocks.style.backgroundColor = "lightGrey";
        });
        document.getElementById('menu').style.border = '1px solid black'
        p.forEach((p) => {
            p.style.color = 'black'
        })
    } else {
        theme.innerText = "Light Theme";
        theme.style.color = "white";
        document.body.style.backgroundColor = "black";
        document.querySelector("h1").style.color = "white";
        hr.style.border = "5px solid white";
        a.forEach((a) => {
            a.style.color = "white";
        });
        blocks.forEach((blocks) => {
            blocks.style.border = "3px solid white";
            blocks.style.backgroundColor = "";
        });
        document.getElementById('menu').style.border = '1px solid white'
        p.forEach((p) => {
            p.style.color = 'white'
        })
    }
});

// Navigation
document.getElementById('project-6').addEventListener('click', () => {
    window.location.href = 'projects/project-6-robo-school/index.html'
})
document.getElementById('project-5').addEventListener('click', () => {
    window.location.href = 'projects/project-5/pages/home/index.html'
})
document.getElementById('project-4').addEventListener('click', () => {
    window.location.href = 'projects/project-4/index.html'
})
document.getElementById('project-3').addEventListener('click', () => {
    window.location.href = 'projects/project-3/index.html'
})
document.getElementById('project-2').addEventListener('click', () => {
    window.location.href = 'projects/project-2/index.html'
})
document.getElementById('project-1').addEventListener('click', () => {
    window.location.href = 'projects/project-1/index.html'
})