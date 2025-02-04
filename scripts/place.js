const lastModification = document.getElementById("lastModification");
const d = new Date();

function thisYear() {
    document.getElementById("year").innerHTML = d.getFullYear() + " | 👩🏼‍💻 Greice Moreira | Rio Grande do Sul, Brazil"
}

function myFunction() {
    lastModification.innerHTML = "Last modification: " + document.lastModified
}

let tempC = 10;
let windSpeed = 5;

const calculateWindChill = (tempC, windSpeed) => {
    if (tempC < 10 || windSpeed < 4.8) {
        document.getElementById("windChill").innerHTML = "N/A";
        return "N/A";
    }else{
    let windChill = (13.12 + 0.6215 * tempC - 11.37 * Math.pow(windSpeed, 0.16) +
                    0.3965 * tempC * Math.pow(windSpeed, 0.16)).toFixed(1);
    document.getElementById("windChill").innerHTML = `<strong>Wind Chill: </strong> ${windChill}°C`;
    return windChill;}
}



function onLoad() {
    calculateWindChill(tempC,windSpeed)
    thisYear()
    myFunction()
}