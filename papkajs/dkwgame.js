const knight = document.getElementById("knight");
const dragon = document.getElementById("dragon");
const witch = document.getElementById("witch");
const bravoResult = document.getElementById("bravoResult");
const bravoCounter = document.getElementById("bravoCounter");
const aiScore = document.getElementById("ai-score");
const plScore = document.getElementById("pl-score");
const computerVariant = document.getElementById("computer-variant");

let plChoice = 0;
let aiScoreCount = 0;
let plScoreCount = 0;
let varia = "";
let varia2 = "";

knight.addEventListener("click", () => setChoice(1));
dragon.addEventListener("click", () => setChoice(2));
witch.addEventListener("click", () => setChoice(3));

function setChoice(choice) {
    plChoice = choice;
    bravoGame();
}

function displayComputerChoice(choice) {
    let icon = "";
    let name = "";
    if (choice === "knight") {
        icon = "⚔️";
        name = "Рицар";
    } else if (choice === "dragon") {
        icon = "🐉";
        name = "Дракон";
    } else if (choice === "witch") {
        icon = "🧙‍♀️";
        name = "Відьма";
    }
    computerVariant.textContent = `Компьютер вибрав: ${icon} ${name}`;
}

function bravoGame() {
    if (plChoice === 0) {
        bravoResult.textContent = "Оберіть свій варіант!";
        return;
    }

    let aiChoice = Math.floor(Math.random() * 3) + 1;

    if (plChoice === 1) {
        varia = "knight";
    } else if (plChoice === 2) {
        varia = "dragon";
    } else if (plChoice === 3) {
        varia = "witch";
    }

    if (aiChoice === 1) {
        varia2 = "knight";
    } else if (aiChoice === 2) {
        varia2 = "dragon";
    } else if (aiChoice === 3) {
        varia2 = "witch";
    }

    // Отображаем выбор компьютера
    displayComputerChoice(varia2);

    if (
        (plChoice === 1 && aiChoice === 2) || 
        (plChoice === 2 && aiChoice === 3) || 
        (plChoice === 3 && aiChoice === 1)    
    ) {
        bravoResult.textContent = "Уф, ну ти крутий)";
        plScoreCount++;
        plScore.textContent = `Ви - ${plScoreCount}`;
    } else if (plChoice === aiChoice) {
        bravoResult.textContent = "Нічия! Ух ти!";
    } else {
        bravoResult.textContent = "Looooser!";
        aiScoreCount++;
        aiScore.textContent = `Комп’ютер - ${aiScoreCount}`;
    }
    plChoice = 0;
}

