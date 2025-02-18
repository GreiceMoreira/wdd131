


// Hamburguer menu 

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('open');
});


// "name": "Fary",
// "creatDate": "23 December 1805",
// "yearn": "Anne",
// "hook": "3",
// "level": 3,
// "imageurl": "images/mandala.PNG"

const url = "data/receips.json";
const cards = document.querySelector('#cards');

async function getReceipsData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.crochets);
    displayCrochets(data.crochets);
}

const displayCrochets = (crochets) => {
    crochets.forEach(crochet => {
        let card = document.createElement('section');
        card.classList.toggle('own');
        let name = document.createElement('h2');
        let creatDate = document.createElement('h3');
        let yearn = document.createElement('h4');
        let hook = document.createElement('h4');
        let level = document.createElement('h4');
        let image = document.createElement('img');


        name.textContent = `${crochet.name} crochet`;

        creatDate.textContent = `${crochet.creatDate}`;
        yearn.textContent = `Yean: ${crochet.yearn}`;
        hook.textContent = `Hook: ${crochet.hook}`;
        level.textContent = `Level: ${crochet.level}`;


        image.setAttribute('src', crochet.imageurl);
        image.setAttribute('alt', 'image of ${crochet.name} square');
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '300');
        image.setAttribute('heigth', '440');

        card.appendChild(name)
        card.appendChild(creatDate)
        card.appendChild(yearn)
        card.appendChild(hook)
        card.appendChild(level)
        card.appendChild(image)

        cards.appendChild(card)
    });
}

getReceipsData();