var x = 0;
var y = 0;

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
    ellipse(x, y, 80, 80);
}
