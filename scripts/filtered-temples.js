const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});


function thisYear() {
    const d = new Date();
    document.getElementById("currentyear").innerHTML =  "&copy;" + d.getFullYear() + " | 👩🏼‍💻 Greice Moreira | Rio Grande do Sul, Brazil"
}

function lastModified() {
    const lastModification = document.getElementById("lastModification");
    lastModification.innerHTML = "Last modification: " + document.lastModified
}

const templesCards = (temples) => {
    const cards = document.querySelector("#templesCards");
    cards.innerHTML = "";

    const myCard = temples.map( temple =>
        `<figure>
            <figcaption> ${temple.templeName} </figcaption>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area}</p>
            <img src= "${temple.imageUrl}" alt= "${temple.templeName}" loading="lazy" width= 300>
        </figure>`
    ).join("");
    cards.innerHTML = myCard;
}

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Montreal Quebec Temple",
        location: "Quebec, Canada",
        dedicated: "2000, June, 4",
        area: 11550,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/montreal-quebec-temple/montreal-quebec-temple-10671-main.jpg"
      },
      {
        templeName: "Porto Alegre Brazil Temple",
        location: "Porto Alegre, Rio Grande do Sul, Brazil",
        dedicated: "2000, December, 17",
        area: 13325,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/porto-alegre-brazil-temple/porto-alegre-brazil-temple-14267.jpg"
      },
      {
        templeName: "Curitiba Brazil Temple",
        location: "Curitiba, Brazil",
        dedicated: "2008, June, 1",
        area: 27850,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/curitiba-brazil-temple/curitiba-brazil-temple-4882-thumb.jpg"
      },
  ];

  function onLoad() {
    templesCards(temples)
    thisYear()
    lastModified()
}

// Old - temples built before 1900
// New - temples built after 2000
// Large - temples larger than 90,000 square feet
// Small - temples smaller than 10,000 square feet
// Home - displays all the temples stored in the array.


const largeButton = document.querySelector("#large");
largeButton.addEventListener('click', () => {
    const largeTemples = temples.filter(temple => temple.area > 90000);
    templesCards(largeTemples);
});

const smallButton = document.querySelector("#small");
 smallButton.addEventListener("click", () => {
    const smallTemples = temples.filter(temple => temple.area < 10000);
    templesCards(smallTemples);
});

const oldButton = document.querySelector("#old");
oldButton.addEventListener("click", () => {
    const oldTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0]); 
        return year < 1900;
    });
    templesCards(oldTemples);
});

const newButton = document.querySelector("#new");
 newButton.addEventListener("click", () => {
    const newTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(","[0]));
        return year >  2000;
    });
    templesCards(newTemples);
});

const homeButton = document.querySelector("#home");
 homeButton.addEventListener("click", () => {
    templesCards(temples);
});