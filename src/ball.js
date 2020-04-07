import { detectCollision,detectCollision2 } from './collisionDetection';

export default class Ball {
  constructor({ gameWidth, gameHeight, paddle,decrementLive }) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.paddle = paddle;
    this.decrementLive = decrementLive;

    this.position = {  
      x: 200,
      y: 200,
    };

    this.width = 16;
    this.height = 16;

    this.speed = {
      x: 30,
      y: 40,
    };

    this.image = document.getElementById('img_ball');
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height,
    );
  }

  ballTouchFloor(y) {    
    if (y > this.paddle.position.y && y > this.gameHeight - this.height) {
      this.decrementLive()
    }
  }

  update(deltaTime) {
    this.position.x += this.speed.x / deltaTime;
    this.position.y += this.speed.y / deltaTime;

    this.ballTouchFloor(this.position.y)

    if (this.position.x + this.width > this.gameWidth || this.position.x < 0) {
      this.speed.x = -this.speed.x;
    }

    if (this.position.y + this.height > this.gameHeight || this.position.y < 0) {
      this.speed.y = -this.speed.y;
    }

    if (detectCollision(this,this.paddle)) {
      this.speed.y = -this.speed.y;
      this.position.y = this.paddle.position.y - this.height;

      if (this.position.x < this.paddle.position.x + (this.paddle.width / 2) && this.paddle.speed < 0) {
        console.log('left');
        
        this.speed.x = -20 + -(1 * (this.paddle.position.x + this.paddle.width / 2 - this.position.x))
      }
  
      if (this.position.x > this.paddle.position.x + (this.paddle.width / 2) && this.paddle.speed > 0) {
        console.log('right');
  
        this.speed.x = 20 + (1 * Math.abs(this.paddle.position.x + this.paddle.width / 2 - this.position.x))
      }
    }
  }
}
