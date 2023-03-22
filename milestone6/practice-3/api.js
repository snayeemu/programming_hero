const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => displayData(data));
}

const displayData = data => {
    const cardContainer = document.getElementById('card-container');
    for (let photo of data) {
        console.log(photo)
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('col');
        cardDiv.innerHTML = `
        <div class="col">
        <div class="card">
          <img class="img-fluid" src="${photo.url ? photo.url : ''}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${photo.title}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
      </div>
    `;
        cardContainer.appendChild(cardDiv);
    }
}

loadData();