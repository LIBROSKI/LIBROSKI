const dataContainer = document.getElementById("container");

const fullPopUpContainer = document.getElementById("overlay-container");
const fullPopUpText = document.getElementById("overlay-value");

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

window.onload = (event) => {
    SetPageAbout();
    console.log(window.navigator.language);
    if (window.navigator.language != "en-EN") {
        PopUp("full", "You are using non-standard language. This website was originally written in English.");
    }
};

function PupUp(type, value) {
    console.log(type, value);
}

// localStorage.setItem("", "")