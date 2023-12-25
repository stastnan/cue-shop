/*
WEBCAM CODE:
Jeff Thompson | 2021 | jeffreythompson.org
https://editor.p5js.org/jeffThompson/sketches/ael8Y4YMB
*/

let video;
let button;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // create a video capture 
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  // create a button that takes a picture
  button = createButton('Take Picture');
  button.position(0, 0);
  button.mousePressed(takePicture);
}

function draw() { 
  // black out the video feed
  background(0);
}

function takePicture() {
  // take a picture
  let picture = video.get();

  // display the picture
  image(picture, 0, 0);
}
