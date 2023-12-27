function setup() {
  let apiKey = 'YOUR_API_KEY';
  let url = `https://api.unsplash.com/photos/random?query=food&client_id=${apiKey}`;
  loadJSON(url, gotData);
}

function gotData(data) {
  // Display a random image related to food from Unsplash in your p5.js sketch
  createImg(data.urls.regular);
}
