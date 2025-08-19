"use strict"

// THEME

let theme = document.getElementById('themeToggle')
let body = document.querySelector('body')
let h1 = document.querySelector('h1')
let blocks = document.querySelectorAll('.main__example-work-block')
let a = document.querySelectorAll('a')
let hr = document.querySelector('hr')

theme.addEventListener('click', function() {
    if (theme.innerText == 'Light Theme') {
        theme.innerText = 'Dark Theme'
        theme.style.color = 'black'        
        body.style.backgroundColor = 'white'
        h1.style.color = 'black'
        hr.style.border = '5px solid black'
        a.forEach(a => 
            {
                a.style.color = 'black'
            }
        );
        blocks.forEach(blocks => 
            {
                blocks.style.border = '3px solid black'
            }
        )
    } else {
		theme.innerText = 'Light Theme'
        theme.style.color = 'white'
		body.style.backgroundColor = 'black'
        h1.style.color = 'white'
        hr.style.border = '5px solid white'
        a.forEach(a =>
            {
                a.style.color = 'white'
            }
        );
        blocks.forEach(blocks =>
            {
                blocks.style.border = '3px solid white'
            }
        )
	}
})

// Modals Windows

let block_4_for_modal = document.getElementById('block-4-for-modal')

let myModal_4 = document.getElementById('myModal-4')
let myModal_4_Close = document.getElementById('myModal-4-Close')

block_4_for_modal.addEventListener('click', function() {
    myModal_4.style.display = 'block'    
})

myModal_4_Close.addEventListener('click', function() {
    myModal_4.style.display = 'none'
})