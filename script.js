// FORMATTING FOR THE PAYMENT FORM INPUTS
function formatCreditCardNumber(input) {
  let value = input.value.replace(/\D/g, "");

  value = value.replace(/(\d{4})/g, "$1 ").slice(0, 19);

  input.value = value;
}

function formatExpirationDate(input) {
  let value = input.value.replace(/\D/g, "");
  value = value.replace(/(\d{2})/g, "$1/").slice(0, 5);
  input.value = value;
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

  let timeMinutes = (randomMinutes === 1) ? 'min' : 'mins';
  let timeHours = (randomHours === 1) ? 'hr' : 'hrs';

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
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const dayName = new Intl.DateTimeFormat("en-GB", { weekday: "long" }).format(nextDay);
  const date = nextDay.getDate();
  const month = months[nextDay.getMonth()];

  let delDate = `FREE delivery ${dayName}, ${date} ${month}.`;
  return delDate;
}

const deliveryDate1 = deliveryDate();
console.log(deliveryDate1);

let deliveryDisplay1 = document.getElementById("deliveryDate1");
deliveryDisplay1.innerHTML = deliveryDate1;
