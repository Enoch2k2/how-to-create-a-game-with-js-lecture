class LaserBeam {
  static all = [];

  constructor(position) {
    this.position = position;
    this.color = 'green';
    LaserBeam.all.push(this);
  }
}