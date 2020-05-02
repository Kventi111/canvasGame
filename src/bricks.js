import { detectCollision } from './collisionDetection';

export default class Bricks {
  constructor(game, position) {
    this.game = game;
    this.image = document.getElementById('img_sprite');

    this.position = position;

    this.width = 50;
    this.height = 50; 

    this.marked = false;
    this.live = 1;
  }

  draw(ctx) {
    const { x, y } = this.position;

    ctx.drawImage(this.image, 8,8,32,16,x,y,50,30);
  }

  update() {
    if (detectCollision(this.game.ball, this)) {
      this.game.ball.speed.y = -this.game.ball.speed.y;
      this.game.ball.speed.x = -this.game.ball.speed.x;

      this.marked = true;
    }
  }
}
