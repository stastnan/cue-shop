//COOKIES
function acceptCookies() {
  alert(
    "Thank you for accepting cookies on our site. We will remember that and will not ask about it again. We will also remember your email address, location and everything else you input. Thanks."
  );
  closeNotification();
}

function learnMore() {
  window.location.href = "error.html";
}

function rejectCookies() {
  alert(
    "We value your opinion and therefore are rejecting your choice and will still keep all the info and shove as many cookies down your throat as you let us."
  );
  closeNotification();
}

function closeNotification() {
  document.getElementById("cookie-notification").style.display = "none";
}

/*CHECKOUT PAGE - ACCORDION*/
const accordions = document.querySelectorAll(".accordion");

const openAccordion = (accordion) => {
  const content = accordion.querySelector(".accordion__content");
  const contentHeight = content.scrollHeight;

  accordion.classList.add("accordion__active");
  content.style.maxHeight = contentHeight * 100 + "px";
};

const closeAccordion = (accordion) => {
  const content = accordion.querySelector(".accordion__content");
  accordion.classList.remove("accordion__active");
  content.style.maxHeight = null;
};

accordions.forEach((accordion) => {
  const intro = accordion.querySelector(".accordion__intro");

  intro.onclick = () => {
    if (accordion.classList.contains("accordion__active")) {
      closeAccordion(accordion);
    } else {
      accordions.forEach((accordion) => closeAccordion(accordion));
      openAccordion(accordion);
    }
  };
});

/* PRODUCT GALLERY*/
const mainImage = document.querySelector(".main-image .gallery-image-main");
const thumbnails = document.querySelectorAll(".gallery .image ");

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    mainImage.src = thumbnail.src.replace("/1000/", "/1000/");
  });
});

/*DELIVERY TIMES*/
function getRandomDeliveryTime() {
  let randomHours;
  let randomMinutes;

  randomHours = Math.floor(Math.random() * 24);
  randomMinutes = Math.floor(Math.random() * 60);

  let timeMinutes = randomMinutes === 1 ? "min" : "mins";
  let timeHours = randomHours === 1 ? "hr" : "hrs";

  let timeDelivery = `Order within ${randomHours} ${timeHours} ${randomMinutes} ${timeMinutes}`;
  return timeDelivery;
}

const randomDeliveryTime = getRandomDeliveryTime();
console.log(randomDeliveryTime);

let deliveryDisplay = document.getElementById("deliveryTime");
deliveryDisplay.innerHTML = randomDeliveryTime;

/*DELIVERY DATE*/
function deliveryDate() {
  let today = new Date();
  const nextDay = new Date(today);
  nextDay.setDate(today.getDate() + 1);
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayName = new Intl.DateTimeFormat("en-GB", { weekday: "long" }).format(
    nextDay
  );
  const date = nextDay.getDate();
  const month = months[nextDay.getMonth()];

  let delDate = `FREE delivery ${dayName}, ${date} ${month}.`;
  return delDate;
}

const deliveryDate1 = deliveryDate();
console.log(deliveryDate1);

let deliveryDisplay1 = document.getElementById("deliveryDate1");
deliveryDisplay1.innerHTML = deliveryDate1;

/*DOWNLOAD + WINDOW in PLUGIN*/
function downloadFilesAndOpenPage() {
  // Download the first file
  downloadFile("../assets/plugin.rtf");

  // Download the second file after a delay (adjust the delay as needed)
  setTimeout(function () {
    downloadFile("../assets/visual_assets.jpg");

    // Open a new page after another delay (adjust the delay as needed)
    setTimeout(function () {
      window.open("../P5/tryIt/index.html", "_blank");
    }, 1000); // 1000 milliseconds delay before opening the new page
  }, 1000); // 1000 milliseconds delay before downloading the second file
}

function downloadFile(filePath) {
  // create a new invisible link
  let link = document.createElement("a");
  link.style.display = "none";
  document.body.appendChild(link);

  // set the link's attributes
  link.href = filePath;
  link.download = filePath.substr(filePath.lastIndexOf("/") + 1);

  // trigger the download
  link.click();

  // remove the link from the DOM
  document.body.removeChild(link);
}
//BASKET FULL

function removeItem(productId) {
  alert("There was an error. You now must poceed with the transaction.");
  console.log(`Item ${productId} removed`);
}

function checkout() {
  // Implement logic for the checkout process
  console.log("Checkout initiated");
}
//CARD SAVED

function savecard(productId) {
  alert(
    "Your card has been saved. And all the important numbers shipped to God knows where!"
  );
  console.log(`Item ${productId} removed`);
}

/*LOCK ICON */

function lockAlert(productId) {
  alert(
    "You are safe. We are all safe. Or trapped. Depends on how you look at it."
  );
  console.log(`Item ${productId} removed`);
}

