alert("Работу выполнил студент:\nНикифоров Егор\nГруппы:\n09.02.31");

// DARK THEME
const toggleTheme = document.getElementById('toggleDark')

const header = document.querySelector('header')
const sideMenu = document.getElementById('side-menu')

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


// LANGUAGE
var Language = document.getElementById('Language')

var aboutComplect = document.getElementById('aboutComplect')
var aboutCompany = document.getElementById('aboutCompany')
var news = document.getElementById('news')
var mediaBank = document.getElementById('mediaBank')
var contacts = document.getElementById('contacts')

Language.addEventListener('click', function() {
    if (this.getAttribute('data-show') === 'true') {
		this.innerText = 'English'
		this.setAttribute('data-show', 'false')
        aboutComplect.innerText = 'О комплекте'
        aboutCompany.innerText = 'О компании'
        news.innerText = 'Новости'
        mediaBank.innerText = 'Медиа Банк'
		contacts.innerText = 'Контакты'
	} else {
		this.innerText = 'Русский'
		this.setAttribute('data-show', 'true')
        aboutComplect.innerText = 'About complect'
        aboutCompany.innerText = 'About company'
        news.innerText = 'News'
        mediaBank.innerText = 'Media Bank'
		contacts.innerText = 'Сontacts'
	}
})

