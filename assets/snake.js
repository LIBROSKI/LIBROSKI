const canvas = document.getElementById('gameCanvas');
        const context = canvas.getContext('2d');
        const scoreDisplay = document.getElementById('score');
        
        const grid = 20;
        const spacing = 5;
        const boxSize = grid + spacing;
        const maxBoxesX = Math.floor(canvas.width / boxSize);
        const maxBoxesY = Math.floor(canvas.height / boxSize);
        
        let score = 0;

        let snake = [
            { x: 10 * boxSize, y: 10 * boxSize },
            { x: 9 * boxSize, y: 10 * boxSize },
            { x: 8 * boxSize, y: 10 * boxSize }
        ];
        let food = generateFoodLocation();
        let dx = boxSize;
        let dy = 0;
        
        function generateFoodLocation() {
            const x = Math.floor(Math.random() * maxBoxesX) * boxSize;
            const y = Math.floor(Math.random() * maxBoxesY) * boxSize;
            return { x, y };
        }
        
        function drawSnake() {
            snake.forEach((segment, index) => {
                if (index === 0) {
                    context.fillStyle = '#fd538f';
                    context.fillRect(segment.x, segment.y, boxSize - spacing, boxSize - spacing);
                } else {
                    context.fillStyle = '#a46078';
                    context.fillRect(segment.x, segment.y, boxSize - spacing - 3, boxSize - spacing - 3);
                }
            });
        }
        
        function drawFood() {
            context.fillStyle = '#ac023d';
            context.fillRect(food.x, food.y, grid, grid);
        }
        
        function moveSnake() {
            const head = { x: snake[0].x + dx, y: snake[0].y + dy };
            snake.unshift(head);
            if (head.x === food.x && head.y === food.y) {
                score += 1;
                scoreDisplay.textContent = 'Score: ' + score;
                food = generateFoodLocation();
            } else {
                snake.pop();
            }
        }
        
        function clearCanvas() {
            context.fillStyle = '#0b090a';
            context.fillRect(0, 0, canvas.width, canvas.height);
        }        
        
        function draw() {
            clearCanvas();
            drawSnake();
            drawFood();
        }
        
        function main() {
            moveSnake();
            draw();
            if (snake[0].x < 0 || snake[0].x >= canvas.width || snake[0].y < 0 || snake[0].y >= canvas.height) {
                document.location.reload();
                clearInterval(interval);
            }
            for (let i = 1; i < snake.length; i++) {
                if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
                    document.location.reload();
                    clearInterval(interval);
                }
            }
        }
        
        document.addEventListener('keydown', event => {
            if (event.key === 'ArrowUp' && dy === 0) {
                dx = 0;
                dy = -boxSize;
            } else if (event.key === 'ArrowDown' && dy === 0) {
                dx = 0;
                dy = boxSize;
            } else if (event.key === 'ArrowLeft' && dx === 0) {
                dx = -boxSize;
                dy = 0;
            } else if (event.key === 'ArrowRight' && dx === 0) {
                dx = boxSize;
                dy = 0;
            }
        });
        
        const interval = setInterval(main, 100);