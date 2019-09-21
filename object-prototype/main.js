// Задача 1
function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    let now = Date.now();
    let date = new Date(birthday);
    birthday = +date;
    let diff = now - birthday;
    let age = Math.floor(diff / 1000 / 60 / 60 / 24 / ((365 * 4) + 1) * 4);
    return (age >= 18);
}


// Задача 2
function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
    let sound = animal.sound;
    if (animal === undefined) {
        return null;
    } else {
        return sound;
    }
}


// Задача 3
function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    let value = 0;
    for (let i = 0; i < marks.length; i++) {
        value += Number(marks[i]);
    }
    let average = value / marks.length;
    let roundedAverage = Math.round(average);
    return roundedAverage;
}