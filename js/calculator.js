//! Завдання N4 ( Калькулятор )
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
  document.getElementById('resultthree').value = result;
}

// ЗРОБЛЕНО І ПРАЦЮЄ


