document.addEventListener('DOMContentLoaded', function() {
    initNavbar();
    initMobileMenu();
    initScrollAnimations();
    initModal();
    initTimelineModal();
    initTypingEffect();
    initCodeRain();
});

function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navMenu = document.querySelector('.nav-menu');
                const navToggle = document.querySelector('.nav-toggle');
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function initMobileMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    navToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    document.addEventListener('click', function(e) {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    const animatedElements = document.querySelectorAll('.intro-card, .info-card, .skill-category, .archive-card, .project-card, .timeline-card');
    animatedElements.forEach((el, index) => {
        el.classList.add('fade-in');
        el.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(el);
    });
    
    const sectionHeaders = document.querySelectorAll('.section-header');
    sectionHeaders.forEach(header => {
        header.classList.add('fade-in');
        observer.observe(header);
    });
}

function initModal() {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const modalClose = modal.querySelector('.modal-close');
    
    const projectImages = document.querySelectorAll('.project-image');
    projectImages.forEach(image => {
        image.addEventListener('click', function() {
            const img = this.querySelector('img');
            if (img) {
                modalImage.src = img.src;
                modalImage.alt = img.alt;
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    const awardButtons = document.querySelectorAll('.btn-award');
    awardButtons.forEach(button => {
        button.addEventListener('click', function() {
            const awardImages = {
                'award1-modal': 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800&h=600&fit=crop',
                'award2-modal': 'https://images.unsplash.com/photo-1579547945413-497e1b99dac0?w=800&h=600&fit=crop',
                'award3-modal': 'https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?w=800&h=600&fit=crop'
            };
            
            const awardId = this.getAttribute('data-award');
            if (awardImages[awardId]) {
                modalImage.src = awardImages[awardId];
                modalImage.alt = '수상 이미지';
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    modalClose.addEventListener('click', function() {
        closeModal(modal, modalImage);
    });
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal(modal, modalImage);
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal(modal, modalImage);
        }
    });
}

function initTimelineModal() {
    const timelineModal = document.getElementById('timeline-modal');
    const timelineModalImage = document.getElementById('timeline-modal-image');
    const timelineModalClose = timelineModal.querySelector('.modal-close');
    
    const timelineImages = {
        'csf4-modal': '/images/csf4.png'
    };
    
    const clickableItems = document.querySelectorAll('.timeline-list li.clickable');
    clickableItems.forEach(item => {
        item.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal');
            if (timelineImages[modalId]) {
                timelineModalImage.src = timelineImages[modalId];
                timelineModalImage.alt = 'CSF4 증명서';
                timelineModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    timelineModalClose.addEventListener('click', function() {
        closeModal(timelineModal, timelineModalImage);
    });
    
    timelineModal.addEventListener('click', function(e) {
        if (e.target === timelineModal) {
            closeModal(timelineModal, timelineModalImage);
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && timelineModal.classList.contains('active')) {
            closeModal(timelineModal, timelineModalImage);
        }
    });
}

function closeModal(modal, modalImage) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    setTimeout(() => {
        modalImage.src = '';
    }, 300);
}

function initTypingEffect() {
    const typingText = document.querySelector('.typing-text');
    if (!typingText) return;
    
    const texts = [
        '서비스 전체를 설계하는 개발자',
        'UI부터 인프라까지 구현하는 개발자',
        '문제를 해결하는 풀스택 개발자'
    ];
    
    let textIndex = 0;
    let charIndex = texts[0].length;
    let isDeleting = true;
    
    typingText.textContent = texts[0];
    
    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            charIndex--;
            typingText.textContent = currentText.substring(0, charIndex);
            
            if (charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                setTimeout(type, 500);
                return;
            }
            setTimeout(type, 50);
        } else {
            charIndex++;
            typingText.textContent = texts[textIndex].substring(0, charIndex);
            
            if (charIndex === texts[textIndex].length) {
                isDeleting = true;
                setTimeout(type, 2000);
                return;
            }
            setTimeout(type, 100);
        }
    }
    
    setTimeout(type, 2000);
}

function initCodeRain() {
    const codeRain = document.querySelector('.code-rain');
    if (!codeRain) return;
    
    const codeSnippets = [
        'Hello World',
        'console.log()',
        'function()',
        'const app',
        'let data',
        'return true',
        'if (true) {}',
        'for (i=0)',
        'while (run)',
        '<div></div>',
        '<html>',
        '{ }',
        '=> {}',
        'npm install',
        'git commit',
        'git push',
        'async await',
        'try catch',
        'export default',
        'import React',
        'useState()',
        'useEffect()',
        'fetch(url)',
        'axios.get()',
        'res.json()',
        'req.body',
        'SELECT *',
        'INSERT INTO',
        'CREATE TABLE',
        'docker run',
        'kubectl apply',
        'aws s3 sync',
        'npm run dev',
        'yarn build',
        'python app.py',
        'node server.js',
        'java -jar',
        'mvn clean',
        'gradle build',
        './deploy.sh',
        'chmod +x',
        'sudo apt',
        'brew install',
        'ping localhost',
        'curl -X POST',
        'ssh user@host',
        'cd /home',
        'mkdir project',
        'touch index.js',
        'cat .env',
        'grep -r',
        'ls -la',
        'echo $PATH',
        'PORT=3000',
        '.map()',
        '.filter()',
        '.reduce()',
        '.forEach()',
        'Promise.all()',
        'new Date()',
        'JSON.parse()',
        'Object.keys()',
        'Array.from()',
        'Math.random()',
        'parseInt()',
        'toString()',
        'addEventListener',
        'querySelector',
        'getElementById',
        'createElement',
        'appendChild',
        'innerHTML',
        'className',
        'onClick',
        'onChange',
        'onSubmit',
        'setState()',
        'props.data',
        'this.state',
        'render()',
        'useCallback',
        'useMemo',
        'useRef',
        'useContext',
        'dispatch()',
        'reducer()',
        'middleware',
        'bcrypt.hash',
        'jwt.sign()',
        'express.Router',
        'app.listen()',
        'res.status(200)',
        'next()',
        'cors()',
        'dotenv.config',
        '200 OK',
        '404 Not Found',
        '500 Error',
        'POST /api',
        'GET /users',
        'PUT /update',
        'DELETE /id',
        'Bearer token',
        'Content-Type',
        'Authorization'
    ];
    
    const columns = Math.floor(window.innerWidth / 35);
    
    for (let i = 0; i < columns; i++) {
        createCodeDrop(codeRain, codeSnippets, i);
    }
}

function createCodeDrop(container, snippets, index) {
    const drop = document.createElement('div');
    drop.style.cssText = `
        position: absolute;
        left: ${index * 35 + Math.random() * 15}px;
        top: ${Math.random() * -100}%;
        font-family: 'Fira Code', 'Source Code Pro', 'Consolas', 'Monaco', monospace;
        font-size: 11px;
        color: rgba(99, 102, 241, 0.18);
        writing-mode: vertical-rl;
        text-orientation: mixed;
        white-space: nowrap;
        animation: codeRainFall ${10 + Math.random() * 15}s linear infinite;
        animation-delay: ${Math.random() * 8}s;
        pointer-events: none;
        text-shadow: 0 0 8px rgba(99, 102, 241, 0.3);
        letter-spacing: 2px;
    `;
    
    const numSnippets = 2 + Math.floor(Math.random() * 4);
    let text = '';
    for (let i = 0; i < numSnippets; i++) {
        text += snippets[Math.floor(Math.random() * snippets.length)] + ' ';
    }
    drop.textContent = text.trim();
    
    container.appendChild(drop);
}

const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes codeRainFall {
        0% {
            transform: translateY(-100%);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(100vh);
            opacity: 0;
        }
    }
`;
document.head.appendChild(styleSheet);

document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(8px) scale(1.02)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = '';
    });
});

document.querySelectorAll('.archive-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        const icon = this.querySelector('.thumbnail-bg i');
        if (icon) {
            icon.style.transform = 'scale(1.2) rotate(10deg)';
        }
    });
    
    card.addEventListener('mouseleave', function() {
        const icon = this.querySelector('.thumbnail-bg i');
        if (icon) {
            icon.style.transform = '';
        }
    });
});

document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const ripple = document.createElement('span');
        ripple.style.cssText = `
            position: absolute;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
            left: ${x}px;
            top: ${y}px;
            width: 100px;
            height: 100px;
            margin-left: -50px;
            margin-top: -50px;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

let ticking = false;
window.addEventListener('scroll', function() {
    if (!ticking) {
        window.requestAnimationFrame(function() {
            updateParallax();
            ticking = false;
        });
        ticking = true;
    }
});

function updateParallax() {
    const scrolled = window.pageYOffset;
    const shapes = document.querySelectorAll('.floating-shape');
    
    shapes.forEach((shape, index) => {
        const speed = 0.1 + (index * 0.05);
        shape.style.transform = `translateY(${scrolled * speed}px)`;
    });
}

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = '';
    });
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    const heroElements = document.querySelectorAll('.hero-content > *');
    heroElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.2}s`;
    });
});

const lazyImages = document.querySelectorAll('img[data-src]');
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
}

document.querySelectorAll('.stack-item').forEach((item, index) => {
    item.addEventListener('mouseenter', function() {
        document.querySelectorAll('.stack-item').forEach((other, otherIndex) => {
            if (otherIndex !== index) {
                other.style.opacity = '0.5';
                other.style.transform = 'scale(0.95)';
            }
        });
    });
    
    item.addEventListener('mouseleave', function() {
        document.querySelectorAll('.stack-item').forEach(other => {
            other.style.opacity = '';
            other.style.transform = '';
        });
    });
});

console.log('%c👋 안녕하세요!', 'font-size: 24px; font-weight: bold; color: #6366f1;');
console.log('%c이 포트폴리오는 박성호가 제작했습니다.', 'font-size: 14px; color: #64748b;');
console.log('%c연락처: andytjdgh@gmail.com', 'font-size: 12px; color: #94a3b8;');