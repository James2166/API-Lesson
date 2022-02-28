const cardsContainer = document.querySelector('.cards')

let data = [];
let i = 0;

function createCards() {

    // The Card
    const card = document.createElement('div');
    card.classList.add('card')
    // Logo Container
    const logo = document.createElement('div');
    logo.classList.add('logo');
    // Business Name
    const title = document.createElement('div');
    title.classList.add('business-name');
    //Business Address
    const adrs = document.createElement('div');
    adrs.classList.add('business-address');
    //Business Description
    const descript = document.createElement('div');
    descript.classList.add('business-description');

    //Logo Image
    const image = document.createElement('img');
    image.src = data.business[i].imageurl;
    image.alt = 'Business Logo';
    // Name
    const name = document.createElement('p');
    name.textContent = data.business[i].name;
    // Address
    const address = document.createElement('p');
    address.textContent = data.business[i].address;
    //Description
    const description = document.createElement('p');
    description.textContent = data.business[i].description;

    //Append
    descript.appendChild(description);
    adrs.appendChild(address);
    title.appendChild(name);
    logo.appendChild(image);
    card.append(logo, title, adrs, descript);
    cardsContainer.appendChild(card);
}

function buildAllCards() {
    for(a = 0; a < data.business.length; a++) {
        createCards();
        i++;
    }
}


async function getData() {
    const apiUrl = 'https://iskarr.github.io/austindonovan.github.io/api/business.json';
    try {
        const response = await fetch(apiUrl);
        data = await response.json();
        buildAllCards();
    } catch (error) {
        // Catch Error Here
    }
}

// On Load
getData();