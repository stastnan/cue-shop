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

document.addEventListener("DOMContentLoaded", function () {
  const cartNumberDiv = document.getElementById("cart-number");
  let counter = localStorage.getItem("cartCounter") || 0;

  cartNumberDiv.innerHTML = counter;
});

//BASKET FULL

 function removeItem(productId) {
alert('There was an error. You now must poceed with the transaction.')
  console.log(`Item ${productId} removed`);
}

function checkout() {
  // Implement logic for the checkout process
  console.log("Checkout initiated");
}