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


//
//   algorithm
//

//  Declaration

var dotColor = "#FFFFFF"; // color of the dot
var dotSize = 5;  // size of dot in "pixel diameter"
var dirX = 10; // speed of the dot's movement along x-axis
var dirY = 10; // speed of the dot's movement along y-axis

// // Dot class
// class Dots {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//     // this.x = Math.round(Math.random() * c.width);
//     // this.y = Math.round(Math.random() * c.height);
//   }
// }

// Dot "class" ///////////
function Dots() {
  this.x = Math.round(Math.random() * c.width);
  this.y = Math.round(Math.random() * c.height);
}
///////////////////////



// Initialize dot///////
var dot = new Dots;
////////////////////////

// draw Dots
function drawDots(objDot) {
  // fade = (dR-dAge)/dR;
  // ctx.globalAlpha = fade;
  ctx.fillStyle = dotColor;
  ctx.beginPath();
  ctx.strokeStyle = dotColor;
  ctx.arc(objDot.x, objDot.y, /// Location of dot on canvas
          dotSize, // size of dot
          0, // starting angel
          2 * Math.PI // ending angel
        );
  ctx.fill();
  ctx.closePath();
  // ctx.globalAlpha = 1.0;
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


  // add new Drops to array after delay
  // if (count >= 5) {
  //   //new raindrop
  //   drops.push(new Raindrops);
  //   count = 0;
  // }

  // draw each drops in array
  // for(var i=0; i < drops.length; i++) {
  //   drops[i].age += 1;
  //   eachDrop = drops[i];
  //   if (eachDrop.age >= eachDrop.r) {
  //     drops.splice(i,1);
  //   }
  //   // this next line needs refactoring
  //   drawRaindrop(eachDrop.x, eachDrop.y, eachDrop.r, eachDrop.age);
  // }
  // count += 1;

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
