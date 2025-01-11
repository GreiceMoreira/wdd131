const lastModification = document.getElementById("lastModification");
const d = new Date();

function thisYear() {
    document.getElementById("year").innerHTML = d.getFullYear() + " | 👩🏼‍💻 Greice Moreira | Rio Grande do Sul, Brazil"
}

//lastModification.addEventListener("load", setLastModification)

function myFunction() {
    lastModification.innerHTML = "Last modification: " + document.lastModified
}

function onLoad() {
    thisYear()
    myFunction()
}