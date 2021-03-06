import Game from './game';

const c = document.querySelector('#canvas');
const ctx = c.getContext('2d');

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let lastTime = 0;

const game = new Game(GAME_WIDTH,GAME_HEIGHT);

game.startMenu()

function gameLoop(timeStamp) {
  let deltaTime =  timeStamp - lastTime;
  lastTime = timeStamp;

  game.update(deltaTime,ctx)
  game.draw(ctx);

  requestAnimationFrame(gameLoop)
}

requestAnimationFrame(gameLoop)
