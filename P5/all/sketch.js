// initial inspiration: https://happycoding.io/tutorials/p5js/arrays
let circleY = [];
let squareY = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 5000; i++) {
    circleY[i] = random(height);
  }
  for (let j = 0; j < 5000; j++) {
    squareY[j] = random(height);
  }
}

function draw() {
  background(200,0,100);
  stroke('white');
  fill(255,201,0);

  for (let i = 0; i < circleY.length; i++) {
    let circleX = width * i / circleY.length;
    circle(circleX, circleY[i], 10);

    circleY[i]++;
    
    if (circleY[i] > height) {
      circleY[i] = 0;
    }
  }
  for (let j = 0; j < squareY.length; j++) {
    let squareX = width * j / squareY.length;
    rect(squareX, squareY[j], 20, 30);

    squareY[j]++;
    
    if (squareY[j] > height) {
      squareY[j] = 0;
    }
  }
stroke(255,0,0);
  textSize(64);
  textAlign(CENTER, CENTER);
  textFont('Times New Roman');
  text("... but you can't always have it all", width/2, height/2);
  textSize(30);
  textAlign(CENTER, CENTER);
  textFont('Times New Roman');
  text("we continue to watch you", 1000, 520);
}
