// const check = document.getElementById('check')
// const input = document.getElementById('input')
// const btn = document.getElementById('btn')
// let password = 888
// let inputvalue = input.value
// btn.addEventListener('click', function helo() {
// 	let inputvalue = input.value
// 	if (inputvalue === password) {
// 		// window.location.href = 'iasd.html'
// 		check.textContent = 'nice'
// 	} else {
// 		check.textContent = 'wrong'
// 	}
// })

const check = document.getElementById('check')
const input = document.getElementById('input')
const btn = document.getElementById('btn')

const password = 'adfj$%&^2scfx' // Лучше строка, чтобы избежать ошибок

btn.addEventListener('click', function helo() {
	let inputvalue = input.value // Получаем текущее значение
	if (inputvalue === password) {
		check.textContent = 'nice'
	} else {
		check.textContent = 'wrong'
	}
})
