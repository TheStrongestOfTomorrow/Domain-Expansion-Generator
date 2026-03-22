/**
 * Domain Expansion Generator
 * Visual effects and interactivity
 */

// Kanji characters for the rain effect
const KANJI_CHARS = '領域展開術式呪力呪靈境界結界無量空処伏魔御廚子鉄棺陵饕餮玉藻死神極番龍脳天逆鉾';
const KANJI_ARRAY = KANJI_CHARS.split('');

// Domain type configurations
const DOMAIN_TYPES = {
    void: {
        primary: '#1a0a2e',
        secondary: '#7c3aed',
        accent: '#a855f7',
        particleColor: 'rgba(168, 85, 247, 0.8)',
        waveColor: 'rgba(168, 85, 247, 0.3)',
        kanjiColor: 'rgba(168, 85, 247, 0.6)'
    },
    flame: {
        primary: '#1a0505',
        secondary: '#dc2626',
        accent: '#f97316',
        particleColor: 'rgba(249, 115, 22, 0.8)',
        waveColor: 'rgba(220, 38, 38, 0.3)',
        kanjiColor: 'rgba(249, 115, 22, 0.6)'
    },
    ice: {
        primary: '#0a1628',
        secondary: '#0ea5e9',
        accent: '#67e8f9',
        particleColor: 'rgba(103, 232, 249, 0.8)',
        waveColor: 'rgba(14, 165, 233, 0.3)',
        kanjiColor: 'rgba(103, 232, 249, 0.6)'
    },
    shadow: {
        primary: '#0a0a0a',
        secondary: '#374151',
        accent: '#6b7280',
        particleColor: 'rgba(107, 114, 128, 0.8)',
        waveColor: 'rgba(55, 65, 81, 0.3)',
        kanjiColor: 'rgba(107, 114, 128, 0.6)'
    },
    lightning: {
        primary: '#0f0a1a',
        secondary: '#fbbf24',
        accent: '#fde047',
        particleColor: 'rgba(253, 224, 71, 0.8)',
        waveColor: 'rgba(251, 191, 36, 0.3)',
        kanjiColor: 'rgba(251, 191, 36, 0.6)'
    },
    cosmic: {
        primary: '#0a0612',
        secondary: '#ec4899',
        accent: '#a855f7',
        particleColor: 'rgba(168, 85, 247, 0.8)',
        waveColor: 'rgba(236, 72, 153, 0.3)',
        kanjiColor: 'rgba(236, 72, 153, 0.6)'
    }
};

// State
let currentType = 'void';
let particles = [];
let animationId = null;
let kanjiInterval = null;

// DOM Elements
const preloader = document.getElementById('preloader');
const inputScreen = document.getElementById('input-screen');
const expansionScreen = document.getElementById('expansion-screen');
const domainNameInput = document.getElementById('domain-name');
const expandBtn = document.getElementById('expand-btn');
const exitBtn = document.getElementById('exit-btn');
const typeButtons = document.querySelectorAll('.type-btn');
const exampleTags = document.querySelectorAll('.tag');
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
const kanjiRain = document.getElementById('kanji-rain');
const displayName = document.getElementById('display-name');
const displayKanji = document.getElementById('display-kanji');

// Initialize
window.addEventListener('load', () => {
    setTimeout(() => {
        preloader.classList.add('hidden');
    }, 1500);

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
});

// Resize canvas
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

// Type selection
typeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        typeButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentType = btn.dataset.type;
        updateTheme(currentType);
    });
});

// Update theme colors
function updateTheme(type) {
    const colors = DOMAIN_TYPES[type];
    document.documentElement.style.setProperty('--primary', colors.primary);
    document.documentElement.style.setProperty('--secondary', colors.secondary);
    document.documentElement.style.setProperty('--accent', colors.accent);
}

// Example tags
exampleTags.forEach(tag => {
    tag.addEventListener('click', () => {
        domainNameInput.value = tag.dataset.name;
        typeButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.type === tag.dataset.type) {
                btn.classList.add('active');
                currentType = btn.dataset.type;
                updateTheme(currentType);
            }
        });
    });
});

// Generate kanji for domain name
function generateKanji(name) {
    // Map common words to kanji
    const wordMap = {
        'infinite': '無限',
        'void': '虚空',
        'death': '死',
        'flame': '炎',
        'fire': '火',
        'ice': '氷',
        'shadow': '影',
        'light': '光',
        'dark': '暗',
        'heaven': '天',
        'hell': '地獄',
        'dragon': '龍',
        'demon': '鬼',
        'god': '神',
        'sword': '剣',
        'blood': '血',
        'moon': '月',
        'sun': '日',
        'star': '星',
        'night': '夜',
        'dream': '夢',
        'nightmare': '悪夢',
        'eternal': '永遠',
        'malevolent': '悪意',
        'shrine': '神社',
        'mountain': '山',
        'ocean': '海',
        'sky': '空',
        'thunder': '雷',
        'lightning': '稲妻',
        'storm': '嵐',
        'chaos': '混沌',
        'order': '秩序',
        'life': '命',
        'soul': '魂',
        'mind': '心',
        'spirit': '霊'
    };

    let kanji = '';
    const words = name.toLowerCase().split(' ');

    words.forEach(word => {
        if (wordMap[word]) {
            kanji += wordMap[word];
        } else {
            // Use random kanji for unknown words
            kanji += KANJI_ARRAY[Math.floor(Math.random() * KANJI_ARRAY.length)];
        }
    });

    return kanji || '領域展開';
}