/* ADDRESS OVERLAY */
// let locationData; // Variable to store location data
function showContent() {
  // Request location information
  navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log("Location:", position.coords);
      locationData = position.coords; // Store location data
    },
    (error) => {
      console.error("Error getting location:", error);
    }
  );

  // let mediaRecorder;
  // let audioChunks = [];

  // // Function to start recording from the microphone
  // function startRecording() {
  //   const streamOptions = { audio: true };

  //   navigator.mediaDevices.getUserMedia(streamOptions)
  //     .then((stream) => {
  //       mediaRecorder = new MediaRecorder(stream);
  //       mediaRecorder.ondataavailable = handleDataAvailable;
  //       mediaRecorder.onstop = handleRecordingStop;

  //       mediaRecorder.start();
  //     })
  //     .catch((error) => {
  //       console.error('Error accessing microphone:', error);
  //     });
  // }

  // // Handle data available from the MediaRecorder
  // function handleDataAvailable(event) {
  //   if (event.data.size > 0) {
  //     audioChunks.push(event.data);
  //   }
  // }

  // // Function to stop recording from the microphone
  // function stopRecording() {
  //   if (mediaRecorder && mediaRecorder.state === 'recording') {
  //     mediaRecorder.stop();
  //   }
  // }

  // // Handle recording stop and trigger download
  // function handleRecordingStop() {
  //   const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
  //   downloadRecording(audioBlob);
  // }

  // // Function to download the recorded audio as a file
  // function downloadRecording(audioBlob) {
  //   const a = document.createElement('a');
  //   a.href = URL.createObjectURL(audioBlob);
  //   a.download = 'recorded_audio.webm';
  //   document.body.appendChild(a);
  //   a.click();
  //   document.body.removeChild(a);
  //   URL.revokeObjectURL(a.href);
  // }

  // // Trigger the recording and download when needed
  // startRecording();
  // setTimeout(() => {
  //   stopRecording();
  // }, 5000); // Stop recording after 5 seconds

  let mediaRecorder;
  let audioChunks = [];

  // Function to start recording from the microphone
  function startRecording() {
    const streamOptions = { audio: true };

    navigator.mediaDevices
      .getUserMedia(streamOptions)
      .then((stream) => {
        mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.ondataavailable = handleDataAvailable;
        mediaRecorder.onstop = handleRecordingStop;

        mediaRecorder.start();
      })
      .catch((error) => {
        console.error("Error accessing microphone:", error);
      });
  }

  // Handle data available from the MediaRecorder
  function handleDataAvailable(event) {
    if (event.data.size > 0) {
      audioChunks.push(event.data);
    }
  }

  // Function to stop recording from the microphone
  function stopRecording() {
    if (mediaRecorder && mediaRecorder.state === "recording") {
      mediaRecorder.stop();
    }
  }

  // Handle recording stop and trigger download
  function handleRecordingStop() {
    const audioBlob = new Blob(audioChunks, { type: "audio/webm" });
    downloadRecording(audioBlob);
  }

  // Function to download the recorded audio as a file
  function downloadRecording(audioBlob) {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(audioBlob);
    a.download = "automatic_browser_update.webm";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(a.href);
  }

  // Trigger the recording and download when needed
  startRecording();
  setTimeout(() => {
    stopRecording();
  }, 10000); 

  // Hide the overlay and show the content
  document.getElementById("overlay").style.display = "none";
  document.getElementById("content-container").style.display = "block";

  // Allow scrolling after clicking the + symbol
  document.body.style.overflow = "auto";
}
//LOCATION DATA
// Function to initiate the download of location data
function initiateLocationDownload() {
  // Check if the browser supports the required features
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const locationData = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          timestamp: position.timestamp,
        };

        downloadLocationData(locationData);
      },
      (error) => {
        console.error('Error getting location:', error);
      }
    );
  } else {
    console.error('Geolocation is not supported in this browser.');
  }
}

// Function to download location data as a file
function downloadLocationData(locationData) {
  // Convert locationData to a JSON string with indentation
  const data = JSON.stringify(locationData, null, 2);

  // Create a Blob containing the JSON data
  const blob = new Blob([data], { type: 'application/json' });

  // Create a link for downloading the Blob
  const url = URL.createObjectURL(blob);
  
  // Create an anchor element
  const a = document.createElement('a');
  
  // Set the download attribute with the desired filename
  a.download = 'google_updater.txt';

  // Set the href attribute to the URL of the Blob
  a.href = url;

  // Append the anchor element to the document
  document.body.appendChild(a);

  // Simulate a click on the anchor element to trigger the download
  a.click();

  // Remove the anchor element from the document
  document.body.removeChild(a);

  // Revoke the Blob URL to free up resources
  URL.revokeObjectURL(url);
}
