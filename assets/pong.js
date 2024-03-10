const canvas = document.getElementById('pongCanvas');
const ctx = canvas.getContext('2d');

const paddleHeight = 100;
const paddleWidth = 20;
let paddleY = canvas.height / 2 - paddleHeight / 2;

const ballSize = 20;
let ballX = canvas.width / 2;
let ballY = canvas.height / 2;
let ballSpeedX = 5;
let ballSpeedY = 5;

let computerPaddleY = canvas.height / 2 - paddleHeight / 2;

let playerScore = 0;
let computerScore = 0;

// Add event listeners for arrow keys
let upPressed = false;
let downPressed = false;

document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);

function keyDownHandler(e) {
    if (e.key === 'ArrowUp') {
        upPressed = true;
    } else if (e.key === 'ArrowDown') {
        downPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.key === 'ArrowUp') {
        upPressed = false;
    } else if (e.key === 'ArrowDown') {
        downPressed = false;
    }
}

function draw() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw paddles
    ctx.fillStyle = '#fd538f';
    ctx.fillRect(0, paddleY, paddleWidth, paddleHeight);
    ctx.fillRect(canvas.width - paddleWidth, computerPaddleY, paddleWidth, paddleHeight);

    // Draw ball
    ctx.beginPath();
    ctx.arc(ballX, ballY, ballSize / 2, 0, Math.PI * 2);
    ctx.fillStyle = '#fd538f';
    ctx.fill();

    // Update ball position
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    // Ball collision with top and bottom walls
    if (ballY - ballSize / 2 <= 0 || ballY + ballSize / 2 >= canvas.height) {
        ballSpeedY = -ballSpeedY;
    }

    // Ball collision with paddles
    if (ballX - ballSize / 2 <= paddleWidth) {
        if (ballY >= paddleY && ballY <= paddleY + paddleHeight) {
            ballSpeedX = -ballSpeedX;
        } else {
            computerScore++;
            resetBall();
        }
    }

    if (ballX + ballSize / 2 >= canvas.width - paddleWidth) {
        if (ballY >= computerPaddleY && ballY <= computerPaddleY + paddleHeight) {
            ballSpeedX = -ballSpeedX;
        } else {
            playerScore++;
            resetBall();
        }
    }

    // Computer AI
    const computerPaddleCenter = computerPaddleY + paddleHeight / 2;
    if (computerPaddleCenter < ballY - 15) {
        computerPaddleY += 5;
    } else if (computerPaddleCenter > ballY + 15) {
        computerPaddleY -= 5;
    }

    // Player controls
    if (upPressed && paddleY > 0) {
        paddleY -= 7;
    } else if (downPressed && paddleY < canvas.height - paddleHeight) {
        paddleY += 7;
    }

    // Display scores
    ctx.font = '30px Arial';
    ctx.fillStyle = '#fd538f';
    ctx.fillText('Player: ' + playerScore, 50, 50);
    ctx.fillText('Computer: ' + computerScore, canvas.width - 200, 50);

    // Game over
    if (ballX - ballSize / 2 <= 0 || ballX + ballSize / 2 >= canvas.width) {
        resetBall();
    }

    requestAnimationFrame(draw);
}

function resetBall() {
    ballX = canvas.width / 2;
    ballY = canvas.height / 2;
    ballSpeedX = -ballSpeedX;
}

draw();