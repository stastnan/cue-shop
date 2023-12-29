// API sourced from EDAMAM.COM
let foodData;

function preload() {
  foodData = loadJSON('https://api.edamam.com/api/food-database/v2/parser?app_id=fee6d589&app_key=d0199b7342a6dd284010e5249eae340f&nutrition-type=cooking');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(16);
  noLoop();
//BUTTON
  let button = createButton('gimme dairy dinner!');
  button.position(windowWidth/2, windowHeight/2);
  button.style('background-color', '#FFA500');
  button.style('border', 'none');
  button.style('color', '#fff');
  button.style('padding', '10px 20px');
  button.style('border-radius', '20px');
  button.style('cursor', 'pointer'); 
  button.style('z-index', '10'); // Z-INDEX FOR BUTTON ABOVE PICTURES
  button.mousePressed(() => {
    displayRandomFoodItem();
    generateRandomBackground();
  });

  displayRandomFoodItem();
  generateRandomBackground();
}

function displayRandomFoodItem() {

  if (foodData.hints && foodData.hints.length > 0) {
    // RANDOM FOOD SELECTION
    let randomIndex = floor(random(foodData.hints.length));
    let selectedFood = foodData.hints[randomIndex].food;

    // Display the image of the food based on ENERC_KCAL
    if (selectedFood.image && selectedFood.nutrients.ENERC_KCAL) {
      let kcal = selectedFood.nutrients.ENERC_KCAL;
      let repetitions = int(sqrt(kcal / 2)); // Adjust the divisor as needed

      for (let i = 0; i < repetitions; i++) {
        for (let j = 0; j < repetitions; j++) {
          let img = createImg(selectedFood.image, 'food image');
          let imgSize = min(width, height) / repetitions;
          img.size(imgSize, imgSize);
          img.position(random(i * imgSize) / 0.2, random(j * imgSize) * 2);
        }
      }
    }

    // KCAL TEXT (ENDED HIDDEN)
    fill(0);
    text(`Yummy calories in 100g: ${selectedFood.nutrients.ENERC_KCAL} kcal`, 1000, 100);
  } else {
    fill(0);
    text('No food items found', 1000, 100);
  }
}

function generateRandomBackground() {
  // RANDOM RGB VALUES
  let r = floor(random(256));
  let g = floor(random(256));
  let b = floor(random(256));
  background(r, g, b);
}
