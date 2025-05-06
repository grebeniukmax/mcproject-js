//! Завдання N2 ( Вгадати число )
const numberInput = document.getElementById("numberInput");
const guessButton = document.getElementById("guessButton");
const guessResult = document.getElementById("guessResult");

guessButton.addEventListener("click", guessButtonClick);
function guessButtonClick() {
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  let userGuess = parseInt(numberInput.value);
  if (isNaN(userGuess)) {
    resultP.textContent = "Введіть коректне число!";
    return;
  }
  if (userGuess === randomNumber) {
    guessResult.textContent = `Вітаю, ви вгадали число! (${randomNumber})`;
  } else {
    guessResult.textContent = `Ви програли, комп’ютер загадав (${randomNumber})`;
  }
}

// ЗРОБЛЕНО І ПРАЦЮЄ