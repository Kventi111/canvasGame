import Paddle from './paddle';
import InputHandler from './inputHandler';
import Ball from './ball'
import { level1,buildLevel } from './level';


const GAME_STATE = {
  PAUSED: 0,
  RUNNING: 1
}

export default class {

  constructor(gameWidth,gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  start() {
    this.gameState = GAME_STATE.RUNNING;

    this.paddle = new Paddle(this)
    this.ball = new Ball(this);


    this.bricks = buildLevel(this,level1)

    new InputHandler(this.paddle,this);
  }


  draw(ctx) {
    ctx.clearRect(0,0,this.gameWidth,this.gameHeight);


    this.paddle.draw(ctx)
    this.ball.draw(ctx)

    this.bricks.forEach(i =>  i.draw(ctx))
  }

  update(deltaTime) {    
    if (this.gameState == GAME_STATE.PAUSED) return;
    this.bricks = this.bricks.filter(i => !i.marked)
    
    this.paddle.update(deltaTime);
    this.ball.update(deltaTime)

    this.bricks.forEach(i => i.update(deltaTime))
  }

  togglePause() {
    if (this.gameState == GAME_STATE.PAUSED) {
      this.gameState = GAME_STATE.RUNNING
    } else {
      this.gameState = GAME_STATE.PAUSED
    }
  }
}