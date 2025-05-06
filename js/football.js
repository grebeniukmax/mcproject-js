//! Завдання 7
const field = document.getElementById('field');
const ball = document.getElementById('ball');
field.addEventListener('click', function(event) {
  const fieldRect = field.getBoundingClientRect();
  const ballRect = ball.getBoundingClientRect();
  const fieldX = event.clientX - fieldRect.left;
  const fieldY = event.clientY - fieldRect.top;
  const ballHalfWidth = ball.offsetWidth / 2;
  const ballHalfHeight = ball.offsetHeight / 2;
  let newLeft = fieldX - ballHalfWidth;
  let newTop = fieldY - ballHalfHeight;
  const maxLeft = field.clientWidth - ball.offsetWidth;
  const maxTop = field.clientHeight - ball.offsetHeight;
  newLeft = Math.max(0, Math.min(newLeft, maxLeft));
  newTop = Math.max(0, Math.min(newTop, maxTop));
  ball.style.left = newLeft + 'px';
  ball.style.top = newTop + 'px';
});