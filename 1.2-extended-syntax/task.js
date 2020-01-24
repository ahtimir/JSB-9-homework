'use strict';

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = " + result;
}

function getResult(a,b,c) {
	let d = (Math.pow(b, 2) - 4 * a * c);
	if (d < 0) {
		return [];
	} else if (d === 0) {
		return [(-b / (2 * a))];
	} else {
		return [((-b + Math.sqrt(d)) / (2 * a)), 
		  		((-b - Math.sqrt(d)) / (2 * a))];
	};
}


function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
	let allMarksSum = 0;
	if (marks.length > 5) {
		marks.splice(5);
		console.log("Внимание! Будет рассчитано среднее арифметическое 5 оценок.");
	}

	for (let i = 0; i < marks.length; i++) {
		allMarksSum += marks[i];
	}
	console.log(allMarksSum / marks.length);
	return (allMarksSum / marks.length);
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
	let yearOfBirth = dateOfBirthday.getFullYear();

	if (((new Date()).getFullYear() - yearOfBirth) < 18) {
		return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
	} else {
		return `Не желаете ли олд-фэшн, ${name}?`;
	};
	
}