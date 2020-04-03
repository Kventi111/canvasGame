import Paddle from './paddle';
import InputHandler from './inputHandler';
import Ball from './ball'
import { level1,buildLevel } from './level';


export default class {

  constructor(gameWidth,gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  start() {
    this.paddle = new Paddle(this)
    this.ball = new Ball(this);


    this.bricks = buildLevel(this,level1)

    new InputHandler(this.paddle);
  }


  draw(ctx) {
    ctx.clearRect(0,0,this.gameWidth,this.gameHeight);


    this.paddle.draw(ctx)
    this.ball.draw(ctx)

    this.bricks.forEach(i =>  i.draw(ctx))
  }

  update(deltaTime) {
    this.paddle.update(deltaTime);
    this.ball.update(deltaTime)

    this.bricks.forEach(i => i.update(deltaTime))
  }
}