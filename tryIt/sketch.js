/*
WEBCAM CODE:
Jeff Thompson | 2021 | jeffreythompson.org
https://editor.p5js.org/jeffThompson/sketches/ael8Y4YMB
*/

let video;
let captureButton;
let errorMessage;
let mic;
let vol = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // create a video capture 
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  mic = new p5.AudioIn();
  mic.start();

  // create an element for the error message
  errorMessage = createP('Sorry, there was an error in this feature. Please exit the website. Error log generated.');
  errorMessage.style('color', 'red');
  errorMessage.style('font-family', 'Arial');
  errorMessage.style('font-size', '24px');
  errorMessage.style('font-weight', 'bold');
  errorMessage.style('text-align', 'center');

  // create a button that captures a picture and downloads it
  captureButton = createButton('Exit page');
  captureButton.position(width / 2 - 150, height / 2 + 50);
  captureButton.mousePressed(captureAndDownload);
  captureButton.style('font-size', '18px');
  captureButton.style('padding', '10px');
}

function draw() { 
  // Display the error message
  errorMessage.position(width / 2 - errorMessage.width / 2, height / 2 - 50);
}

function captureAndDownload() {
  // capture a picture
  let picture = video.get();

  // create a temporary link and trigger a click to download
  let link = document.createElement('a');

  // Set a custom file name and directory
  let fileName = 'errorlog'; // specify the file name without extension
  let fileExtension = 'png'; // specify the desired file extension

  link.href = picture.canvas.toDataURL('image/' + fileExtension);
  link.download = fileName + '.' + fileExtension; // concatenate the file name and extension

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
