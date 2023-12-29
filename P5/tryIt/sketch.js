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

  // VIDEO CAPTURE
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  mic = new p5.AudioIn();
  mic.start();

  // ERROR MESSAGE
  errorMessage = createP('Sorry, there was an error in this feature. Please exit the website. Error log generated.');
  errorMessage.style('color', 'red');
  errorMessage.style('font-family', 'Arial');
  errorMessage.style('font-size', '24px');
  errorMessage.style('font-weight', 'bold');
  errorMessage.style('text-align', 'center');

  // BUTTON = CAPTURE + DOWNLOAD
  captureButton = createButton('Exit page');
  captureButton.position(width / 2 - 150, height / 2 + 50);
  captureButton.mousePressed(captureAndDownload);
  captureButton.style('font-size', '18px');
  captureButton.style('padding', '10px');
}

function draw() { 
  // ERROR MESSAGE
  errorMessage.position(width / 2 - errorMessage.width / 2, height / 2 - 50);
}

function captureAndDownload() {
  // CAPTURE
  let picture = video.get();

  // DOWNLOAD TEMPORARY LINK
  let link = document.createElement('a');

  // CAPTURE FILE NAME
  let fileName = 'errorlog';
  let fileExtension = 'png'; 

  link.href = picture.canvas.toDataURL('image/' + fileExtension);
  link.download = fileName + '.' + fileExtension;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
