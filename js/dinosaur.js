 //! Завдання 6 

 const cactusMoving = document.querySelector('.cactus');
 const dinoStaying = document.querySelector('.dinodino');
 const startButton = document.getElementById('startButton');
 
 let cactusLeft = 690;
 let dinoBottom = 0;
 let dinoJumper = false;
 let gameInterval; // Для хранения интервала игры
 let isGameRunning = false; // Флаг состояния игры
 
 // Функция прыжка динозавра
 function dinoJump(e) {
   e.preventDefault();
   if (e.code === 'Space' && !dinoJumper && isGameRunning) {
     dinoJumper = true;
     let jumpInterval = setInterval(() => {
       if (dinoBottom <= 90) {
         dinoBottom += 5;
         dinoStaying.style.bottom = dinoBottom + 'px';
       } else {
         clearInterval(jumpInterval);
         let fallInterval = setInterval(() => {
           if (dinoBottom > 0) {
             dinoBottom -= 5;
             dinoStaying.style.bottom = dinoBottom + 'px';
           } else {
             dinoJumper = false;
             clearInterval(fallInterval);
           }
         }, 20);
       }
     }, 20);
   }
 }
 
 // Движение кактуса и проверка столкновений
 function moveCactus() {
   cactusLeft -= 10;
   cactusMoving.style.left = cactusLeft + 'px';
 
   if (cactusLeft < 0) {
     cactusLeft = 690;
   }
 
   // Проверка столкновения
   if (cactusLeft < 100 && cactusLeft > 50 && dinoBottom < 80) {
     endGame();
   }
 }
 
 // Завершение игры
 function endGame() {
   clearInterval(gameInterval);
   isGameRunning = false;
   alert('Game Over!');
   resetGame();
 }
 
 // Сброс позиций
 function resetGame() {
   cactusLeft = 690;
   dinoBottom = 0;
   cactusMoving.style.left = '690px';
   dinoStaying.style.bottom = '0px';
 }
 
 // Запуск игры по кнопке
 startButton.addEventListener('click', () => {
   if (!isGameRunning) {
     isGameRunning = true;
     resetGame();
     gameInterval = setInterval(moveCactus, 20);
   }
 });
 
 // Обработчик прыжка
 document.addEventListener('keydown', dinoJump);