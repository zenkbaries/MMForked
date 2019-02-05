// Canvas javascript

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
