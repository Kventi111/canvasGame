import { detectCollision } from './collisionDetection';

export default class Ball {
  constructor({ gameWidth, gameHeight, paddle }) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.paddle = paddle;

    this.position = {
      x: 10,
      y: 10,
    };

    this.size = 16;

    this.speed = {
      x: 1,
      y: 2,
    };

    this.image = document.getElementById('img_ball');
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size,
      this.size,
    );
  }

  update(deltaTime) {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    if (this.position.x > this.gameWidth || this.position.x < 0) {
      this.speed.x = -this.speed.x;
    }

    if (this.position.y > this.gameHeight || this.position.y < 0) {
      this.speed.y = -this.speed.y;
    }

    // console.log(detectCollision(this,this.paddle))
    if (detectCollision(this,this.paddle)) {
      this.speed.y = -this.speed.y;
      this.position.y = this.paddle.position.y - this.size;
    }
  }
}
