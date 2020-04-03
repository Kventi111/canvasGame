import { detectCollision } from "./collisionDetection";

export default class Bricks {
  constructor(game, position) {
    this.game = game;
    this.image = document.getElementById('img_bricks');

    this.position = position;

    this.width = 40;
    this.height = 40;
  }

  draw(ctx) {
    const { x, y } = this.position;

    ctx.drawImage(this.image, x, y, this.width, this.height);
  }

  update() {
    if (detectCollision(this.game.ball,this)) {
      this.game.ball.speed.y = -this.game.ball.speed.y  
    }
  }
}
