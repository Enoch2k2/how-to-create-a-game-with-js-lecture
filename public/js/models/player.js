class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.xspeed = 0;
    this.yspeed = 0;
    this.color = 'white';
    this.width = 20;
    this.height = 20;
    this.canFire = true;
    this.facingPosition = {
      up: true,
      left: false,
      down: false,
      right: false
    }

    this.laserBeamPosition = {
      x: this.x + (this.width / 2) - 2,
      y: this.y - 10,
      width: 4,
      height: 4
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

    switch (e.which) {
      case UP_ARROW:
        this.resetFacingPosition();
        this.yspeed = -1;
        this.facingPosition.up = true;
        break;
      case DOWN_ARROW:
        this.resetFacingPosition();
        this.yspeed = 1;
        this.facingPosition.down = true;
        break;
      case LEFT_ARROW:
        this.resetFacingPosition();
        this.xspeed = -1;
        this.facingPosition.left = true;
        break;
      case RIGHT_ARROW:
        this.resetFacingPosition();
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
    ctx.fillRect(this.laserBeamPosition.x, this.laserBeamPosition.y, this.laserBeamPosition.width, this.laserBeamPosition.height);
  }

  updateLaserBeamPosition() {
    if (this.facingPosition.up) {
      this.laserBeamPosition = {
        x: this.x + (this.width / 2) - 2,
        y: this.y - 10,
        width: 4,
        height: 4
      }
    } else if (this.facingPosition.down) {
      this.laserBeamPosition = {
        x: this.x + (this.width / 2) - 2,
        y: this.y + this.height + 5,
        width: 4,
        height: 4
      }
    } else if (this.facingPosition.left) {
      this.laserBeamPosition = {
        x: this.x - 10,
        y: this.y + (this.height / 2) - 2,
        width: 4,
        height: 4
      }
    } else if (this.facingPosition.right) {
      this.laserBeamPosition = {
        x: this.x + this.width + 7,
        y: this.y + (this.height / 2) - 2,
        width: 4,
        height: 4
      }
    }
  }

  recharge() {
    setTimeout(() => {
      this.canFire = true;
    }, 250);
  }

  fireLaserBeam() {
    console.log(this)
    if (this.facingPosition.up && this.canFire) {
      new LaserBeam({
        x: this.laserBeamPosition.x,
        y: this.laserBeamPosition.y + this.laserBeamPosition.height,
        facing: 'up'
      })
      this.canFire = false;
      this.recharge();
    } else if (this.facingPosition.down && this.canFire) {
      new LaserBeam({
        x: this.laserBeamPosition.x,
        y: this.laserBeamPosition.y + this.laserBeamPosition.height,
        facing: 'down'
      })
      this.canFire = false;
      this.recharge();
    } else if (this.facingPosition.left && this.canFire) {
      new LaserBeam({
        x: this.laserBeamPosition.x,
        y: this.laserBeamPosition.y,
        facing: 'left'
      })
      this.canFire = false;
      this.recharge();
    } else if (this.facingPosition.right && this.canFire) {
      new LaserBeam({
        x: this.laserBeamPosition.x,
        y: this.laserBeamPosition.y,
        facing: 'right'
      })
      this.canFire = false;
      this.recharge();
    }
  }
}