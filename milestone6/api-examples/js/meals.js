const loadMeals = (search) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then(res => res.json())
        .then(data => displayMeals(data.meals));
}

const displayMeals = meals => {
    const mealsContainer = document.getElementById('meals-container');
    mealsContainer.innerHTML = ``;
    meals.forEach(meal => {
        console.log(meal)
        const mealDiv = document.createElement('div');
        mealDiv.innerHTML = `
        <div class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.</p>
                    <!-- Button trigger modal -->
                <button onclick="loadMealDetail2(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#meal-details">
                Details
                </button>
            </div>
        </div>
        `;
        mealsContainer.appendChild(mealDiv);
    })
}

document.getElementById('btn-search').addEventListener('click', event => {
    const inputField = document.getElementById('input-search');
    const searched = inputField.value;
    loadMeals(searched);
})

const loadMealDetail = idMeal => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetails(data.meals[0]))
    .catch(error => {
        console.log(error);
    })
}

const loadMealDetail2 = async(idMeal) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayMealDetails(data.meals[0]);
    }
    catch(error){
        console.log(error);
    }
}

const displayMealDetails = meal => {
    document.getElementById('meal-detailsLabel').innerText = meal.strMeal;
    const mealDetails = document.querySelector('.meal-details-body');
    mealDetails.innerHTML = `
        <img class="img-fluid" src="${meal.strMealThumb}" alt="">
    `
}

loadMeals('fish');