"use strict";

// Задача 1
function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    let discriminant = b ** 2 - 4 * a * c;
    if (discriminant < 0) {
        return [];
    } else if (discriminant == 0) {
        let x = -b / 2 * a;
        return [x];
    } else if (discriminant > 0) {
        let x1 = (-b - Math.sqrt(discriminant)) / (2 * a);
        let x2 = (-b + Math.sqrt(discriminant)) / (2 * a);
        return [x1, x2];
    }
}

// Задача 2
function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    if (marks.length > 5) {
        console.warn("Количество оценок больше 5.");
        marks.splice(5);
    }

    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }

    let averageMark = sum / marks.length;
    return averageMark;
}

// Задача 3
function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    let age = new Date().getFullYear() - dateOfBirthday.getFullYear();
    if (age >= 18) {
        console.log(`Не желаете ли олд-фэшн, ${name}?`);
        return `Не желаете ли олд-фэшн, ${name}?`;
    } else if (age < 18) {
        console.log(`Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`);
        return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }
}