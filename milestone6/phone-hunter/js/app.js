const loadPhones = async(searchText, dataLimit) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data, dataLimit);
}

const displayPhones = (phones, dataLimit = phones.length) =>{
    const phonesContainer = document.getElementById('phone-container');
    phonesContainer.innerText = '';
    // display 10 phones only
    const showAll = document.getElementById('show-all');
    if (phones.length > dataLimit) {
        phones  = phones.slice(0, dataLimit); 
        showAll.classList.remove('d-none');        
    }
    else
        showAll.classList.add('d-none');

    // display no phones found
    const noPhone = document.getElementById('no-phone-message');
    if(!phones.length)
        noPhone.classList.remove('d-none');
    else
        noPhone.classList.add('d-none');

    // display all phones
    phones.forEach(phone => {
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
        <div class="card">
            <img src="${phone.image}" class="card-img-top img-fluid p-4" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit longer.</p>
                <button onclick="loadPhoneDetails('${phone.slug}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetailsModal">Show details</button>
            </div>
        </div>
        `;
        phonesContainer.appendChild(phoneDiv);
    })
    // stop loader
    toggleSpinner(false);
}

const processSearch = (dataLimit) => {
    toggleSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadPhones(searchText, dataLimit);
}

document.getElementById('btn-search').addEventListener('click', function(){
    // start loader
    processSearch(10);

})

document.getElementById('search-field').addEventListener('keyup', function(event){
    if(event.key === 'Enter'){
        processSearch(10);
    }
})

const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader');
    if(isLoading)
        loaderSection.classList.remove('d-none');
    else
        loaderSection.classList.add('d-none');

}

// not the best way to load show all
document.getElementById('btn-show-all').addEventListener('click', function(){
    processSearch()
})

const loadPhoneDetails = async id => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`; 
    const  res = await fetch(url);
    const data = await res.json();
    displayPhoneDetails(data.data);
}

const displayPhoneDetails = phone => {
    console.log(phone);
    const modalTitle = document.getElementById('phoneDetailsModalLabel');
    modalTitle.innerText = phone.name;
    const phoneDetails = document.getElementById('phone-details');
    phoneDetails.innerHTML = `
        <p>Release Date: ${phone.releaseDate ? phone.releaseDate : 'No Release Date Found'}}</p>
        <p>Storage: ${phone.mainFeatures.storage ? phone.mainFeatures.storage : 'No Storage Information'}}</p>
        <p>Others: ${phone?.others?.Bluetooth ? phone?.others?.Bluetooth : 'No Bluetooth'}</p>

    `
}