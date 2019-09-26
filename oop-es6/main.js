// Задача 1
class Weapon {
    constructor({name, attack, durability, range}) {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.range = range;
    }

    takeDamage(damage) {
        this.durability -= damage;
        if (this.durability < 0) {
            return this.durability = 0;
        } else {
            return this.durability;
        }
    }

    getDamage() {
        if (this.durability == 0) {
            return 0;
        } else if (this.durability >= (30 * this.durability) / 100) {
            return this.attack;
        } else {
            return this.attack / 2;
        } 
    }

    isBroken() {
        if (this.durability) {
            return false;
        } else {
            return true;
        }
    }
}

// проверка takeDamage
const sword = new Weapon({
    name: 'Старый меч',
    attack: 20,
    durability: 10,
    range: 1,
});

sword.takeDamage(5);
console.log(sword.durability); // 5

sword.takeDamage(50);
console.log(sword.durability); // 0


const arm = new Weapon({
    name: 'Рука',
    attack: 1,
    durability: Infinity,
    range: 1,
});
  
arm.takeDamage(20);
console.log(arm.durability); // Infinity
  
const bow = new Weapon({
    name: 'Лук',
    attack: 10,
    durability: 200,
    range: 3,
});
  
bow.takeDamage(20);
console.log(bow.durability); // 180
  
bow.takeDamage(200);
console.log(bow.durability); // 0

// проверка getDamage
console.log(bow.durability); // 0
console.log(bow.getDamage()); // 0

console.log(arm.durability); // Infinity
console.log(arm.getDamage()); // 1

// проверка isBroken
console.log(bow.durability); // 0
console.log(bow.isBroken()); // true

console.log(arm.durability); // Infinity
console.log(arm.isBroken()); // false

// экземпляры из таблицы 1
// Рука и лук уже созданы выше, поэтому здесь создам только меч, нож и посох
const arm2 = new Weapon({
    name: 'Рука',
    attack: 1,
    durability: Infinity,
    range: 1,
});

const bow2 = new Weapon({
    name: 'Лук',
    attack: 10,
    durability: 200,
    range: 3,
});

const sword2 = new Weapon({
    name: 'Меч',
    attack: 25,
    durability: 500,
    range: 1,
});

const knife = new Weapon({
    name: 'Нож',
    attack: 5,
    durability: 300,
    range: 1,
});

const staff = new Weapon({
    name: 'Посох',
    attack: 8,
    durability: 300,
    range: 2,
});

// экземпляры из таблицы 2
const longBow = new Weapon({
    name: 'Длинный лук',
    attack: 15,
    durability: bow2.durability,
    range: 4,
});

const battleAxe = new Weapon({
    name: 'Секира',
    attack: 27,
    durability: 800,
    range: sword2.range,
});

const blizzardStaff = new Weapon({
    name: 'Посох Бури',
    attack: 10,
    durability: staff.durability,
    range: 3,
});


// Задача 2
class Arm extends Weapon {
    constructor() {
        super({name: 'Рука', attack: 1, durability: Infinity, range: 1});
    }
}

class Bow extends Weapon {
    constructor() {
        super({name: 'Лук', attack: 10, durability: 200, range: 3});
    }
}

class Sword extends Weapon {
    constructor() {
        super({name: 'Меч', attack: 25, durability: 500, range: 1});
    }
}

class Knife extends Weapon {
    constructor() {
        super({name: 'Нож', attack: 5, durability: 300, range: 1});
    }
}

class Staff extends Weapon {
    constructor() {
        super({name: 'Посох', attack: 8, durability: 300, range: 2});
    }
}

class LongBow extends Bow {
    constructor() {
        super();
        this.name = 'Длинный лук';
        this.attack = 15;
        this.range = 4;
    }
}

class BattleAxe extends Sword {
    constructor() {
        super();
        this.name = 'Секира';
        this.attack = 27;
        this.durability = 800;
    }
}

class BlizzardStaff extends Staff {
    constructor() {
        super();
        this.name = 'Посох Бури';
        this.attack = 10;
        this.range = 3;
    }
}

// проверка обычного оружия
const hand = new Arm();

console.log(hand.name);
console.log(hand.attack);
console.log(hand.durability);
console.log(hand.range);

// проверка улучшенного оружия
const axe = new BattleAxe();

console.log(axe.name);
console.log(axe.attack);
console.log(axe.durability);
console.log(axe.range);


// Задача 3
class StudentLog {
    constructor(name) {
      this.name = name;
      this.diary = {};
    }
  
    getName() {
      return this.name;
    }
  
    addGrade(grade, subject) {
        if (Number.isInteger(grade) && grade > 0 && grade < 6) {
			if (typeof this.diary[subject] === "undefined") {
				this.diary[subject] = [grade];
			} else {
				this.diary[subject].push(grade);
			}
		} else {
			let result = `Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5`;
			if (typeof this.diary[subject] === "undefined") {
				result += '\n0';
			} else {
				result += '\n' + this.diary[subject].length;
			}
			return result;
		}

		if (typeof this.diary[subject] === "undefined") {
			return 0;
		} else {
			return this.diary[subject].length;
		}
    }
  
    getAverageBySubject(subject) {
        let averageSubject;
        if (typeof this.diary[subject] === "undefined") {
            return 0;
        } else {
            let value = 0;
            for (let mark of this.diary[subject]) {
                value += Number(mark);
            }
            averageSubject = value / this.diary[subject].length;
        }
        return averageSubject;
    }

    getTotalAverage() {
        let totalAverage;
        let value = 0;
		for (let grade in this.diary) {
			value += Number(this.getAverageBySubject(grade));
		}
		totalAverage = value / Object.keys(this.diary).length;
		return totalAverage;
	}
}  

const log = new StudentLog('Олег Никифоров');

// проверка getName
console.log(log.getName());

// проверка addGrade
// console.log(log.addGrade(3, 'algebra'));
// console.log(log.addGrade('отлично!', 'math'));
// console.log(log.addGrade(4, 'algebra'));
// console.log(log.addGrade(5, 'geometry'));
// console.log(log.addGrade(25, 'geometry'));

log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');

// проверка getAverageBySubject
console.log(log.getAverageBySubject('geometry')); // 4.5
console.log(log.getAverageBySubject('algebra')); // 3
console.log(log.getAverageBySubject('math')); // 0

// проверка getTotalAverage
console.log(log.getTotalAverage()); // 3,75