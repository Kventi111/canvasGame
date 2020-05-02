import { detectCollision } from './collisionDetection';

export default class Bricks {
  constructor(game, position) {
    this.game = game;
    this.image = document.getElementById('img_bricks');

    this.position = position;

    this.width = 33;
    this.height = 33;

    this.marked = false;
    this.live = 1;
  }

  draw(ctx) {
    const { x, y } = this.position;

    ctx.drawImage(this.image, x, y, this.width, this.height);
  }

  update() {
    if (detectCollision(this.game.ball, this)) {
      this.game.ball.speed.y = -this.game.ball.speed.y;
      this.game.ball.speed.x = -this.game.ball.speed.x;

      this.live -= 1;
      if (this.live === 0) {
        this.marked = true;
      }
    }
  }
}
