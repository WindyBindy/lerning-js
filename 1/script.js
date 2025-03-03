const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const mulBtn = document.getElementById('mul')
const divBtn = document.getElementById('div')
const sum = Number(input1.value) + Number(input2.value)
resultElement.textContent = sum
let add = '+'
addBtn.onclick = function () {
	add = '+'
}
subBtn.onclick = function () {
	add = '-'
}
mulBtn.onclick = function () {
	add = '*'
}
divBtn.onclick = function () {
	add = '/'
}

submitBtn.onclick = function () {
	if (add == '+') {
		const sum = Number(input1.value) + Number(input2.value)
		resultElement.textContent = sum
	} else if (add == '-') {
		const sum = Number(input1.value) - Number(input2.value)
		resultElement.textContent = sum
	} else if (add == '*') {
		const sum = Number(input1.value) * Number(input2.value)
		resultElement.textContent = sum
	} else if (add == '/') {
		const sum = Number(input1.value) / Number(input2.value)
		resultElement.textContent = sum
	}
}
