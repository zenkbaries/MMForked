---
date: "2018-10-27 07:28:11 -0600"
canvas: true
title: Bouncing Dots
css: canvas
js: bouncingdot
description:
tags:
-   coding
-   javascript
-   animation
-   canvas
---

## Codes

```javascript
//
//  Canvas
//

//  Canvas Declaration
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var bgColor = "#000000";
var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;

// set canvas size
c.width = window.innerWidth;
c.height = window.innerHeight;

// Clear screen
ctx.clearRect(0, 0, c.width, c.height);

//  Declaration

var dotColor = "#FFFFFF"; // color of the dot
var dotSize = 5;  // size of dot in "pixel diameter"
var dirX = 10; // speed of the dot's movement along x-axis
var dirY = 10; // speed of the dot's movement along y-axis


// Dot "class" ///////////
function Dots() {
  this.x = Math.round(Math.random() * c.width);
  this.y = Math.round(Math.random() * c.height);
}

// Initialize dot///////
var dot = new Dots;

// draw Dots
function drawDots(objDot) {
  ctx.fillStyle = dotColor;
  ctx.beginPath();
  ctx.strokeStyle = dotColor;
  ctx.arc(objDot.x, objDot.y, dotSize, 0, 2 * Math.PI);
  ctx.fill();
  ctx.closePath();
}

/////////////////////////
// draw/animate  ////////
/////////////////////////

function draw() {

  // fade/clear the canvas
  ctx.globalAlpha = 1.0;
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, c.width, c.height);

  // has dot hit the boundry? //
  if ((dot.x <= 0) || (dot.x >= screenWidth)) {
    dirX = dirX * -1; // reverse direction
  }
  if ((dot.y <= 0) || (dot.y >= screenHeight)) {
    dirY = dirY * -1; //reverse direction
  }

  //  move the dot's position
  dot.x = dot.x + dirX;
  dot.y = dot.y + dirY;

  // draw the dot on screen
  drawDots(dot);
}



//////////////////////////
//   drawing/Animation  //
//////////////////////////

// Initalize the animationFrame
//  it gets the browser's own timeloop animation API
window.requestAnimFrame = (
  function() {
    return window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      function(callback) {
        window.setTimeout(callback, 1000 / 60);
      };
  }
)();

// animate function
function animate() {
  requestAnimFrame(animate);  // starts the animation loop
  draw();  // draw on the canvas at each iteration
}

//start animation
animate();

```