// Expand button
expandBtn.addEventListener('click', () => {
    const name = domainNameInput.value.trim() || 'Domain Expansion';
    startExpansion(name);
});

// Enter key
domainNameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const name = domainNameInput.value.trim() || 'Domain Expansion';
        startExpansion(name);
    }
});

// Start domain expansion
function startExpansion(name) {
    // Play sound
    const sound = document.getElementById('expand-sound');
    sound.currentTime = 0;
    sound.play().catch(() => {});

    // Update display
    displayName.textContent = name.toUpperCase();
    displayKanji.textContent = generateKanji(name);

    // Switch screens
    inputScreen.classList.remove('active');
    expansionScreen.classList.add('active');
    expansionScreen.classList.add('expanding');

    // Update expansion screen colors
    updateExpansionColors();

    // Start effects
    startParticles();
    startKanjiRain();

    // Remove expansion animation class after it completes
    setTimeout(() => {
        expansionScreen.classList.remove('expanding');
    }, 2000);
}

// Update expansion screen colors
function updateExpansionColors() {
    const colors = DOMAIN_TYPES[currentType];

    // Update symbol rings
    document.querySelectorAll('.symbol-ring').forEach(ring => {
        ring.style.borderColor = colors.waveColor;
    });

    // Update core
    const core = document.querySelector('.symbol-core');
    core.style.background = `radial-gradient(circle, ${colors.accent} 0%, ${colors.secondary} 100%)`;
    core.style.boxShadow = `0 0 50px ${colors.accent}, 0 0 100px ${colors.secondary}`;

    // Update kanji display
    displayKanji.style.background = `linear-gradient(135deg, ${colors.accent}, ${colors.secondary})`;
    displayKanji.style.webkitBackgroundClip = 'text';

    // Update waves
    document.querySelectorAll('.wave').forEach(wave => {
        wave.style.borderColor = colors.waveColor;
    });
}

// Exit button
exitBtn.addEventListener('click', () => {
    stopExpansion();
});

// Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && expansionScreen.classList.contains('active')) {
        stopExpansion();
    }
});

// Stop domain expansion
function stopExpansion() {
    // Stop particles
    if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
    }

    // Stop kanji rain
    if (kanjiInterval) {
        clearInterval(kanjiInterval);
        kanjiInterval = null;
    }

    // Clear particles
    particles = [];
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    kanjiRain.innerHTML = '';

    // Switch screens
    expansionScreen.classList.remove('active');
    inputScreen.classList.add('active');
}

// Particle system
class Particle {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 2;
        this.speedY = (Math.random() - 0.5) * 2;
        this.opacity = Math.random() * 0.5 + 0.5;
        this.life = 1;
        this.decay = Math.random() * 0.01 + 0.005;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life -= this.decay;

        if (this.life <= 0) {
            this.reset();
        }
    }

    draw() {
        const colors = DOMAIN_TYPES[currentType];
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = colors.particleColor.replace('0.8', (this.opacity * this.life).toString());
        ctx.fill();
    }
}

// Start particles
function startParticles() {
    particles = [];
    for (let i = 0; i < 200; i++) {
        particles.push(new Particle());
    }
    animateParticles();
}

// Animate particles
function animateParticles() {
    const colors = DOMAIN_TYPES[currentType];
    ctx.fillStyle = `rgba(0, 0, 0, 0.1)`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });

    // Draw connections
    particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.strokeStyle = colors.waveColor.replace('0.3', (0.2 * (1 - distance / 100)).toString());
                ctx.stroke();
            }
        });
    });

    animationId = requestAnimationFrame(animateParticles);
}

// Kanji rain
function startKanjiRain() {
    const colors = DOMAIN_TYPES[currentType];

    kanjiInterval = setInterval(() => {
        const kanji = document.createElement('div');
        kanji.className = 'kanji-particle';
        kanji.textContent = KANJI_ARRAY[Math.floor(Math.random() * KANJI_ARRAY.length)];
        kanji.style.left = Math.random() * 100 + '%';
        kanji.style.color = colors.kanjiColor;
        kanji.style.animationDuration = (Math.random() * 3 + 2) + 's';
        kanji.style.fontSize = (Math.random() * 20 + 15) + 'px';

        kanjiRain.appendChild(kanji);

        // Remove after animation
        setTimeout(() => {
            kanji.remove();
        }, 5000);
    }, 100);
}

// Touch support for mobile
let touchStartY = 0;

expansionScreen.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
});

expansionScreen.addEventListener('touchend', (e) => {
    const touchEndY = e.changedTouches[0].clientY;
    if (touchStartY - touchEndY > 100) {
        stopExpansion();
    }
});
