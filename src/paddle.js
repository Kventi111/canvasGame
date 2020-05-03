export default class {
  constructor({gameWidth,gameHeight,ball}) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.image = document.getElementById('img_sprite');

    this.width = 100
    this.height = 30

    this.maxSpeed = 60;
    this.speed = 0;

    this.position = {
      x: gameWidth / 2 - this.width / 2, 
      y: gameHeight - this.height - 80
    }    

    console.log({ ball });
    
  }

  draw(ctx) {
    const { x,y } = this.position;

    ctx.drawImage(this.image, 8,150,65,20,x,y,this.width,this.height);
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