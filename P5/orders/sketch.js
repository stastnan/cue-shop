let angle = 0.0;
let jitter = 0.0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL); // Enable WEBGL mode for 3D
  fill(255, 100, 0);
  stroke(255); 
}

function draw() {

  if (second() % 2 === 0) {
    jitter = random(-0.1, 0.1);
  }


  angle = angle + jitter;

  // Use cosine to get a smooth CW and CCW motion when not jittering
  let c = cos(angle);

  // Set background with a changing gradient
  let c1 = color(255, 100, 0);
  let c2 = color(0, 100, 255);
  background(lerpColor(c1, c2, 0.5 + 0.5 * cos(angle)));

 
  translate(0, 0);// centre of canvas

  rotateX(c);
  rotateY(c);
  box(180); // cube
}
