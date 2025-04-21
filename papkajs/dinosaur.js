//! Завдання 6 
const cactusMoving = document.querySelector('.cactus');
const dinoStaying = document.querySelector('.dinodino');
let cactusLeft = 690 
function dino(params) {
    if (dinoStaying.style.bottom || 0 <= 0) {
        dinoStaying.style.bottom = dinoStaying.style.bottom + 10 + 'px';
        
    }
}
//  setInterval(dinoStaying, 20);
function cactus(params) {
    cactusLeft -= 10;
    cactusMoving.style.left = cactusLeft + 'px';
    if (cactusLeft < 0) {
        cactusLeft = 690; }
    //  if (dinoStaying.style.bottom) {
        
    // }
    console.log(parseInt(dinoStaying.style.bottom))/
    }
// setInterval(cactus, 20);