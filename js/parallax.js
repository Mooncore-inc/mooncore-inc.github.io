document.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth - e.pageX * 2) / 90;
    const y = (window.innerHeight - e.pageY * 2) / 90;
    
    document.querySelectorAll('.parallax-layer').forEach(layer => {
        const speed = parseFloat(layer.dataset.speed) || 0.1;
        layer.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
    });
    
    document.querySelectorAll('.parallax-card').forEach(card => {
        const rect = card.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;
        
        card.style.transform = `
            perspective(1000px)
            rotateX(${(offsetY - rect.height/2) * -0.02}deg)
            rotateY(${(offsetX - rect.width/2) * 0.02}deg)
        `;
    });
});

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        
        card.style.transform = `
            perspective(1000px)
            rotateX(${y * 15}deg)
            rotateY(${x * 15}deg)
            translateZ(20px)
        `;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateZ(0)';
    });
});

// Создание звездного фона
function createStars() {
    const container = document.querySelector('.stars');
    for(let i = 0; i < 200; i++) {
        const star = document.createElement('div');
        star.style.cssText = `
            position: absolute;
            width: ${Math.random() * 3}px;
            height: ${Math.random() * 3}px;
            background: rgba(255,255,255,${Math.random()});
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            border-radius: 50%;
        `;
        container.appendChild(star);
    }
}

class Particle {
    constructor() {
        this.element = document.createElement('div');
        this.reset();
        document.body.appendChild(this.element);
    }

    reset() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.size = Math.random() * 3;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        
        this.element.style.cssText = `
            position: fixed;
            width: ${this.size}px;
            height: ${this.size}px;
            background: rgba(8,247,254,${Math.random() * 0.4});
            border-radius: 50%;
            left: ${this.x}px;
            top: ${this.y}px;
            pointer-events: none;
        `;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if(this.x > window.innerWidth || this.x < 0 ||
            this.y > window.innerHeight || this.y < 0) {
            this.reset();
        }
        
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
}

// Создаем частицы
const particles = Array.from({ length: 50 }, () => new Particle());

function animate() {
    particles.forEach(p => p.update());
    requestAnimationFrame(animate);
}