const goBtn = document.getElementById("goBtn");
const attackBtn = document.getElementById("attackBtn");
const runBtn = document.getElementById("runBtn");
const gameMessage = document.getElementById("gameMessage");
const playerHP = document.getElementById("playerHP");
const enemyHP = document.getElementById("enemyHP");
const stepsLeftParagraph = document.getElementById("stepsLeft");

const enemyEncounterProbability=0.5;
let stepsLeft=10;

const Player = new Human();
let enemy;

const State = {
    explore: "Explore",
    combat: "Combat",
    end: "End"
}
let currentState = State.explore;
redrawHitpointInfo();

playerHP.textContent = Player.hitpoint;

goBtn.onclick = function () {
    stepsLeft = stepsLeft-1;
    if (stepsLeft<=0) {
        currentState = State.end;
        gameMessage.textContent = "Вы выбрались из подземелья. Победа!";
    } else {
        if (enemyEncounterProbability > Math.random()) {
            gameMessage.textContent = "Вы идете по подземелью";
        } else {
            //сгенерился враг
            enemy = generateEnemy();
            gameMessage.textContent = `Вы встретили ${enemy.name}`;
            //вывели хп врага на экран
            currentState = State.combat;        
        }
    }
    redrawHitpointInfo ();
}

attackBtn.onclick = function () {
    Player.attack(enemy);
    enemy.attack(Player);
    if (enemy.hitpoint<=0) {
        gameMessage.textContent = "Вы убили врага";
        currentState = State.explore;        
    };
    if (Player.hitpoint<=0) {
        gameMessage.textContent="Вы проиграли";
        currentState = State.end;  
    }

    redrawHitpointInfo();
}

runBtn.onclick = function () {
    if (enemyEncounterProbability < Math.random()) {
        Player.hitpoint=Player.hitpoint-10;
    }
    gameMessage.textContent = "Вы идете по подземелью";
    currentState = State.explore;
    redrawHitpointInfo();
}

function redrawHitpointInfo () {
    playerHP.textContent = Player.hitpoint;
    stepsLeftParagraph.textContent=`Осталось пройти ${stepsLeft} км`;
    if (enemy===undefined){
        enemyHP.textContent = "Неизвестно"
    } else {
        enemyHP.textContent = enemy.hitpoint;
    }
    if (currentState==State.explore) {
        goBtn.disabled=false;
        attackBtn.disabled=true;
        runBtn.disabled=true;
    } else if (currentState==State.combat) {
        goBtn.disabled=true;
        attackBtn.disabled=false;
        runBtn.disabled=false;
    } else if (currentState==State.end) {
        goBtn.disabled=true;
        attackBtn.disabled=true;
        runBtn.disabled=true;
  
    }
}

function generateEnemy() {
    if (enemyEncounterProbability > Math.random()) {
        enemy = new Rat();
        return enemy;
    } else {
        enemy = new Goblin();
        return enemy;
    }
}