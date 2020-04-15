/** GLOBAL VARIABLES **/

const WIDTH = 800;
const HEIGHT = 600;

const LEFT_ARROW = 37;
const UP_ARROW = 38;
const DOWN_ARROW = 40;
const RIGHT_ARROW = 39;
const SPACEBAR = 32;

const animate = window.requestAnimationFrame;

let canvas;
let ctx;
let player;
let frame = 0;

/** GAME SETUP **/
function setup() {
  // grab the canvas
  canvas = document.querySelector('canvas');
  // use the canvas to setup our context
  ctx = canvas.getContext('2d');

  player = new Player((WIDTH / 2) - 10, (HEIGHT / 2) - 10);
  animate(draw);
}

function draw() {
  clearBackground();
  drawBackground();
  player.draw();
  console.log(player.facingPosition)
  animate(draw);
}

function clearBackground() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

function drawBackground() {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, WIDTH, HEIGHT);
}

/** INITIALIZE GAME **/

document.addEventListener('DOMContentLoaded', function () {
  setup();
})