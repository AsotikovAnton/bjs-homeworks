// Задача 1
"use strict";

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
    percent /= 100;
    let p = percent / 12;
    let nowDate = new Date();
    let monthAmount = Math.round((Date.parse(date) - Date.parse(nowDate))/1000/60/60/24/30);
    let creditSum = amount - contribution;
    let paymentMonth = creditSum * (p + p / (((1 + p) ** monthAmount) - 1));
    let totalAmount = paymentMonth * monthAmount;
    console.log(totalAmount.toFixed(2));
    return totalAmount.toFixed(2);}
}


// Задача 2
function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    if (name == "" || name == "null" || name == "undefined") {
        console.log(`Привет, мир! Меня зовут Аноним.`);
        return `Привет, мир! Меня зовут Аноним.`;
    } else {
        console.log(`Привет, мир! Меня зовут ${name}.`);
        return `Привет, мир! Меня зовут ${name}.`;        
    }
}