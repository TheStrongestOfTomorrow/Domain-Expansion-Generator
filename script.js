/**
 * Domain Expansion Generator
 * Visual effects and interactivity
 */

// Kanji characters for the rain effect
const KANJI_CHARS = "領域展開術式呪力呪靈境界結界無量空処伏魔御廚子鉄棺陵饕餮玉藻死神極番龍脳天逆鉾黒閃式神反転術式黒鳥操術十種影法術不義遊戯天与呪縛芻霊呪法赤鱗躍動";
const KANJI_ARRAY = KANJI_CHARS.split('');

// Domain type configurations
const DOMAIN_TYPES = {
    void: {
        envClass: "env-void",
        primary: '#1a0a2e',
        secondary: '#7c3aed',
        accent: '#a855f7',
        particleColor: 'rgba(168, 85, 247, 0.8)',
        waveColor: 'rgba(168, 85, 247, 0.3)',
        kanjiColor: 'rgba(168, 85, 247, 0.6)'
    },
    flame: {
        envClass: "env-flame",
        primary: '#1a0505',
        secondary: '#dc2626',
        accent: '#f97316',
        particleColor: 'rgba(249, 115, 22, 0.8)',
        waveColor: 'rgba(220, 38, 38, 0.3)',
        kanjiColor: 'rgba(249, 115, 22, 0.6)'
    },
    ice: {
        envClass: "env-ice",
        primary: '#0a1628',
        secondary: '#0ea5e9',
        accent: '#67e8f9',
        particleColor: 'rgba(103, 232, 249, 0.8)',
        waveColor: 'rgba(14, 165, 233, 0.3)',
        kanjiColor: 'rgba(103, 232, 249, 0.6)'
    },
    shadow: {
        envClass: "env-shadow",
        primary: '#0a0a0a',
        secondary: '#374151',
        accent: '#6b7280',
        particleColor: 'rgba(107, 114, 128, 0.8)',
        waveColor: 'rgba(55, 65, 81, 0.3)',
        kanjiColor: 'rgba(107, 114, 128, 0.6)'
    },
    lightning: {
        envClass: "env-lightning",
        primary: '#0f0a1a',
        secondary: '#fbbf24',
        accent: '#fde047',
        particleColor: 'rgba(253, 224, 71, 0.8)',
        waveColor: 'rgba(251, 191, 36, 0.3)',
        kanjiColor: 'rgba(251, 191, 36, 0.6)'
    },
        blood: {
        envClass: "env-blood",
        primary: '#1a0505',
        secondary: '#991b1b',
        accent: '#f87171',
        particleColor: 'rgba(248, 113, 113, 0.8)',
        waveColor: 'rgba(153, 27, 27, 0.3)',
        kanjiColor: 'rgba(248, 113, 113, 0.6)'
    },
    nature: {
        envClass: "env-nature",
        primary: '#064e3b',
        secondary: '#059669',
        accent: '#34d399',
        particleColor: 'rgba(52, 211, 153, 0.8)',
        waveColor: 'rgba(5, 150, 105, 0.3)',
        kanjiColor: 'rgba(52, 211, 153, 0.6)'
    },
    soul: {
        envClass: "env-soul",
        primary: '#1e1b4b',
        secondary: '#4338ca',
        accent: '#818cf8',
        particleColor: 'rgba(129, 140, 248, 0.8)',
        waveColor: 'rgba(67, 56, 202, 0.3)',
        kanjiColor: 'rgba(129, 140, 248, 0.6)'
    },
    poison: {
        envClass: "env-poison",
        primary: '#1e1b4b',
        secondary: '#7e22ce',
        accent: '#d8b4fe',
        particleColor: 'rgba(216, 180, 254, 0.8)',
        waveColor: 'rgba(126, 34, 206, 0.3)',
        kanjiColor: 'rgba(216, 180, 254, 0.6)'
    },
    time: {
        envClass: "env-time",
        primary: '#0f172a',
        secondary: '#334155',
        accent: '#94a3b8',
        particleColor: 'rgba(148, 163, 184, 0.8)',
        waveColor: 'rgba(51, 65, 81, 0.3)',
        kanjiColor: 'rgba(148, 163, 184, 0.6)'
    },
        abyss: {
        envClass: "env-abyss",
        primary: '#020617',
        secondary: '#1e293b',
        accent: '#334155',
        particleColor: 'rgba(51, 65, 81, 0.8)',
        waveColor: 'rgba(30, 41, 59, 0.3)',
        kanjiColor: 'rgba(51, 65, 81, 0.6)'
    },
    gravity: {
        envClass: "env-gravity",
        primary: '#2e1065',
        secondary: '#5b21b6',
        accent: '#c084fc',
        particleColor: 'rgba(192, 132, 252, 0.8)',
        waveColor: 'rgba(91, 33, 182, 0.3)',
        kanjiColor: 'rgba(192, 132, 252, 0.6)'
    },
    moonlight: {
        envClass: "env-moonlight",
        primary: '#0c4a6e',
        secondary: '#0ea5e9',
        accent: '#bae6fd',
        particleColor: 'rgba(186, 230, 253, 0.8)',
        waveColor: 'rgba(14, 165, 233, 0.3)',
        kanjiColor: 'rgba(186, 230, 253, 0.6)'
    },
    sun: {
        envClass: "env-sun",
        primary: '#450a0a',
        secondary: '#b91c1c',
        accent: '#fde047',
        particleColor: 'rgba(253, 224, 71, 0.8)',
        waveColor: 'rgba(185, 28, 28, 0.3)',
        kanjiColor: 'rgba(253, 224, 71, 0.6)'
    },
    chaos: {
        envClass: "env-chaos",
        primary: '#450a0a',
        secondary: '#7c2d12',
        accent: '#f97316',
        particleColor: 'rgba(249, 115, 22, 0.8)',
        waveColor: 'rgba(124, 45, 18, 0.3)',
        kanjiColor: 'rgba(249, 115, 22, 0.6)'
    },
    order: {
        envClass: "env-order",
        primary: '#064e3b',
        secondary: '#0f766e',
        accent: '#5eead4',
        particleColor: 'rgba(94, 234, 212, 0.8)',
        waveColor: 'rgba(15, 118, 110, 0.3)',
        kanjiColor: 'rgba(94, 234, 212, 0.6)'
    },
    zen: {
        envClass: "env-zen",
        primary: '#1c1917',
        secondary: '#a8a29e',
        accent: '#f5f5f4',
        particleColor: 'rgba(245, 245, 244, 0.8)',
        waveColor: 'rgba(168, 162, 158, 0.3)',
        kanjiColor: 'rgba(245, 245, 244, 0.6)'
    },
        infinity: {
        envClass: 'env-infinity',
        primary: '#f8fafc',
        secondary: '#64748b',
        accent: '#0f172a',
        particleColor: 'rgba(15, 23, 42, 0.8)',
        waveColor: 'rgba(100, 116, 139, 0.3)',
        kanjiColor: 'rgba(15, 23, 42, 0.6)'
    },
    zero: {
        envClass: 'env-zero',
        primary: '#000',
        secondary: '#000',
        accent: '#fff',
        particleColor: 'rgba(255, 255, 255, 0.8)',
        waveColor: 'rgba(255, 255, 255, 0.3)',
        kanjiColor: 'rgba(255, 255, 255, 0.6)'
    },
    decay: {
        envClass: 'env-decay',
        primary: '#1c1917',
        secondary: '#44403c',
        accent: '#78716c',
        particleColor: 'rgba(120, 113, 108, 0.8)',
        waveColor: 'rgba(68, 64, 60, 0.3)',
        kanjiColor: 'rgba(120, 113, 108, 0.6)'
    },
    growth: {
        envClass: 'env-growth',
        primary: '#064e3b',
        secondary: '#166534',
        accent: '#4ade80',
        particleColor: 'rgba(74, 222, 128, 0.8)',
        waveColor: 'rgba(22, 101, 52, 0.3)',
        kanjiColor: 'rgba(74, 222, 128, 0.6)'
    },
    mirror: {
        envClass: 'env-mirror',
        primary: '#f1f5f9',
        secondary: '#94a3b8',
        accent: '#38bdf8',
        particleColor: 'rgba(56, 189, 248, 0.8)',
        waveColor: 'rgba(148, 163, 184, 0.3)',
        kanjiColor: 'rgba(56, 189, 248, 0.6)'
    },
    glass: {
        envClass: 'env-glass',
        primary: '#f8fafc',
        secondary: '#cbd5e1',
        accent: '#f1f5f9',
        particleColor: 'rgba(241, 245, 249, 0.8)',
        waveColor: 'rgba(203, 213, 225, 0.3)',
        kanjiColor: 'rgba(241, 245, 249, 0.6)'
    },
    sound: {
        envClass: 'env-sound',
        primary: '#1e1b4b',
        secondary: '#4338ca',
        accent: '#c084fc',
        particleColor: 'rgba(192, 132, 252, 0.8)',
        waveColor: 'rgba(67, 56, 202, 0.3)',
        kanjiColor: 'rgba(192, 132, 252, 0.6)'
    },
    vibration: {
        envClass: 'env-vibration',
        primary: '#171717',
        secondary: '#404040',
        accent: '#a3a3a3',
        particleColor: 'rgba(163, 163, 163, 0.8)',
        waveColor: 'rgba(64, 64, 64, 0.3)',
        kanjiColor: 'rgba(163, 163, 163, 0.6)'
    },
    magnetism: {
        envClass: 'env-magnetism',
        primary: '#1e1b4b',
        secondary: '#312e81',
        accent: '#6366f1',
        particleColor: 'rgba(99, 102, 241, 0.8)',
        waveColor: 'rgba(49, 46, 129, 0.3)',
        kanjiColor: 'rgba(99, 102, 241, 0.6)'
    },
    radiation: {
        envClass: 'env-radiation',
        primary: '#064e3b',
        secondary: '#14532d',
        accent: '#bef264',
        particleColor: 'rgba(190, 242, 100, 0.8)',
        waveColor: 'rgba(20, 83, 45, 0.3)',
        kanjiColor: 'rgba(190, 242, 100, 0.6)'
    },
    cosmic: {
        envClass: "env-cosmic",
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
        'spirit': '霊',
        'cursed': '呪',
        'technique': '術',
        'energy': '力',
        'spirit': '靈',
        'bound': '縛',
        'flash': '閃',
        'black': '黒',
        'reverse': '反転',
        'shikigami': '式神',
        'ten': '十',
        'shadows': '影',
        'ratio': '比率',
        'idle': '無為',
        'transfiguration': '転変',
        'disaster': '災',
        'plague': '疫',
        'rot': '腐',
        'infinity': '無限',
        'zero': '無',
        'decay': '朽',
        'growth': '生',
        'mirror': '鏡',
        'glass': '硝',
        'vibration': '振',
        'magnetism': '磁',
        'radiation': '放',
        'steel': '鋼',
        'paper': '紙',
        'wind': '風',
        'love': '愛',
        'hate': '憎',
        'hope': '望',
        'despair': '絶望',
        'memory': '記憶',
        'dream': '夢',
        'nightmare': '悪夢',
        'reality': '現実',
        'truth': '真実',
        'lie': '嘘',
        'curse': '呪',
        'blessing': '祝',
        'angel': '天使',
        'devil': '悪魔',
        'heaven': '天国',
        'hell': '地獄',
        'reaper': '死神',
        'phantom': '幻影',
        'ghost': '幽霊',
        'spirit': '精神',
        'mind': '心',
        'soul': '魂',
        'body': '体',
        'flesh': '肉',
        'bone': '骨',
        'teeth': '歯',
        'eye': '目',
        'hand': '手',
        'arm': '腕',
        'leg': '脚',
        'heart': '心臓',
        'brain': '脳',
        'blood': '血',
        'vein': '脈',
        'cell': '細胞',
        'atom': '原子',
        'particle': '粒子',
        'manipulation': '操術',
        'projection': '投射',
        'miracle': '奇跡',
        'contract': '契約',
        'jackpot': '大当り',
        'gamble': '賭',
        'fever': '熱',
        'hype': '興奮',
        'stage': '舞台',
        'audience': '観客',
        'limitless': '無下限',
        'six': '六',
        'eyes': '眼',
        'divergent': '径庭',
        'fist': '拳',
        'judgment': '裁判',
        'execution': '処刑',
        'malice': '悪意',
        'suffering': '苦',
        'radiance': '輝',
        'gravity': '重力',
        'blessing': '福',
        'covenant': '盟',
        'binding': '縛',
        'vow': '誓',
        'heavenly': '天',
        'restriction': '与',
        'output': '出力',
        'spark': '火花',
        'chant': '詠唱',
        'sorcerer': '術師',
        'king': '王',
        'queen': '女王',
        'fallen': '堕',
        'plasma': '星漿',
        'vessel': '体',
        'complication': '複',
        'nature': '自然',
        'plague': '疫',
        'rot': '腐',
        'infinity': '無限',
        'zero': '無',
        'decay': '朽',
        'growth': '生',
        'mirror': '鏡',
        'glass': '硝',
        'vibration': '振',
        'magnetism': '磁',
        'radiation': '放',
        'steel': '鋼',
        'paper': '紙',
        'wind': '風',
        'love': '愛',
        'hate': '憎',
        'hope': '望',
        'despair': '絶望',
        'memory': '記憶',
        'dream': '夢',
        'nightmare': '悪夢',
        'reality': '現実',
        'truth': '真実',
        'lie': '嘘',
        'curse': '呪',
        'blessing': '祝',
        'angel': '天使',
        'devil': '悪魔',
        'heaven': '天国',
        'hell': '地獄',
        'reaper': '死神',
        'phantom': '幻影',
        'ghost': '幽霊',
        'spirit': '精神',
        'mind': '心',
        'soul': '魂',
        'body': '体',
        'flesh': '肉',
        'bone': '骨',
        'teeth': '歯',
        'eye': '目',
        'hand': '手',
        'arm': '腕',
        'leg': '脚',
        'heart': '心臓',
        'brain': '脳',
        'blood': '血',
        'vein': '脈',
        'cell': '細胞',
        'atom': '原子',
        'particle': '粒子',
    };

    if (!name || name.trim() === "") return "領域展開";

    let kanji = "";
    const words = name.toLowerCase().trim().split(/\s+/);

    words.forEach(word => {
        if (wordMap[word]) {
            kanji += wordMap[word];
        } else {
            // Use random kanji for unknown words
            kanji += KANJI_ARRAY[Math.floor(Math.random() * KANJI_ARRAY.length)];
        }
    });

    return kanji;
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

    // Cursed Overlay Effect
    const overlay = document.getElementById('cursed-overlay');
    overlay.classList.add('active');
    setTimeout(() => overlay.classList.remove('active'), 1500);

    // Screen Shake
    expansionScreen.classList.add('shake-screen');
    const crack = document.getElementById('screen-crack');
    if (Math.random() > 0.5) {
        crack.classList.add('active');
        setTimeout(() => crack.classList.remove('active'), 1000);
    }
    setTimeout(() => expansionScreen.classList.remove('shake-screen'), 500);

    // Update display
    displayName.textContent = name.toUpperCase();
    displayKanji.textContent = generateKanji(name);

    // Switch screens
    inputScreen.classList.remove('active');
    expansionScreen.classList.add('active');
    expansionScreen.classList.add('expanding');

    // Update expansion screen colors
    updateExpansionColors();

    // Set Technique Mark
    const techMark = document.getElementById('technique-mark');
    techMark.textContent = displayKanji.textContent[0] || '呪';

    // Veil Effect
    const veil = document.createElement('div');
    veil.className = 'veil-closing';
    document.body.appendChild(veil);
    setTimeout(() => veil.remove(), 1500);

    // Start effects
    startParticles();
    startKanjiRain();
    startWisps();

    // Remove expansion animation class after it completes
    setTimeout(() => {
        expansionScreen.classList.remove('expanding');
    }, 2000);
}

