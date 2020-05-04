export default class GameObject {
  constructor({ x, y, vx, vy, height, width, color, weight,game }) {
    this.x = x;
    this.y = y;

    this.vx = vx;
    this.vy = vy;

    this.width = width;
    this.height = height;
    this.weight = weight;

    this.color = color;

    this.isColliding = false;

    this.game = game;
  }

  draw(ctx) {
    const { x, y, width, height } = this;

    ctx.fillStyle = this.isColliding ? "#ff8080" : "#0099b0";
    ctx.fillRect(x, y, width, height);
  }

  boundaryBounce(x,y) {
    const { gameWidth,gameHeight } = this.game;

    if (x > gameWidth - this.width || x <= 0) {
        return true
    }

    if (y > gameHeight - this.height || y <= 0) {
        return true
    }

    return false
  }

  update(deltaTime) {
    // if (this.isColliding) {
    //     this.vx = -this.vx
    //     this.vy = -this.vy
    // }

    if (this.boundaryBounce(this.x,this.y)) {
        this.vx = -this.vx
        this.vy = -this.vy
    }
    //Move with set velocity
    this.x += this.vx * deltaTime;
    this.y += this.vy * deltaTime;
  }
}
