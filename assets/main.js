const dataContainer = document.getElementById("container");

const fullPopUpContainer = document.getElementById("overlay-container");
const fullPopUpText = document.getElementById("overlay-value");
const fullPopUpIcon = document.getElementById("overlay-icon");

function PopUp(value, iconName) {
        fullPopUpContainer.style.display = "flex";
        fullPopUpText.innerText = value;
        fullPopUpIcon.src = `assets/icons/${iconName}.svg`;
}

// localStorage.setItem("", "")

window.onload = (event) => {
    SetPageAbout();
    console.log(window.navigator.language);
    if (window.navigator.language != "en-EN") {
        PopUp("You are using non-standard language. This website was originally written in English." , "light");
        dataContainer.innerHTML = 
        `

        `;
        localStorage.setItem("popup-lang-clicked", "true")
    }
};

function SetPageAbout() {
    dataContainer.innerHTML = 
    `
    <h1>About</h1>
    <p>Lorem ipsum ipsum lorem florem lorem ipsum lorem</p>
    `;
}

function SetPageExperience() {
    dataContainer.innerHTML = 
    `
    <h1>Experience</h1>
    <p>Lorem ipsum ipsum lorem florem lorem ipsum lorem</p>
    `;
}

function SetPageSkills() {
    dataContainer.innerHTML = 
    `
    <h1>Skills</h1>
    <p>Lorem ipsum ipsum lorem florem lorem ipsum lorem</p>
    `;
}

function SetPageAwards() {
    dataContainer.innerHTML = 
    `
    <h1>Awards</h1>
    <p>Lorem ipsum ipsum lorem florem lorem ipsum lorem</p>
    `;
}