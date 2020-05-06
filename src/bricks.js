import { detectCollision } from "./collisionDetection";

export default class Bricks {
  constructor(game, position) {
    this.game = game;
    this.image = document.getElementById("img_sprite");
    this.sound = document.getElementById("brick_hit");

    this.position = position;

    this.width = 50;
    this.height = 30;

    this.marked = false;
    this.live = 2;
  }

  draw(ctx) {
    const { x, y } = this.position;

    ctx.drawImage(this.image, 8, 8, 32, 16, x, y, this.width, this.height);
  }

  update() {
    if (detectCollision(this.game.ball, this)) {
      let {
        ball: {
          width: ballW,
          hegiht: ballH,
          speed: { x: ballDx, y: ballDy },
          position: { x: ballX, y: ballY },
        },
      } = this.game;

      debugger;
      if (ballY + 2 >= this.position.y + this.height) {
        console.log("bottom");

        this.game.ball.speed.y = -this.game.ball.speed.y;
      } else if (ballY + 2 <= this.position.y) {
        console.log("top");

        this.game.ball.speed.y = -this.game.ball.speed.y;
      } else if (ballX + 2 <= this.position.x + this.width) {
        console.log("left");
        this.game.ball.speed.x = -this.game.ball.speed.x;

      } else {
        console.log("right");
        this.game.ball.speed.x = -this.game.ball.speed.x;
      }

      // if (
      //   ballY + 2 <= this.position.y
      // ) {
      //   console.log("top");

      //   this.game.ball.speed.y = -this.game.ball.speed.y;
      // }

      // if (ballX + 2 <= this.position.x + this.width) {
      //   console.log('right');
      // }

      // if (ballX + ballW >= this.position.x) {
      //   console.log('left');
      // }

      // this.game.ball.speed.x = -this.game.ball.speed.x;

      this.marked = true;
      this.live -= 1

      this.sound.play();
    }
  }
}
