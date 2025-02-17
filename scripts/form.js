// Last modification and current Year 

function thisYear() {
    const d = new Date();
    document.getElementById("currentyear").innerHTML = "&copy;" + d.getFullYear() + " | 👩🏼‍💻 Greice Moreira | Rio Grande do Sul, Brazil"
}
function lastModification() {
    const lastModified = new Date(document.lastModified);
    document.getElementById("lastModification").textContent = `Last modification: ${lastModified.toLocaleString()}`;
}

thisYear()
lastModification()

// Show Products 

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

function setProduct() { 
    const productSelect = document.getElementById("product");

    products.forEach(product => {
        let option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name.replace(/\b\w/g, char => char.toUpperCase());
        productSelect.appendChild(option);
    });
}




// Review Form 

let reviewCount = localStorage.getItem("reviewCount");

if (!reviewCount) {
    reviewCount = 0;
}

document.getElementById("reviewCounter").textContent = reviewCount;

const reviewForm = document.getElementById("reviewForm");
reviewForm.addEventListener("submit", function (event) {
    event.preventDefault();
    reviewCount++;
    localStorage.setItem("reviewCount", reviewCount);
    document.getElementById("reviewCounter").textContent = reviewCount;
    reviewForm.reset();
});







