// Завдання N1
function checkindYear (year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        resultFirstTusk.textContent = "Ви народились у високосний рік";
    }
    else if (year <= 1900) {
        resultFirstTusk.textContent = "Ви ввели некоректний рік";
    }
    else if (year >= 2026) {
        resultFirstTusk.textContent = "Давай не балаболь";
    }
    else {
        resultFirstTusk.textContent = "Ви народились не у високосний рік";
    }
}
const checkYearButton = document.querySelector('.search-btn');
const yearInput = document.getElementById("yearInput");
const resultFirstTusk = document.getElementById("result");
checkYearButton.addEventListener("click", () => {
    const year = parseInt(yearInput.value);
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        resultFirstTusk.textContent = "Ви народились у високосний рік";
    }
    else if (year <= 1900) {
        resultFirstTusk.textContent = "Ви ввели некоректний рік";
    }
    else if (year >= 2026) {
        resultFirstTusk.textContent = "Давай не балаболь";
    }
    else {
        resultFirstTusk.textContent = "Ви народились не у високосний рік";
    }
})



// Завдання N2




// Завдання N3
let currentOperator = '+';
const plusbutton = document.getElementById('plusbutton');
const minusbutton = document.getElementById('minusbutton');
const mogennyabutton = document.getElementById('mogennyabutton');
const dilennyabutton = document.getElementById('dilennyabutton');
const clickbutton = document.getElementById('clickbutton');
plusbutton.addEventListener('click',()=> setOperator('+'));
minusbutton.addEventListener('click',()=> setOperator('-'));
mogennyabutton.addEventListener('click',()=> setOperator('*'));
dilennyabutton.addEventListener('click',()=> setOperator('/'));
clickbutton.addEventListener('click', calculate);
function setOperator(op) {
  currentOperator = op;
  console.log(op)
  console.log(currentOperator)
}
function calculate() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  let result = '';
  if (isNaN(num1) || isNaN(num2)) {
    result = 'Помилка';
  } else {
    switch (currentOperator) {
      case '+':
        result = num1 + num2;
        break; 
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num2 !== 0 ? num1 / num2 : 'Ділення на 0 не можливо виконати';
        break;
    }
  }
  console.log(document.getElementById('result').value)
  document.getElementById('result').value = result;
  console.log(result)
}




// Завдання N4
// Завдання N5
// Завдання N6
// Завдання N7
// Завдання N8
// Завдання N9
