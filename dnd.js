class Creature {
    constructor (hitpoint, name) {
        this.hitpoint = hitpoint;
        this.name = name;
    }
    //attack вычитает рассчитанный урон из имеющегося здоровья врага
    attack (enemy) {
        enemy.hitpoint = enemy.hitpoint - this.calculateDamage();
    }
    //calculateDamage рассчитывает урон, нанесенный врагу, и возвращает его
    calculateDamage() {
        console.error("need to be implemented");
        const hitpointReduce = 5;
        return hitpointReduce;
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getRandomIntInRange (from, to) {
    return from+getRandomInt(to-from);
}

class Rat extends Creature {
    constructor () {
        super(getRandomIntInRange(Rat.minHP, Rat.maxHP), "Крыса");  
    };
    calculateDamage(){
        return getRandomIntInRange(Rat.minHP, Rat.maxHP);
    }

    static get minHP() {
        return 1;
    }

    static get maxHP() {
        return 5;
    }

}

class Human extends Creature {
    constructor () {
        super(getRandomIntInRange(Human.minHP, Human.maxHP));
    };

    calculateDamage(){
        return 0.1*getRandomIntInRange(Human.minHP, Human.maxHP);
    }

    static get minHP() {
        return 75;
    }

    static get maxHP() {
        return 100;
    }

}

class Goblin extends Creature {
    constructor(){
        super(getRandomIntInRange(Goblin.minHP, Goblin.maxHP), "Гоблин");
    }

    calculateDamage(){
        return 0.5*getRandomIntInRange(Goblin.minHP, Goblin.maxHP);
    }

    static get minHP() {
        return 10;
    }

    static get maxHP() {
        return 40;
    }
}

class Bandit extends Human {
    
}

const goblin1 = new Goblin();
const bandit1 = new Bandit();
console.log(bandit1.hitpoint);
goblin1.attack(bandit1);
console.log(bandit1.hitpoint);