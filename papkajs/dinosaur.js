//! Завдання 6 

const cactusMoving = document.querySelector('.cactus');
const dinoStaying = document.querySelector('.dinodino');
let cactusLeft = 690 
let dinoBottom = 0;
let dinoJumper = false;
document.addEventListener('keydown', dino)


 function dino(i) {
    i.preventDefault();
    if (i.code === 'Space' && !dinoJumper) {
        dinoJumper = true; 
        let jumpInterval = setInterval(() => {
            if (dinoBottom <= 90) {
                dinoBottom += 5 ;
                dinoStaying.style.bottom = dinoBottom + 'px';
            }
            else {
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
        },20);
    }
}
function cactus(params) {
    cactusLeft -= 10;
    cactusMoving.style.left = cactusLeft + 'px';
    if (cactusLeft < 0) {
        cactusLeft = 690; }
        if (cactusLeft < 100 && cactusLeft > 50 && dinoBottom < 80) {
            alert('Game Over');
            cactusLeft = 690;
            
        }
}
setInterval(cactus, 20);
