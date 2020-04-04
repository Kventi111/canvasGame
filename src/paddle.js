export default class {
  constructor({gameWidth,gameHeight}) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;

    this.width = 100
    this.hegiht = 20

    this.maxSpeed = 40;
    this.speed = 0;

    this.position = {
      x: gameWidth / 2 - this.width / 2, 
      y: gameHeight - this.hegiht - 10
    }
  }

  draw(ctx) {
    const { x,y } = this.position;

    ctx.fillStyle = 'red';
    ctx.fillRect(x,y,this.width,this.hegiht)
  }

  update(deltaTime) {
    this.position.x += this.speed / deltaTime;

    if (this.position.x + this.width > this.gameWidth || this.position.x < 0) {
      this.speed = 0
    }
  }

  moveRight() {
    this.speed = this.maxSpeed;
  }

  moveLeft() {
    this.speed = -this.maxSpeed;
  }
}