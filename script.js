// THEME

var theme = document.getElementById('themeToggle')
var body = document.querySelector('body')
var h1 = document.querySelector('h1')
var blocks = document.querySelectorAll('.main__example-work-block')
var a = document.querySelectorAll('a')
var hr = document.querySelector('hr')

theme.addEventListener('click', function() {
    if (theme.innerText == 'Light Theme') {
        theme.innerText = 'Dark Theme'
        theme.style.color = 'black'        
        body.style.backgroundColor = 'white'
        h1.style.color = 'black'
        hr.style.border = '5px solid black'
        a.forEach(a => {
            a.style.color = 'black'
        });
        blocks.forEach(blocks => {
            blocks.style.border = '3px solid black'
        })
    } else {
		theme.innerText = 'Light Theme'
        theme.style.color = 'white'
		body.style.backgroundColor = 'black'
        h1.style.color = 'white'
        hr.style.border = '5px solid white'
        a.forEach(a => {
            a.style.color = 'white'
        });
        blocks.forEach(blocks => {
            blocks.style.border = '3px solid white'
        })
	}
})