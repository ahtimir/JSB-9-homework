function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    now = Date.now();
    birthday = new Date(window.birthday.value);
    let diff = now - (+birthday);
    let age = diff / 31557600000; 
    console.log(age);
    if (age >= 18) {
        return true;
    };
}

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
    
    function Tiger(sound) {
        this.sound = sound;
    }
    Tiger.prototype = animal;
    const tiger = new Tiger('Roar!!!');
    
    if (animal === undefined) {
        return null;
    } else {
        return tiger.sound;
    }    
}


function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    allMarksSum = 0;
    for (let i = 0; i < marks.length; i++) {
		allMarksSum += Number(marks[i]);
	}
	console.log(allMarksSum / marks.length);
	return Math.round(allMarksSum / marks.length);
}