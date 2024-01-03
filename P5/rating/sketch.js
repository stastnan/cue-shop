//credit: https://editor.p5js.org/lumar/sketches/ryqvb2crz

var bigSpeed = 7;
var bigSpeedy = 0;
var starArray = [];
var bigSize = 5;

function setup() { 
  createCanvas(windowWidth, windowHeight);
  background(0);
  for(var i = 0; i < 100; i++){
    var star = new StarBit();
    starArray.push(star);
  }
} 

function draw() { 
  background(0, 60);
  for(var i = 0; i < starArray.length; i++){
    starArray[i].move();
    starArray[i].display();
  }
  bigSpeed = map(mouseX, 0, width, -3, 3);
  bigSpeedy = map(mouseY, 0, height, -3, 3);

  // White text at the bottom
  fill(25, 100, 0);
  textSize(10);
  textAlign(CENTER, BOTTOM);
  text("Whose destiny you want to cross next?", width / 2, height - 10);
}

function StarBit(){
  this.angle = map(random(), 0, 1, 0, TWO_PI); // Start at a random angle around the circle
  this.distance = random(0, min(width, height) / 2);
  this.d = map(this.distance, 0, min(width, height) / 2, 0.2, 3);
  this.relativeSpeed = this.distance / 100 * bigSpeed;

  this.move = function(){
    // Move in a circular trajectory
    this.x = width / 2 + cos(this.angle) * this.distance;
    this.y = height / 2 + sin(this.angle) * this.distance;
    this.angle += radians(this.relativeSpeed);
  }

  this.display = function(){
    fill(255, 255, 0); // Yellow color
    noStroke();
    ellipse(
      this.x,
      this.y,
      this.d * (map(noise(this.x, this.y, 0.001 * frameCount), 0, 1, 0.2, 1.5)),
      this.d * (map(noise(this.x, this.y, 0.001 * frameCount), 0, 1, 0.2, 1.5))
    );
  }
}
