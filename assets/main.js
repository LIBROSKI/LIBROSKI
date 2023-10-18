const dataContainer = document.getElementById("container");

const fullPopUpContainer = document.getElementById("overlay-container");
const fullPopUpText = document.getElementById("overlay-value");
const fullPopUpIcon = document.getElementById("overlay-icon");

const cookiePopUp = document.getElementById("mini-popup");

function PopUp(value, iconName) {
        fullPopUpContainer.style.display = "flex";
        fullPopUpText.innerText = value;
        fullPopUpIcon.src = `assets/icons/${iconName}.svg`;
}

// localStorage.setItem("", "")

window.onload = (event) => {
    SetPageAbout();
    console.log(window.navigator.language);
    if (window.navigator.language != "en-EN" && localStorage.getItem("lang-clicked") !== "true") {
        PopUp("You are using non-standard language. This website was originally written in English." , "light");
        dataContainer.innerHTML = 
        `

        `;
    }
    if (localStorage.getItem("cookie-clicked") !== "true") {
        cookiePopUp.style.display = "flex";
    }
    else {
        cookiePopUp.style.display = "none";
    }
};

function CloseLangPopUp() {
    localStorage.setItem("lang-clicked", "true");
    SetPageAbout()
    fullPopUpContainer.style.display = "none";
}

function CookieAccept() {
    localStorage.setItem("cookie-clicked", "true");
    cookiePopUp.style.display = "none";
}

function SetPageAbout() {
    dataContainer.innerHTML = 
    `
    <h1>LIBROSKI</h1>
        <p>Front-end programmer and amateur digital electronics engineer.</p>
        <div id="about-link-container">
            <a href="https://www.youtube.com/@LIBROSKITV" class="about-link"><i class="fa-brands fa-youtube"></i></a>
            <a href="https://github.com/LIBROSKI" class="about-link"><i class="fa-brands fa-github"></i></a>
            <a href="https://codepen.io/libroski" class="about-link"><i class="fa-brands fa-codepen"></i></a>
        </div>
    `;
}

function SetPageExperience() {
    dataContainer.innerHTML = 
    `
    <h1>Experience</h1>
    <h2>StrefaZ</h2>
    <p>Polish-language roleplay server on the FiveM platform. The gameplay on this server is based on collecting items and building a community in a post-apocalyptic world.</p>
    <br>
    <h2>LIBROSCY.dev</h2>
    <p>A global discord server where beginner FiveM and front-end developers can find numerous guides on perfect UI quality in games and websites.</p>    
    <br>
    <h2>Demos:</h2>
    <a onclick="">Store website (front-end)</a>
    <a onclick="">Admin panel (front-end)</a>
    `;
}

function SetPageSkills() {
    dataContainer.innerHTML = 
    `
    <h1>Skills</h1>
    <h2>Programming languages ​​I have mastered:</h2>
    <ul>
        <li><i class="fa-brands fa-html5"></i> html</li>
        <li><i class="fa-brands fa-css3-alt"></i> css</li>
        <li><i class="fa-brands fa-node-js"></i> js</li>
        <li><i class="fa-solid fa-moon"></i> lua</li>
    </ul>
    <br>
    <h2>Tools and apps ​​I have mastered:</h2>
    <ul>
        <li>Visual Studio Code</li>
        <li>Visual Studio</li>
        <li>Canva</li>
        <li>GitHub</li>
        <li>WinSCP</li>
        <li>HeidiSQL</li>
        <li>Arduino IDE</li>
        <li>Blender</li>
    </ul>
    `;
}