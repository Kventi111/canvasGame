import GameObject from "./gameObject";

import { detectCollisions } from "./utils";

export default class {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  start() {
    this.gameObjects = [
      new GameObject({
        x: this.gameWidth / 2 + 10 ,
        y: 10,
        vx: 0.0,
        vy: 0.1,
        width: 100,
        height: 50,
        game: this
      }),
      new GameObject({
        x: this.gameWidth / 2,
        y: this.gameHeight - 100,
        vx: 0.0,
        vy: -0.3,
        width: 100,
        height: 50,
        game: this
      }),
      new GameObject({
        x: 100,
        y: 600,
        vx: 0.0,
        vy: -0.3,
        width: 100,
        height: 50,
        game: this
      }),
      new GameObject({
        x: 550,
        y: 600,
        vx: 0.0,
        vy: -0.3,
        width: 100,
        height: 50,
        game: this
      }),
      new GameObject({
        x: 500,
        y: 200,
        vx: 0.0,
        vy: -0.3,
        width: 100,
        height: 50,
        game: this
      }),
      new GameObject({
        x: 500,
        y: 500,
        vx: 0.0,
        vy: -0.3,
        width: 100,
        height: 50,
        game: this
      }),
    ];
  }

  // draw(ctx) {
  //   ctx.clearRect(0,0,this.gameWidth,this.gameHeight);

  //   this.gameObject.draw(ctx)
  // }

  update(deltaTime, ctx) {
    detectCollisions(this.gameObjects);
    this.gameObjects.forEach((obj) => obj.update(deltaTime));

    ctx.clearRect(0, 0, this.gameWidth, this.gameHeight);

    this.gameObjects.forEach((obj) => obj.draw(ctx));
  }
}
