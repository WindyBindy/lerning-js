const resultElement = document.getElementById('result')
const input = document.getElementById('input')
const btn = document.getElementById('btn')

btn.onclick = function () {
	result.textContent = 'hello ' + input.value
}