// Update expansion screen colors
function updateExpansionColors() {
    const colors = DOMAIN_TYPES[currentType];

    // Remove old environment classes
    expansionScreen.className = 'screen active expanding';
    if (colors.envClass) {
        expansionScreen.classList.add(colors.envClass);
    }

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

    // Stop wisps
    if (wispInterval) {
        clearInterval(wispInterval);
        wispInterval = null;
    }
    document.querySelectorAll('.wisp').forEach(w => w.remove());

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
    ctx.fillStyle = `rgba(0, 0, 0, 0.15)`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    particles.forEach(particle => {
        particle.update();
        particle.draw();
        particle.connections = 0;
    });

    for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            if (p1.connections >= 3 || p2.connections >= 3) continue;

            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const distSq = dx * dx + dy * dy;

            if (distSq < 10000) {
                const distance = Math.sqrt(distSq);
                p1.connections++;
                p2.connections++;
                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.strokeStyle = colors.waveColor.replace('0.3', (0.2 * (1 - distance / 100)).toString());
                ctx.lineWidth = 1;
                ctx.stroke();
            }
        }
    }

    animationId = requestAnimationFrame(animateParticles);
}

// Kanji rain
function startKanjiRain() {
    const colors = DOMAIN_TYPES[currentType];
    const MAX_KANJI = 40;

    kanjiInterval = setInterval(() => {
        if (kanjiRain.childElementCount >= MAX_KANJI) return;

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
            if (kanji.parentNode === kanjiRain) {
                kanji.remove();
            }
        }, 5000);
    }, 150);
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

// Cursed Energy Wisps
let wispInterval = null;
function startWisps() {
    const colors = DOMAIN_TYPES[currentType];
    wispInterval = setInterval(() => {
        const wisp = document.createElement('div');
        wisp.className = 'wisp';
        wisp.style.left = Math.random() * 100 + '%';
        wisp.style.top = Math.random() * 100 + '%';
        wisp.style.setProperty('--accent', colors.accent);

        const size = Math.random() * 150 + 50;
        wisp.style.width = size + 'px';
        wisp.style.height = size + 'px';

        expansionScreen.appendChild(wisp);

        const anim = wisp.animate([
            { transform: 'translate(0, 0) scale(1)', opacity: 0 },
            { transform: `translate(${(Math.random()-0.5)*100}px, ${(Math.random()-0.5)*100}px) scale(1.5)`, opacity: 0.4 },
            { transform: `translate(${(Math.random()-0.5)*200}px, ${(Math.random()-0.5)*200}px) scale(1)`, opacity: 0 }
        ], {
            duration: 3000 + Math.random() * 2000,
            easing: 'ease-in-out'
        });

        anim.onfinish = () => wisp.remove();
    }, 500);
}
