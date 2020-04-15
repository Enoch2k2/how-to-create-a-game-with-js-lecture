class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.xspeed = 0;
    this.yspeed = 0;
    this.color = 'white';
    this.width = 20;
    this.height = 20;
    this.facingPosition = {
      up: true,
      left: false,
      down: false,
      right: false
    }

    this.laserBeamPosition = {
      up: {
        x: this.x + (this.width / 2) - 2,
        y: this.y - 10,
        width: 4,
        height: 4
      }
    }

    document.addEventListener('keydown', this.move.bind(this));
    document.addEventListener('keyup', this.stop.bind(this));
  }

  resetSpeed() {
    this.xspeed = 0;
    this.yspeed = 0;
  }

  resetFacingPosition() {
    this.facingPosition = {
      up: false,
      left: false,
      down: false,
      right: false
    }
  }

  update() {
    this.x += this.xspeed;
    this.y += this.yspeed;
    this.updateLaserBeamPosition();
  }

  draw() {
    this.update();
    this.drawLaserBeamPoisition();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  move(e) {
    e.preventDefault();
    this.resetSpeed();
    this.resetFacingPosition();

    switch (e.which) {
      case UP_ARROW:
        this.yspeed = -1;
        this.facingPosition.up = true;
        break;
      case DOWN_ARROW:
        this.yspeed = 1;
        this.facingPosition.down = true;
        break;
      case LEFT_ARROW:
        this.xspeed = -1;
        this.facingPosition.left = true;
        break;
      case RIGHT_ARROW:
        this.xspeed = 1;
        this.facingPosition.right = true;
        break;
      case SPACEBAR:
        this.fireLaserBeam();
        break;
    }
  }

  stop(e) {
    e.preventDefault();

    switch (e.which) {
      case UP_ARROW:
        this.yspeed = 0;
        break;
      case DOWN_ARROW:
        this.yspeed = 0;
        break;
      case LEFT_ARROW:
        this.xspeed = 0;
        break;
      case RIGHT_ARROW:
        this.xspeed = 0;
        break;
    }
  }

  drawLaserBeamPoisition() {
    // up: {
    //   x: this.player.x + (this.player.width / 2) - 2,
    //   y: this.player.y - 3,
    //   width: 4,
    //   height: 4
    // }

    ctx.fillStyle = 'green';
    ctx.fillRect(this.laserBeamPosition.up.x, this.laserBeamPosition.up.y, this.laserBeamPosition.up.width, this.laserBeamPosition.up.height);
  }

  updateLaserBeamPosition() {
    this.laserBeamPosition = {
      up: {
        x: this.x + (this.width / 2) - 2,
        y: this.y - 10,
        width: 4,
        height: 4
      }
    }
  }

  drawLaserBeam() {

  }

  fireLaserBeam() {

  }
}