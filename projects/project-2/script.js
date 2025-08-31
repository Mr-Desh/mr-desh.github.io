"use strict"

// DARK THEME
let toggleTheme = document.getElementById('toggleDark')

let header = document.querySelector('header')
let sideMenu = document.getElementById('side-menu')

toggleTheme.addEventListener('click', function() {
    this.classList.toggle('bi-moon-fill')
    if (this.classList.toggle('bi-moon')) {
		// Header
        header.style.color = 'black'
		header.style.transition = '1.5s'

        // Side Menu
        sideMenu.style.background = 'black'
        sideMenu.style.transition = '1.5s'
	} else {
		// Header
		header.style.color = 'white'
		header.style.transition = '1.5s'

		// Side Menu
		sideMenu.style.background = '#2378FC'
		sideMenu.style.transition = '1.5s'
	}
})