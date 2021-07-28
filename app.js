/** @format */

const form = document.getElementById('form');
const inp = document.querySelector('input');
const cm = document.getElementById('cm');
const kg = document.getElementById('kg');
const cal = document.getElementById('cal');
const clear = document.getElementById('clr');
const output = document.querySelector('.output');
const result = document.querySelector('.result');

cm.addEventListener('input', function () {
	if (cm.value >= 0) {
		cm.style.borderBottom = '2px solid black';
	} else {
		cm.style.borderBottom = '2px solid red';
	}
});

kg.addEventListener('input', function () {
	if (kg.value >= 0) {
		kg.style.borderBottom = '2px solid black';
	} else {
		kg.style.borderBottom = '2px solid red';
	}
});

cal.addEventListener('click', function (e) {
	let height = cm.value;
	let weight = kg.value;
	let bmi = weight / (height / 100) ** 2;
	output.innerHTML = bmi.toFixed(2) + ' kg/m' + '2'.sup();
	bmiResult(bmi);
	e.preventDefault();
});

clear.addEventListener('click', function () {
	output.innerHTML = '';
	result.innerHTML = '';
	cm.value = '';
	kg.value = '';
});

function bmiResult(bmi) {
	if (bmi <= 18.4) {
		result.innerHTML = 'underweight';
		result.style.color = '#558776';
	} else if (bmi <= 24.9) {
		result.innerHTML = 'healthy';
		result.style.color = 'green';
	} else if (bmi <= 29.9) {
		result.innerHTML = 'over weight';
		result.style.color = '#FFD700';
	} else if (bmi <= 34.9) {
		result.innerHTML = 'severely over weight';
		result.style.color = '#FAFF00';
	} else if (bmi <= 39.9) {
		result.innerHTML = 'obese';
		result.style.color = '#FC5404';
	} else {
		result.innerHTML = 'severely obese';
		result.style.color = '#FA1E0E';
	}
}
