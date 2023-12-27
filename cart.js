document.addEventListener("DOMContentLoaded", function () {
  const cartNumberDiv = document.getElementById("cart-number");
  let counter = localStorage.getItem("cartCounter") || 0;

  cartNumberDiv.innerHTML = counter;

  const basketButton = document.getElementById("basket-button");
  if (basketButton) {
    basketButton.addEventListener("click", function () {
      counter = parseInt(counter) + 1;
      cartNumberDiv.innerHTML = counter;

      localStorage.setItem("cartCounter", counter);
    });
  }
});
