//
//  Canvas
//

//  Canvas Declaration
var mycanvas = document.getElementById("myCanvas");
var canvasContext = mycanvas.getContext("2d");
var bgColor = "#000000";
var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;

// set canvas size
mycanvas.width = window.innerWidth;
mycanvas.height = window.innerHeight;

// Clear screen
canvasContext.clearRect(0, 0, mycanvas.width, mycanvas.height);


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
//     // this.x = Math.round(Math.random() * mycanvas.width);
//     // this.y = Math.round(Math.random() * mycanvas.height);
//   }
// }

// Dot "class" ///////////
function Dots() {
  this.x = Math.round(Math.random() * mycanvas.width);
  this.y = Math.round(Math.random() * mycanvas.height);
}
///////////////////////



// Initialize dot///////
var dot = new Dots;
////////////////////////

// draw Dots
function drawDots(objDot) {
  // fade = (dR-dAge)/dR;
  // canvasContext.globalAlpha = fade;
  canvasContext.fillStyle = dotColor;
  canvasContext.beginPath();
  canvasContext.strokeStyle = dotColor;
  canvasContext.arc(objDot.x, objDot.y, /// Location of dot on canvas
          dotSize, // size of dot
          0, // starting angel
          2 * Math.PI // ending angel
        );
  canvasContext.fill();
  canvasContext.closePath();
  // canvasContext.globalAlpha = 1.0;
}

/////////////////////////
// draw/animate  ////////
/////////////////////////

function draw() {

  // fade/clear the canvas
  canvasContext.globalAlpha = 1.0;
  canvasContext.fillStyle = bgColor;
  canvasContext.fillRect(0, 0, mycanvas.width, mycanvas.height);

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
