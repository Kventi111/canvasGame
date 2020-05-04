import GameObject from './gameObject';


export default class {

  constructor(gameWidth,gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  start() {
    this.gameObject = new GameObject({
      x: 300,
      y: 200,
      width: 100,
      height: 50
    })
  }


  draw(ctx) {
    ctx.clearRect(0,0,this.gameWidth,this.gameHeight);

    this.gameObject.draw(ctx)
  }

  update(deltaTime) {}
}