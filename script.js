let cardContainer = document.querySelector(".card-container");
getData();
function getData() {
  fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((newData) => {
      for (let data of newData.results) {
        cardContainer.insertAdjacentHTML(
          "beforeend",
          `<div class="card" style="width: 18rem">
              <img src="${data.image}" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title text-center">${data.name}</h5>
              </div>
            </div>`
        );
      }
    });
}
