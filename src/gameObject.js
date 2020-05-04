export default class GameObject {
  constructor({ x, y, vx, vy, height, width, color, weight }) {
    this.x = x;
    this.y = y;

    this.vx = vx;
    this.vy = vy;

    this.width = width;
    this.height = height;
    this.weight = weight;

    this.color = color;

    this.isColliding = false;
  }

  draw(ctx) {
    const { x, y, width, height } = this;

    ctx.fillStyle = this.isColliding ? "#ff8080" : "#0099b0";
    ctx.fillRect(x, y, width, height);
  }

  update(deltaTime) {
    //Move with set velocity
    this.x += this.vx * deltaTime;
    this.y += this.vy * deltaTime;
  }
}
