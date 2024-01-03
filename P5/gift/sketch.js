let slider;
let slider2;
let slider3;
let textInput;
let captureButton;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  slider = createSlider(-100, 100, 0);
  slider2 = createSlider(0, 100, 50);
  slider3 = createSlider(0, 100, 50);
  
  slider.position(20, 20);
  slider2.position(20, 40);
  slider3.position(20, 60);
  
  slider.style('width', '200px');
  slider2.style('width', '200px');
  slider3.style('width', '200px');
  
  textInput = createInput('');
  textInput.position(40, 200);

  // PHOTO BUTTON
  captureButton = createButton('Take a pic, Qeen!');
  captureButton.position(20, 250);
  captureButton.mousePressed(captureAndDownload);
}

function draw() {
  let val = slider.value();
  let val2 = slider2.value();
  let val3 = slider3.value();
  
  background(val, val2, val3);

  textSize(50);
  text(val, 200, 200);
  textSize(30);
  text("Scam your friends with the new devious gift card.", 300, 50);
  text("Change colors, adjust amounts and get your coin!", 320, 85);
  text("Don't forget to add their name, so they feel valued!", 340, 120);
  
  let myText = textInput.value();
  
  fill(255);
  text(myText, 20, 300);
}

function captureAndDownload() {
  saveCanvas('gift_card', 'png');
}
