const lastModification = document.getElementById("lastModification");
const d = new Date();
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});


function setSubTitle() {
    let subTitle = document.querySelector(".active-page");
    console.log(subTitle.outerText)

    document.querySelector("#subTitle").innerHTML = subTitle.outerText

}

function activePage() {
    const links = document.querySelectorAll("nav li a");
    
    links.forEach(link => {
        if (link.href === location.href) {
            link.classList.toggle("active-page");
        }
    });
}

function thisYear() {
    document.getElementById("currentyear").innerHTML =  "&copy;" + d.getFullYear() + " | 👩🏼‍💻 Greice Moreira | Rio Grande do Sul, Brazil"
}

function myFunction() {
    lastModification.innerHTML = "Last modification: " + document.lastModified
}

function onLoad() {
    thisYear()
    myFunction()
    activePage()
    setSubTitle()
}