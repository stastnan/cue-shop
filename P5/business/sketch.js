let Models = [
  ["John", "Alice", "Bob", "Eva", "Daniel", "Sophia", "Liam", "Olivia"],
  ["Jane", "Charlie", "David", "Sophie", "Mia", "Ethan", "Isabella", "Noah"],
  ["Olivia", "Michael", "Emma", "James", "Ava", "Logan", "Sophia", "Jackson"],
];
let Brands = [
  "Smith",
  "Johnson",
  "Williams",
  "Jones",
  "Brown",
  "Davis",
  "Miller",
  "Wilson",
  "Moore",
  "Taylor",
  "Anderson",
  "Thomas",
];

let index = 0;
let innex = 0;
let inex = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(120, 200, 40);
  fill(255);
  textSize(60);
  text("missing person generator", 15, 50);
  fill(255, 102, 0);
  textSize(100);
  text(Models[index][innex], 300, 500);
  textSize(100);
  text(Brands[inex], 900, 500);
  textSize(20);
  text(
    "click your mouse, press your buttons for some family-friendly fun!",
    15,
    100
  );

  if (mouseX < 100) {
    inex = 0;
  } else if (mouseX < 200) {
    inex = 1;
  } else if (mouseX < 300) {
    inex = 2;
  } else if (mouseX < 400) {
    inex = 3;
  } else if (mouseX < 500) {
    inex = 4;
  } else if (mouseX < 600) {
    inex = 5;
  } else if (mouseX < 700) {
    inex = 6;
  } else if (mouseX < 800) {
    inex = 7;
  } else if (mouseX < 900) {
    inex = 8;
  } else if (mouseX < 1000) {
    inex = 9;
  } else if (mouseX < 1100) {
    inex = 10;
  } else {
    inex = 11;
  }
}

function mousePressed() {
  index = index + 1;
  if (index === Models.length) {
    index = 0;
  }
}

function keyPressed() {
  innex = innex + 1;
  if (innex === Models[0].length) {
    innex = 0;
  }
}
