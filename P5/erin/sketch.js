let font;
let bgColor1, bgColor2;

function setup() {
  createCanvas(windowWidth, windowHeight);


  bgColor1 = color(102, 51, 153); 
  bgColor2 = color(51, 102, 204); 


  font = loadFont('path/to/your/font.ttf', () => {

    textFont(font);
  });
}

function draw() {
  
  let gradientColor = lerpColor(bgColor1, bgColor2, mouseX / width);
  background(gradientColor);

 
  displayText(mouseX, mouseY);
}



function displayText(x, y) {
  let speed = dist(mouseX, mouseY, pmouseX, pmouseY);
  let fontSize = map(speed, 0, 100, 10, 40); 
  textSize(fontSize);
  fill(255);
  text("where is Erin?", x, y);
}
