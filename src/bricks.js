import { detectCollision } from './collisionDetection';

export default class Bricks {
  constructor(game, position) {
    this.game = game;
    this.image = document.getElementById('img_bricks');

    this.position = position;

    this.width = 100;
    this.height = 100;

    this.marked = false;
    this.live = 999;
  }

  draw(ctx) {
    const { x, y } = this.position;

    ctx.drawImage(this.image, x, y, this.width, this.height);
  }

  checkCollisionSide(ball, brick) {
    const {
      position: { x: ballX, y: ballY },
      width: ballWidth,
      height: ballHeight,
    } = ball;

    const {
      position: { x, y },
      width,
      height,
    } = brick;

    const ballTop = ballY;
    const ballBottom = ballY + ballHeight;
    const ballLeft = ballX;
    const ballRight = ballX + ballWidth;

    const brickTop = y;
    const brickBottom = y + height;
    const brickLeft = x;
    const brickRight = x + width;

    if (ballBottom >= brickTop && ballLeft != brickLeft || ballRight != brickRight) {
      console.log('hit brick top side');
    }

    // if (ballTop >= brickBottom) {
    //   console.log('hit brick bottom side');
    // }


    // if (ballRight >= brickLeft && ballBottom < brickBottom && ballTop > brickTop) {
    //   console.log('hit brick left side');
    // } else if (ballLeft <= brickRight && ballBottom < brickBottom && ballTop > brickTop) {
    //   console.log('hit brick right side');
    // }

    // if (ballLeft <= brickRight && ballBottom < brickBottom && ballTop > brickTop) {
    //   console.log('hit brick right side');
    // }
  }

  update() {
    if (detectCollision(this.game.ball, this)) {
      this.game.ball.speed.y = -this.game.ball.speed.y;
      this.game.ball.speed.x = -this.game.ball.speed.x;

      this.checkCollisionSide(this.game.ball, this);

      this.live -= 1;
      if (this.live === 0) {
        this.marked = true;
      }
    }
  }
}
