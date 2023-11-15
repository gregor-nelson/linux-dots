let canvas = document.getElementById('game-board');
let context = canvas.getContext('2d');

let snake = [{top: 250, left: 250}, {top: 250, left: 260}, {top: 250, left: 270}];

function drawSnake() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = 'green';
  for(let i = 0; i < snake.length; i++) {
      context.fillRect(snake[i].left, snake[i].top, 10, 10);
  }
}

let dx = 10;
let dy = 0;

function moveSnake() {
    let head = {top: snake[0].top + dy, left: snake[0].left + dx};
    snake.unshift(head);
    snake.pop();
}


window.addEventListener('keydown', function(e) {
  switch(e.key) {
      case 'ArrowUp': dx = 0; dy = -10; break;
      case 'ArrowDown': dx = 0; dy = 10; break;
      case 'ArrowLeft': dx = -10; dy = 0; break;
      case 'ArrowRight': dx = 10; dy = 0; break;
  }
});


setInterval(function() {
  moveSnake();
  drawSnake();
}, 100);
