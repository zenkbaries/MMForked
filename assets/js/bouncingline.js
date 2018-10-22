//
//  Canvas
//

//  Canvas Declaration
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var bgColor = "#000000";
var scrW = window.innerWidth;
var scrH = window.innerHeight;

// set canvas size
c.width = window.innerWidth;
c.height = window.innerHeight;

// Clear screen
ctx.clearRect(0, 0, c.width, c.height);


//
//   algorithm
//

//  Declaration
var lineColor = "#FFFFFF";
var lineSize = 5;
var dirX1 = 10;
var dirY1 = 10;
var dirX2 = -10;
var dirY2 = -10;

// create line
function Lines() {
  this.x1 = Math.round(Math.random() * c.width);
  this.y1 = Math.round(Math.random() * c.height);
  this.x2 = Math.round(Math.random() * c.width);
  this.y2 = Math.round(Math.random() * c.height);

}

// Initialize line
var line = new Lines;

// draw Lines
function drawLines(objLine) {

  ctx.fillStyle = lineColor;

  ctx.beginPath();
  ctx.moveTo(objLine.x1, objLine.y1);
  ctx.lineTo(objLine.x2, objLine.y2);
  ctx.lineWidth = 5;
  ctx.strokeStyle = lineColor;
  ctx.stroke();
  ctx.closePath();

}

// draw - where animation is

function draw() {

  // fade/clear the canvas
  ctx.globalAlpha = 1.0;
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, c.width, c.height);

  //  change direction of line's end if hitting boundary

  if ((line.x1 <= 0) || (line.x1 >= scrW)) {
    dirX1 = dirX1 * -1;
  }

  if ((line.y1 <= 0) || (line.y1 >= scrH)) {
    dirY1 = dirY1 * -1;
  }

  if ((line.x2 <= 0) || (line.x2 >= scrW)) {
    dirX2 = dirX2 * -1;
  }

  if ((line.y2 <= 0) || (line.y2 >= scrH)) {
    dirY2 = dirY2 * -1;
  }

  line.x1 = line.x1 + dirX1;
  line.y1 = line.y1 + dirY1;
  line.x2 = line.x2 + dirX2;
  line.y2 = line.y2 + dirY2;

  drawLines(line);

}

//
//  Animation
//

// Initalize the animationFrame
window.requestAnimFrame = (
  function() {
    return  window.requestAnimationFrame        ||
            window.webkitRequestAnimationFrame  ||
            window.mozRequestAnimationFrame     ||
            function(callback) {
              window.setTimeout(callback, 1000 / 60);
            };
  }
)();

// animate function
function animate() {
  requestAnimFrame(animate);
  draw();
}

//start animation
animate();
