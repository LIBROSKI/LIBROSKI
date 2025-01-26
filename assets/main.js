class ProgressBar {
    constructor(element, maxSegments = 10) {
        this.element = element;
        this.maxSegments = maxSegments;
        this.progress = 0;
    }

    generateBar(progress) {
        const filledSegments = Math.floor((progress / 100) * this.maxSegments);
        const emptySegments = this.maxSegments - filledSegments;

        let bar = '&#xEE03;'; // Left filled border
        
        // Add filled segments
        for (let i = 0; i < filledSegments - 1; i++) {
            bar += '&#xEE04;';
        }
        
        // Add empty segments
        if (emptySegments > 0) {
            bar += '&#xEE01;'.repeat(emptySegments);
            bar += '&#xEE02;'; // Right empty border
        } else {
            bar += '&#xEE05;'; // Right filled border
        }

        return bar;
    }

    update(progress) {
        this.progress = Math.min(Math.max(progress, 0), 100);
        this.element.innerHTML = this.generateBar(this.progress);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const progressBar = createProgressBar('progress', 0, 100);

    let i = 0;
    const interval = setInterval(() => {
        if (i >= 100) {
            clearInterval(interval);
        } else {
            progressBar.update(i);
            i++;
        }
    }, 250);
});

// Helper function to create progress bars
function createProgressBar(containerId, initialProgress = 0, segments = 10) {
    const container = document.getElementById(containerId);
    const progressElement = document.createElement('div');
    progressElement.className = 'progress-bar';
    container.appendChild(progressElement);
    
    const progressBar = new ProgressBar(progressElement, segments);
    progressBar.update(initialProgress);
    return progressBar;
}