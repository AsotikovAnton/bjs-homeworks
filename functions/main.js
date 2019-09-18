// Задача 1
function getSolutions(a, b, c) {
	let D = b ** 2 - 4 * a * c;
	if (D < 0) {
        return {D: D};
    } else if (D == 0) {
        let x1 = -b / (2 * a);
        return {roots: [x1], D: D};
    } else if (D > 0) {
        let x1 = (-b + Math.sqrt(D)) / (2 * a);
        let x2 = (-b - Math.sqrt(D)) / (2 * a);
        return {roots: [x1, x2], D: D};
    }
}

function showSolutionsMessage(a, b, c) {
	let result = getSolutions(a, b, c);
	console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
	console.log(`Значение дискриминанта: ${result.D}`);
	if (result.D < 0) {
		console.log(`Уравнение не имеет вещественных корней`);
	} else if (result.D == 0) {
		console.log(`Уравнение имеет один корень: X₁ = ${result.roots}`);
	} else if (result.D > 0) {
		console.log(`Уравнение имеет два корня: X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
	}
}

showSolutionsMessage(3, 10, -2);

// Задача 2
function getAverageScore(data) {
  let averageMarks = {};
  for (let prop in data) {
    let value = 0;
    for (let i = 0; i < data[prop].length; i++) {
      value += data[prop][i];
    }
    averageMarks[prop] = value / data[prop].length;
  }
  return averageMarks;
}

function getAverageMark(data) {
  let averageScores = getAverageScore(data);
  let sum = 0;
  let tick = 0;
  for (let prop in averageScores) {
    sum += averageScores[prop];
    tick++;
  }
  let average = sum / tick;
  averageScores.average = average;
  return averageScores;
}

console.log(getAverageMark({
  algebra: [2, 5, 3, 4, 5, 4],
  geometry: [3, 4, 5],
  russian: [5, 5, 4, 4],
  physics: [3, 4],
  music: [5, 4, 5],
  english: [4, 4, 3],
  poetry: [5, 2, 4],
  chemistry: [3],
  french: [4, 1]
}));


// Задача 3
function getPersonData(secretData) {
  let name = getPirateName(secretData);
  let pirate = {};
  
  if (name[0] === 0) {
    pirate.firstName = "Родриго";
  } else if (name[0] === 1) {
    pirate.firstName = "Эмильо";
  }

  if (name[1] === 0) {
    pirate.lastName = "Родриго";
  } else if (name[1] === 1) {
    pirate.lastName = "Эмильо";
  }

  return pirate;
}

function getPirateName(secretData) {
  let person = [];
  for (let prop in secretData) {
    person.push(secretData[prop]);
  }  
  return person;
}

console.log(getPersonData({
  aaa: 0, bbb: 1
}));