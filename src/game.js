import GameObject from "./gameObject";

export default class {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  start() {
    this.gameObjects = [
      new GameObject({
        x: 200,
        y: 200,
        vx: 0.02,
        vy: 0.01,
        width: 100,
        height: 50,
      }),
      new GameObject({
        x: 400,
        y: 400,
        vx: -0.01,
        vy: -0.02,
        width: 100,
        height: 50,
      }),
    ];
  }

  // draw(ctx) {
  //   ctx.clearRect(0,0,this.gameWidth,this.gameHeight);

  //   this.gameObject.draw(ctx)
  // }

  update(deltaTime, ctx) {
    this.gameObjects.forEach(obj => obj.update(deltaTime));

    ctx.clearRect(0, 0, this.gameWidth, this.gameHeight);

    this.gameObjects.forEach(obj => obj.draw(ctx));

  }
}
