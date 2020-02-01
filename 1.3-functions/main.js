'use strict';

console.log(`Задача №1`);

function getSolutions(a, b, c) {
	let d = (Math.pow(b, 2) - 4 * a * c);
	if (d < 0) {
		return {D: d};
	} else if (d === 0) {
		let x1 = [(-b / (2 * a))];
		return {roots: [x1], D: d};
	} else {
		let x1 = ((-b + Math.sqrt(d)) / (2 * a));
		let x2 = ((-b - Math.sqrt(d)) / (2 * a))
		return {roots: [x1 , x2], D: d};
	};
};


function showSolutionsMessage(a, b, c) {
	let result = getSolutions(a, b, c);
	console.log(`Вычисляем корни квадратного уравнения ${a}*x^2 + (${b})*x + (${c}) = 0`);
	
	if (result.D === 0) {
		console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
	} else if (result.D > 0) {
		console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`)
	} else {
		console.log(`Уравнение не имеет вещественных корней`);
	};
};

showSolutionsMessage(7, 20, -3);
showSolutionsMessage(2, 4 , 2);
showSolutionsMessage(1, 2 , 3);


console.log(`Задача №2`);

let marks = {
	algebra: [2, 4, 5, 2, 3, 4],
	geometry: [2, 4, 5],
	russian: [3, 3, 4, 5],
	physics: [5, 5],
	music: [2, 2, 6],
	english: [4, 4, 3],
	poetry: [5, 3, 4],
	chemistry: [3, 4],
	french: [4, 4],
	PE: [5, 5]
}

function getAverageScore(data) {
	let allMarksSum = 0;
	let calculatedMarks = [];
	let averageScore = 0;
	for (let prop in data) {
		function getAverageMark(data){
			for (let i = 0; i < data[prop].length; i++) {
				allMarksSum += data[prop][i];
			}
			averageScore = allMarksSum / data[prop].length;
			return averageScore;		
		}
	calculatedMarks.push(averageScore);
	console.log(calculatedMarks);
}
} 

getAverageScore(marks);
//console.log(getAverageScore(marks));

/*
console.log(`Задача №3`);


function getPersonData(secretData) {
	let firstName,	
		lastName, 
		result

	function exposeAgent(secretData) {
		if (secretData.aaa === 0) {
			firstName: 'Родриго';
		} else {
			firstName: 'Эмильо';
		}

		if (secretData.bbb === 0) {
			lastName: 'Родриго';
		} else {
			lastName: 'Эмильо';
		}
		
		}
	
		return {
			firstName: exposeAgent(secretData.aaa),
			lastName: exposeAgent(secretData.bbb)
	}
}

console.log(getPersonData({
	aaa: 0,
	bbb: 1
}));*/


