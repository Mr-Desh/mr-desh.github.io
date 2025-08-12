// THEME

var theme = document.getElementById('themeToggle')

var body = document.querySelector('body')

var h1 = document.getElementById('h1')
var hr = document.getElementById('hr')
var a = document.getElementById('a')

theme.addEventListener('click', function() {
    if (theme.innerText == 'Light Theme') {
        theme.style.color = 'black'
        theme.innerText = 'Dark Theme'

        body.style.backgroundColor = 'white'

        h1.style.color = 'black'

        hr.style.borderTopColor = 'black'

        a.style.color = "black"
    } else {
		theme.style.color = 'white'
        theme.innerText = 'Light Theme'

		body.style.backgroundColor = 'black'

        h1.style.color = 'white'

        hr.style.borderTopColor = 'white'

        a.style.color = "white"
	}
})