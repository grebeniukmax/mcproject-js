function numberToNumber () {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const num3 = document.getElementById("num3").value;
    const resultElement = document.getElementById("result");

    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || num1 === "" || num2 === "" || num3 === "") {
        resultElement.textContent = "Введи норм число!";
        return;
    }

    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    const number3 = parseFloat(num3);

    const maxNumber = Math.max(number1, number2, number3);
    resultElement.textContent = `Найбільше число, яке ти ввів: ${maxNumber}`;
}