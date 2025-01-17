let items = [];

const searchedItems = () => {
  const inputElement = document.getElementById("inputs");
  const query = inputElement.value;
  inputElement.value = "";

  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
    .then((res) => res.json())
    .then((data) => {
      items = data?.meals;
      showCards();
      console.log(data?.meals);
    })
    .catch((e) => console.log(e));
};

const showCards = () => {
  const cardContainer = document.getElementById("meal-cards-container");
  cardContainer.innerHTML = "";
  items.map((item) => {
    cardContainer.innerHTML += `
      <a href="#ingridients">
        <div onclick="showDetails(${item?.idMeal})" class="card" style="width: 18rem;">
            <img src="${item?.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${item?.strMeal}</h5>
            </div>
        </div>
      </a>
        `;
  });
};

const showDetails = (id) => {
  console.log(id);
  const item = items.find((item) => id + "" === item?.idMeal + "");
  const ingridientsContainer = document.getElementById("ingridients");
  ingridientsContainer.innerHTML = "";
  ingridientsContainer.innerHTML += `
        <div class="card mx-auto" style="width: 18rem;">
            <img src="${item?.strMealThumb}" class="card-img-top" alt="...">
            <ol class="card-body" id="list-container">

        `;
  const listContainer = document.getElementById("list-container");
  let i = 1;
  while (item[`strIngredient${i}`]) {
    listContainer.innerHTML += `
        <li class="card-title d-flex flex-column gap-2">${
          i + " . " + item["strIngredient" + i]
        }</li>
    `;
    i++;
  }
  ingridientsContainer.innerHTML += `
        </ol>
    </div>
  `;
};
