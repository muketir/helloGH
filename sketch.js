var dots = [];
var i = 0;
var x = 0;
var y = 0;
var rad = 10;
var expand = 0;
var read = false;
var cleanBoard = false;
var write = false;

function setup() {
  // noCanvas(window.innerWidth, window.innerHeight);
  var canv = createCanvas(windowWidth*0.8, windowHeight*0.5);
  canv.parent("canvas-container");
  canv.class("w3-black w3-card-4 ");
  canv.elt.style.border = "3px solid orange";
  canv.elt.style.borderRadius = "20px";  
}

function draw() {
    x = mouseX;
    y = mouseY;
    ellipses(x, y, 20, 20);
}
