const lastModification = document.getElementById("lastModification");
const d = new Date();

function thisYear() {
    document.getElementById("year").innerHTML = d.getFullYear() + " | 👩🏼‍💻 Greice Moreira | Rio Grande do Sul, Brazil"
}

function myFunction() {
    lastModification.innerHTML = "Last modification: " + document.lastModified
}

function onLoad() {
    thisYear()
    myFunction()
}

