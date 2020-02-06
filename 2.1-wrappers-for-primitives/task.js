'use strict';

function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
    parseInt(percent);
    parseInt(contribution);
    parseInt(amount);
    const todayIs = new Date();
    let months = Math.ceil(Math.abs(new Date(date).getTime() - todayIs.getTime()) / (1000 * 3600 * 24)) / 30;
    months = Math.floor(months); 
    console.log(months); 
    const toReturn = amount - contribution;
    const P = percent / 1200;
    let monthlyRate = toReturn * ((P + P / ((Math.pow((1 + P), months) - 1))));
    let mortgage = (monthlyRate * months).toFixed(2);
    console.log(`Ипотека вам выйдет в ${mortgage} ₽`);
    return `Ипотека вам выйдет в ${mortgage} ₽`;    
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    if (name == '' || null || undefined || false ) {
        name = 'Аноним'
        console.log(`Привет, мир! Меня зовут ${name}`);
        return `Привет, мир! Меня зовут ${name}`;
    } else {
        console.log(`Привет, мир! Меня зовут ${name}`);
        return `Привет, мир! Меня зовут ${name}`;
    }
}