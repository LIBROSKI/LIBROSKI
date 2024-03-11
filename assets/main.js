const dataContainer = document.getElementById("container");

window.onload = (event) => {
	SetPageAbout();
};

function SetPageAbout() {
	dataContainer.innerHTML =
		`
    <h1>LIBROSKI</h1>
        <p>Front-end developer and digital electronics enthusiast.</p>
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
    <p>Polish roleplay server on the FiveM platform. The gameplay on this server is based on collecting items and building a community in a post-apocalyptic world.</p>
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

// cube
const width = 40,
	height = 40;
const zBuffer = new Array(width * height).fill(0);
const buffer = new Array(width * height).fill(' ');
const backgroundASCIICode = ' ';
const distanceFromCam = 100;
const incrementSpeed = 0.6;
let A = 0,
	B = 0,
	C = 0;
const K1 = 25;

function usleep(usec) {
	return new Promise(resolve => setTimeout(resolve, usec / 1000));
}

function calculateX(i, j, k) {
	return j * Math.sin(A) * Math.sin(B) * Math.cos(C) - k * Math.cos(A) * Math.sin(B) * Math.cos(C) +
		j * Math.cos(A) * Math.sin(C) + k * Math.sin(A) * Math.sin(C) + i * Math.cos(B) * Math.cos(C);
}

function calculateY(i, j, k) {
	return j * Math.cos(A) * Math.cos(C) + k * Math.sin(A) * Math.cos(C) -
		j * Math.sin(A) * Math.sin(B) * Math.sin(C) + k * Math.cos(A) * Math.sin(B) * Math.sin(C) -
		i * Math.cos(B) * Math.sin(C);
}

function calculateZ(i, j, k) {
	return k * Math.cos(A) * Math.cos(B) - j * Math.sin(A) * Math.cos(B) + i * Math.sin(B);
}

function calculateForSurface(cubeX, cubeY, cubeZ, ch) {
	const x = calculateX(cubeX, cubeY, cubeZ);
	const y = calculateY(cubeX, cubeY, cubeZ);
	const z = calculateZ(cubeX, cubeY, cubeZ) + distanceFromCam;

	const ooz = 1 / z;

	const xp = Math.floor(width / 2 + K1 * ooz * x * 2);
	const yp = Math.floor(height / 2 + K1 * ooz * y);

	const idx = xp + yp * width;
	if (idx >= 0 && idx < width * height) {
		if (ooz > zBuffer[idx]) {
			zBuffer[idx] = ooz;
			buffer[idx] = ch;
		}
	}
}

async function main() {
	while (true) {
		let output = '';
		buffer.fill(backgroundASCIICode);
		zBuffer.fill(0);

		let cubeWidth, horizontalOffset;

		cubeWidth = 20;
		horizontalOffset = -2 * cubeWidth;
		// first cube
		for (let cubeX = -cubeWidth; cubeX < cubeWidth; cubeX += incrementSpeed) {
			for (let cubeY = -cubeWidth; cubeY < cubeWidth; cubeY += incrementSpeed) {
				calculateForSurface(cubeX, cubeY, -cubeWidth, '@');
				calculateForSurface(cubeWidth, cubeY, cubeX, '$');
				calculateForSurface(-cubeWidth, cubeY, -cubeX, '~');
				calculateForSurface(-cubeX, cubeY, cubeWidth, '#');
				calculateForSurface(cubeX, -cubeWidth, -cubeY, ';');
				calculateForSurface(cubeX, cubeWidth, cubeY, '+');
			}
		}

		cubeWidth = 10;
		horizontalOffset = 1 * cubeWidth;
		// second cube
		for (let cubeX = -cubeWidth; cubeX < cubeWidth; cubeX += incrementSpeed) {
			for (let cubeY = -cubeWidth; cubeY < cubeWidth; cubeY += incrementSpeed) {
				calculateForSurface(cubeX, cubeY, -cubeWidth, '@');
				calculateForSurface(cubeWidth, cubeY, cubeX, '$');
				calculateForSurface(-cubeWidth, cubeY, -cubeX, '~');
				calculateForSurface(-cubeX, cubeY, cubeWidth, '#');
				calculateForSurface(cubeX, -cubeWidth, -cubeY, ';');
				calculateForSurface(cubeX, cubeWidth, cubeY, '+');
			}
		}

		cubeWidth = 5;
		horizontalOffset = 8 * cubeWidth;
		// third cube
		for (let cubeX = -cubeWidth; cubeX < cubeWidth; cubeX += incrementSpeed) {
			for (let cubeY = -cubeWidth; cubeY < cubeWidth; cubeY += incrementSpeed) {
				calculateForSurface(cubeX, cubeY, -cubeWidth, '@');
				calculateForSurface(cubeWidth, cubeY, cubeX, '$');
				calculateForSurface(-cubeWidth, cubeY, -cubeX, '~');
				calculateForSurface(-cubeX, cubeY, cubeWidth, '#');
				calculateForSurface(cubeX, -cubeWidth, -cubeY, ';');
				calculateForSurface(cubeX, cubeWidth, cubeY, '+');
			}
		}

		for (let k = 0; k < width * height; k++) {
			output += buffer[k];
			if (k % width === width - 1) {
				output += '\n';
			}
		}

		document.getElementById('output').innerText = output + 'This is not Three.js';

		A += 0.05;
		B += 0.05;
		C += 0.01;
		await usleep(20000 * 2);
	}
}

main();

// theme

const bodyElement = document.querySelector('body');
const themeSwitch = document.getElementById('theme-sw')

function ChangeTheme() {
    if (bodyElement.getAttribute('data-theme') === 'dark') {
        bodyElement.setAttribute('data-theme', 'light');
        themeSwitch.innerHTML = "<i class='fa-solid fa-sun'></i>";
    }
    else {
        bodyElement.setAttribute('data-theme', 'dark');
        themeSwitch.innerHTML = "<i class='fa-solid fa-moon'></i>";
    }
}