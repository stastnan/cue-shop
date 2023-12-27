// credit https://editor.p5js.org/NanoDano/sketches/uPjr9HJa6

let radius;
let angle;
var step; //distance between steps in radians
let redValue, greenValue, blueValue;
let saveButton;
let canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
  frameRate(1000);
  
  resetSketch()
  
  saveButton = createButton("Save Canvas");
  saveButton.mousePressed(save);
  // copyButton = createButton('Copy Canvas');
  // copyButton.mousePressed(copyCanvas);
  resetButton = createButton('RESET');
  resetButton.mousePressed(resetSketch)
}

function randomDeviation() {
  return random(maxDeviation * -1, maxDeviation);
}
function draw() {
  // Make the center of the screen the new (0, 0)
  translate(width / 2, height / 2);

  radius += 1;

  // Convert polar coordinates to cartesian coordinates
  var x = radius * sin(angle);
  var y = radius * cos(angle);

  let randomColor = color(
    redValue + randomDeviation(),
    greenValue + randomDeviation(),
    blueValue + randomDeviation()
  );
  stroke(randomColor);
  fill(randomColor);

  // Draw a circle at each point around circle
  rect(x, y, radius);

  // Move to next angle
  angle = angle + step;
fill("white")
  text("time to be scared of the results?", -800, 400);
  textSize(20);
  text("RUN!", -800, 450);
}

function copyCanvas() {
  console.log(canvas.id());
  realCanvas = document.getElementById(canvas.id());
  realCanvas.toBlob(function (blob) {
    const item = new ClipboardItem({ "image/png": blob });
    navigator.clipboard.write([item]);
  });
}

function resetSketch() {
  radius = 70; // Distance from enter
  angle = 0; // Current angle around circle
  step = TWO_PI / random(10); // How many steps around circle
  background(0);
  redValue = random(256);
  greenValue = random(256);
  blueValue = random(256);
  maxDeviation = random(128);
}




