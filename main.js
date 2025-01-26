class Terminal {
    constructor() {
        this.input = document.querySelector('.terminal-input');
        this.output = document.querySelector('.terminal-output');
        this.content = document.querySelector('.terminal-content');
        this.setupEventListeners();
        this.displayWelcomeMessage();
    }

    setupEventListeners() {
        this.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.handleCommand(this.input.value);
                this.input.value = '';
            }
        });
    }

    displayWelcomeMessage() {
        const welcome = `
Welcome to lib_cmd
Type 'help' to see available commands\n`;
        this.appendOutput(welcome);
    }

    appendOutput(text) {
        this.output.innerHTML += `${text}\n`;
        this.output.scrollTo({
            top: this.output.scrollHeight,
            behavior: 'smooth'
        });
    }

    handleCommand(cmd) {
        this.appendOutput(`libroski@portfolio:~$ ${cmd}`);
        
        const commands = {
            'help': () => `Available commands:
- whoami: About me
- tech: My tech stack
- projects: View my projects
- focus: Current focus areas
- contact: Connect with me
- stats: GitHub stats
- clear: Clear terminal
- theme: Toggle light/dark theme`,
            'whoami': () => `👋 Hi, I'm LIBROSKI
Frontend Developer | Unity Enthusiast | FiveM Developer

🚀 Frontend developer passionate about creating engaging user experiences
🎮 Unity game development enthusiast
🔧 FiveM development & modding`,
            'tech': () => `🛠 Tech Stack:
• Frontend: HTML5, CSS3, JavaScript
• Game Dev: Unity, C#
• Other: FiveM, Lua
• Tools: Git, VS Code, Figma, Blender`,
            'focus': () => `🔭 Current Focus:
• Building responsive web applications
• Creating Unity game prototypes
• Learning new technologies
• Learning docker and kubernetes
• Developing FiveM server modifications`,
            'projects': () => `🌱 Current Projects:
• 🚗 Developing FiveM server
• 💻 Creating Windows terminal application
• 🔧 Working on custom event system for UnityEngine
• 🪜 Creating extension for VSC for categorizing extensions`,
            'contact': () => `📫 Connect With Me:
• GitHub: github.com/LIBROSKI
• Discord: discord.com/users/494493824408616960`,
            'stats': () => `📊 GitHub Stats:
View my complete GitHub statistics at:
github.com/LIBROSKI`,
            'clear': () => {
                this.output.innerHTML = '';
                return 'Ups, I forgot what I said!';
            },
            'theme': () => {
                const body = document.body;
                body.setAttribute('data-theme', 
                    body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
                );
                return '🎨 Theme toggled!';
            }
        };

        const result = commands[cmd.toLowerCase()]?.() || `Command not found: ${cmd}`;
        this.appendOutput(result);
    }
}

new Terminal();