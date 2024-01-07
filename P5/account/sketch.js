// sketch credits: https://editor.p5js.org/icm4.0/sketches/wP4mP8Ij4 + P5 camera example

let cam;
let a = 0;
let aspeed = 1;

function setup() {
  // WEBCAM STREAM
  cam = createCapture(VIDEO);
  cam.size(windowWidth, windowHeight);
  cam.hide();
  // MATCH CANVAS TO CAMERA SIZE
  createCanvas(cam.width, cam.height);
}

function draw() {
  background(255, 200, 0);
  
  // Draw cam stream frame by frame to canvas
  tint(255, 255);
  image(cam, 0, 0);

  // Flip the matrix horizontally
  push();
  scale(-1, 1);
  // Copy from x,y and w/2,h and Paste to -w,y,w/2,h


  copy(cam, 0, 0, width / 2, height, -width, 0, width / 2, height);
  pop();
  
  // Fade in/out the camera image
  tint(255, a);
  image(cam, 0, 0);
  
  // Change the alpha
  a += aspeed;
  // Bounce the alpha
  if (a > 255 || a < 0) aspeed *= -1;
  
  line(width / 2, 0, width / 2, height);

  textSize(20);
  text("u so pretty, Mark", 100, 100);
  filter(INVERT);
}
