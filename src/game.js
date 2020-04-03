

export default class {

  constructor(gameWidth,gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  start() {}


  draw(ctx) {
    ctx.clearRect(0,0,this.gameWidth,this.gameHeight);
  }

  update(deltaTime) {}
}