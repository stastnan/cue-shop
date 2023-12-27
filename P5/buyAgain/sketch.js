let currentHue = 100;
let angle = 0;
let textColor = 0;

function drawStars() {
  fill(0, 0, 80 + random(20));
  circle(60, 120, random(3));
  circle(70, 80, random(3));
  circle(10, 15, random(3));
  circle(90, 140, random(3));
  circle(100, 200, random(3));
  circle(210, 220, random(3));
  circle(240, 260, random(3));
  circle(290, 310, random(3));
  circle(50 + 100, 340, random(3));
  circle(40 + 50, 40, random(3));
  circle(300 + 30, 350 - 100, random(3));
  circle(100 - 40, 200 + 200, random(3));
  circle(210 + 20, 220 - 30, random(3));
  circle(240 + 20, 40 + 60, random(3));
  circle(290, 310, random(3));
  circle(100 + 100, 340, random(3));
  circle(350, 350, random(3));
  circle(300, 350, random(3));
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  colorMode(HSB);
  rectMode(CENTER);
  background(0);
}

function draw() {
  translate(200, 200);
  rotate(angle);
  noFill();
  strokeWeight(15);
  stroke(currentHue, 50, 80, 0.1);
  if (currentHue > 360) {
    currentHue = 0;
  }
  currentHue = currentHue + 1;
  angle = angle + 1;
  rect(0, 0, 70);
  circle(160, 80, 70);
  circle(60, 40, 70);
  rect(160, 60, 70);
  drawStars();
  textSize(60);
  fill(textColor, 255, 255);
  text("are you buying more stuff yet?", 100, 200);
  textColor = (textColor + 1) % 360;
}
