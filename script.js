// THEME

var theme = document.getElementById('themeToggle');
var body = document.querySelector('body');

theme.addEventListener('click', function() {
    if (theme.style.color == 'white') {
        theme.style.color = 'black'
        theme.innerText = 'Light Theme'

        body.style.backgroundColor = 'white';
    } else {
		theme.style.color = 'white'
        theme.innerText = 'Dark Theme'

		body.style.backgroundColor = 'black'
	}
})