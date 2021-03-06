import { detectCollision,detectCollision2 } from './collisionDetection';

export default class Ball {
  constructor({ gameWidth, gameHeight, paddle,decrementLive }) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.paddle = paddle;
    this.decrementLive = decrementLive;
    this.sound = document.getElementById('wall_hit')

    this.width = 14;
    this.height = 14;

    this.position = {  
      x: this.paddle.position.x + this.paddle.width / 2,
      y: this.paddle.position.y - this.height,
    };

    this.speed = {
      x: 0,
      y: 0,
    };

    this.slowBall = false

    this.image = document.getElementById('img_sprite');
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      66,
      136,
      8,
      8,
      this.position.x,
      this.position.y,
      this.height,
      this.width
    );
    ctx.strokeStyle = 'red';
    ctx.strokeRect(this.position.x,this.position.y,this.width,this.height)
  }

  resetBallPosition() {
    this.paddle.position = {
      x: this.gameWidth / 2 - this.paddle.width / 2, 
      y: this.gameHeight - this.paddle.height - 80
    }    
    this.position = {  
      x: this.paddle.position.x + this.paddle.width / 2,
      y: this.paddle.position.y - this.height,
    };
    this.speed = {
      x: 0,
      y: 0
    }
  }

  ballTouchFloor(y) {    
    if (y > this.paddle.position.y && y > this.gameHeight - this.height) {
      this.decrementLive()
      this.resetBallPosition()
      this.sound.play()
    }
  }

  startBallMoving() {
    const moovingSide = Math.floor(Math.random() * 10) % 2 === 0;

    this.speed.x = moovingSide ? -50 : 50
    this.speed.y = 40
  }

  slowMotion() {
    this.slowBall = !this.slowBall;

    let slowSpeed = {}
    
    if (this.slowBall) {
      slowSpeed = {
        x: this.speed.x < 0 ? -1 : 1,
        y: this.speed.y < 0 ? -2 : 2
      }
    }else {
      slowSpeed = {
        x: this.speed.x < 0 ? -50 : 50,
        y: this.speed.y < 0 ? -40 : 40
      }
    }

    this.speed = {...slowSpeed}
  }

  moovingBallWithPaddle() {
    this.position = {  
      x: this.paddle.position.x + this.paddle.width / 2,
      y: this.paddle.position.y - this.height,
    };
  }

  update(deltaTime) {
    this.position.x += this.speed.x / deltaTime;
    this.position.y += this.speed.y / deltaTime;

    this.ballTouchFloor(this.position.y)

    if (this.speed.x === 0 || this.speed.y === 0) this.moovingBallWithPaddle()

    if (this.position.x + this.width > this.gameWidth || this.position.x < 0) {
      this.sound.play()
      this.speed.x = -this.speed.x;
    }

    if (this.position.y + this.height > this.gameHeight || this.position.y < 0) {
      this.sound.play()
      this.speed.y = -this.speed.y;
    }

    if (detectCollision(this,this.paddle)) {
      this.speed.y = -this.speed.y;
      this.position.y = this.paddle.position.y - this.height;

      if (this.position.x < this.paddle.position.x + (this.paddle.width / 2) && this.paddle.speed < 0) {
        this.speed.x = -20 + -(1 * (this.paddle.position.x + this.paddle.width / 2 - this.position.x))
      }
  
      if (this.position.x > this.paddle.position.x + (this.paddle.width / 2) && this.paddle.speed > 0) {
        this.speed.x = 20 + (1 * Math.abs(this.paddle.position.x + this.paddle.width / 2 - this.position.x))
      }
    }
  }
}
