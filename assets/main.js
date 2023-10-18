const dataContainer = document.getElementById("container");

const fullPopUpContainer = document.getElementById("overlay-container");
const fullPopUpText = document.getElementById("overlay-value");

function PopUp(value) {
        fullPopUpContainer.style.display = "flex";
        fullPopUpText.innerText = value;
}

// localStorage.setItem("", "")

window.onload = (event) => {
    SetPageAbout();
    console.log(window.navigator.language);
    if (window.navigator.language != "en-EN") {
        PopUp("You are using non-standard language. This website was originally written in English.");
        dataContainer.innerHTML = 
        `

        `;
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