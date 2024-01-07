const list = document.getElementById("list");
function fetchData() {
  fetch(
    `https://api.edamam.com/api/food-database/v2/parser?app_id=${EDAMAM_API_ID}&app_key=${EDAMAM_API_KEY}&nutrition-type=cooking&category=generic-foods`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data.hints);
      if (data.hints) {
        data.hints.forEach((item) => {
          const liElement = document.createElement("li");
          list.appendChild(liElement);

          let title = document.createElement("p");
          liElement.appendChild(title);
          title.innerHTML = item.food.knownAs;

          let image = document.createElement("img");
          liElement.appendChild(image);
          image.setAttribute("src", item.food.image);

          console.log(item.food.knownAs);
        });
      }

      return data.hints;
    })
    .catch((error) => {
      throw error;
    });
}

fetchData();
