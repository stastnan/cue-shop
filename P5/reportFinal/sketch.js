function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  angleMode(DEGREES);
}

function draw() {
  // Check if the mouse is in the specified area
  if (mouseX < 300 && mouseY < 50) {
    background('red');
  } else {
    background('black');
  }

  textSize(80);
  fill('black');
  textAlign(CENTER, CENTER);
  text("I wouldn't do that...", width /2, 50);
}
