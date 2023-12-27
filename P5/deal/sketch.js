let mic;
let vol = 0;
let size = 100; // Increased initial text size

function setup() {
  createCanvas(windowWidth, windowHeight);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(255, 200,0);
  vol = mic.getLevel();
  size = map(vol, 0, 1, 50, 200, 300);
  
  textAlign(CENTER, CENTER); // Center the text
  fill("red");
  textSize(size * 10);
  text("DEAL", windowWidth / 2, windowHeight / 2);
  fill("white");
  textSize(size);
  let xOffset = 50; // Adjust the spacing between letters
  text("b", windowWidth / 2 - xOffset, windowHeight / 2);
  text("i", windowWidth / 2, windowHeight / 2);
  text("g", windowWidth / 2 + xOffset, windowHeight / 2);
}
