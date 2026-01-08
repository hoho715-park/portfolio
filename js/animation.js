/* ===================================
   Animation JS - 애니메이션 관련 로직
   =================================== */

/**
 * 스크롤 애니메이션 초기화
 */
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
    
    // 애니메이션 대상 요소들
    const animatedElements = document.querySelectorAll(
        '.intro-card, .info-card, .skill-category, .archive-card, .project-card, .timeline-card'
    );
    
    animatedElements.forEach((el, index) => {
        el.classList.add('fade-in');
        el.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(el);
    });
    
    // 섹션 헤더 애니메이션
    const sectionHeaders = document.querySelectorAll('.section-header');
    sectionHeaders.forEach(header => {
        header.classList.add('fade-in');
        observer.observe(header);
    });
}

/**
 * 패럴랙스 효과 초기화
 */
function initParallax() {
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
}

/**
 * 패럴랙스 업데이트
 */
function updateParallax() {
    const scrolled = window.pageYOffset;
    const shapes = document.querySelectorAll('.floating-shape');
    
    shapes.forEach((shape, index) => {
        const speed = 0.1 + (index * 0.05);
        shape.style.transform = `translateY(${scrolled * speed}px)`;
    });
}

/**
 * 스킬 아이템 호버 효과
 */
function initSkillItemEffects() {
    document.querySelectorAll('.skill-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(8px) scale(1.02)';
        });
        item.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
}

/**
 * 아카이브 카드 호버 효과
 */
function initArchiveCardEffects() {
    document.querySelectorAll('.archive-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.thumbnail-bg i');
            if (icon) icon.style.transform = 'scale(1.2) rotate(10deg)';
        });
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.thumbnail-bg i');
            if (icon) icon.style.transform = '';
        });
    });
}

/**
 * 프로젝트 카드 3D 효과
 */
function initProjectCard3DEffect() {
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
}

/**
 * 버튼 리플 효과
 */
function initButtonRippleEffect() {
    // 스타일 추가
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        @keyframes ripple {
            to { transform: scale(4); opacity: 0; }
        }
    `;
    document.head.appendChild(styleSheet);
    
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
}

/**
 * 스택 아이템 호버 효과
 */
function initStackItemEffects() {
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
}

/**
 * 페이지 로드 효과
 */
function initPageLoadEffect() {
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        const heroElements = document.querySelectorAll('.hero-content > *');
        heroElements.forEach((el, index) => {
            el.style.animationDelay = `${index * 0.2}s`;
        });
    });
}

/**
 * 모든 애니메이션 초기화
 */
function initAllAnimations() {
    initScrollAnimations();
    initParallax();
    initSkillItemEffects();
    initArchiveCardEffects();
    initProjectCard3DEffect();
    initButtonRippleEffect();
    initStackItemEffects();
    initPageLoadEffect();
}

// 전역으로 내보내기
window.initScrollAnimations = initScrollAnimations;
window.initAllAnimations = initAllAnimations;