export default class GameObject {
  constructor({ x, y, dx, dy, height, width, color, weight }) {
    this.x = x;
    this.y = y;

    this.dx = dx;
    this.dy = dy;

    this.width = width;
    this.height = height;
    this.weight = weight;

    this.color = color;    

    console.log(this.width);
    console.log(this.height);
  }

  draw(ctx) {
    const { x, y, width, height } = this;

    ctx.fillStyle = 'red';
    ctx.fillRect(x,y,width,height) 
  }

  update() {}
}
