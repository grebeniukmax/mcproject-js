function numberToNumber () {
    const num1 = document.getElementById("numbbber1").value;
    const num2 = document.getElementById("numbbber2").value;
    const num3 = document.getElementById("numbbber3").value;
    const resultElement = document.getElementById("resultEight");
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    const number3 = parseFloat(num3);
    if (isNaN(number1) || isNaN(number2) || isNaN(number3) || number1 === "" || number2 === "" || number3 === "") {
        resultElement.textContent = "Введи норм число!";
        console.log("Введи норм число!");
        return;
    }
    const maxNumber = Math.max(number1, number2, number3);
    resultElement.textContent = `Найбільше число, яке ти ввів: ${maxNumber}`;
}
const numberToNumberButton = document.getElementById("numberToNumber");
numberToNumberButton.addEventListener("click", numberToNumber);