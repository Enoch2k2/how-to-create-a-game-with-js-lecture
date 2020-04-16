class LaserBeam {
  static all = [];

  constructor(position) {
    this.startingPosition(position);
    this.color = 'green';
    LaserBeam.all.push(this);
  }

  startingPosition(position) {
    if (position.facing == "up") {
      this.width = 4;
      this.height = 10;
      this.x = position.x;
      this.y = position.y - this.height;
      this.xspeed = 0;
      this.yspeed = -3;
    } else if (position.facing == "down") {
      this.width = 4;
      this.height = 10;
      this.x = position.x;
      this.y = position.y;
      this.xspeed = 0;
      this.yspeed = 3;
    } else if (position.facing == "left") {
      this.width = 10;
      this.height = 4;
      this.x = position.x - 4;
      this.y = position.y;
      this.xspeed = -3;
      this.yspeed = 0;
    } else if (position.facing == "right") {
      this.width = 10;
      this.height = 4;
      this.x = position.x;
      this.y = position.y;
      this.xspeed = 3;
      this.yspeed = 0;
    }
  }

  update() {
    this.x += this.xspeed;
    this.y += this.yspeed;
  }

  draw() {
    this.update();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  static drawAll() {
    LaserBeam.all.forEach(laserbeam => laserbeam.draw());
  }
}