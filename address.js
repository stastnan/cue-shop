function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getPosition);
  }
}

// Function to show the user's position on the map
function getPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  downloadTextFile(latitude, longitude);
}

const addButton = document.getElementById("overlay");
addButton.addEventListener("click", getLocation);

//COORDINATES DOWNLOAD

function downloadTextFile(latitude, longitude) {
  // Create a string with the coordinates
  const coordinatesText =
    "Tip! You are here: \nLatitude: " +
    latitude +
    "\nLongitude: " +
    longitude;

  // Create a Blob with the coordinates text
  const blob = new Blob([coordinatesText], { type: "text/plain" });

  // Create a link element to trigger the download
  const a = document.createElement("a");
  a.href = window.URL.createObjectURL(blob);
  a.download = "google_updater.txt";

  // Append the link to the document, trigger the click, and remove the link
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
