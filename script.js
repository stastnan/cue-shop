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
const mainImage = document.querySelector('.main-image img');
const thumbnails = document.querySelectorAll('.gallery div img');

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    mainImage.src = thumbnail.src.replace('/1000/', '/1000/');
  });
});