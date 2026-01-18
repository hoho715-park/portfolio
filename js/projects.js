/* ===================================
   Projects JS - 프로젝트 가로 슬라이더
   =================================== */

/**
 * 프로젝트 데이터 배열
 * 새로운 프로젝트 추가 시 이 배열에만 추가하면 자동으로 슬라이더에 적용
 */
const projectsData = [
    {
        id: 1,
        title: "E-Commerce Platform",
        role: "fullstack",
        description: "React와 Node.js를 활용한 풀스택 이커머스 플랫폼. 결제 시스템, 재고 관리, 사용자 인증 기능을 직접 설계하고 구현했습니다.",
        tech: ["React", "Node.js", "MongoDB", "AWS"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
        hasAward: true,
        modalId: "project1-modal",
        awardId: "award1-modal"
    },
    {
        id: 2,
        title: "Real-time Dashboard",
        role: "backend",
        description: "WebSocket을 활용한 실시간 데이터 모니터링 대시보드. 대용량 데이터 스트리밍과 시각화를 위한 백엔드 아키텍처를 설계했습니다.",
        tech: ["Spring Boot", "WebSocket", "Redis", "Docker"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
        hasAward: false,
        modalId: "project2-modal"
    },
    {
        id: 3,
        title: "Task Management App",
        role: "frontend",
        description: "드래그 앤 드롭 기반의 칸반 보드 태스크 관리 앱. 복잡한 상태 관리와 애니메이션 구현에 집중했습니다.",
        tech: ["Vue.js", "Vuex", "Firebase"],
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
        hasAward: true,
        modalId: "project3-modal",
        awardId: "award2-modal"
    },
    {
        id: 4,
        title: "CI/CD Pipeline System",
        role: "fullstack",
        description: "마이크로서비스 아키텍처를 위한 CI/CD 파이프라인 구축. 자동화된 테스트와 배포 프로세스를 설계했습니다.",
        tech: ["Kubernetes", "Jenkins", "Terraform", "AWS"],
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
        hasAward: false,
        modalId: "project4-modal"
    },
    {
        id: 5,
        title: "AI Customer Service Bot",
        role: "backend",
        description: "자연어 처리 기반의 고객 서비스 챗봇. API 설계와 ML 모델 서빙을 위한 백엔드 시스템을 구축했습니다.",
        tech: ["Python", "FastAPI", "TensorFlow", "PostgreSQL"],
        image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop",
        hasAward: false,
        modalId: "project5-modal"
    },
    {
        id: 6,
        title: "Team Collaboration Tool",
        role: "fullstack",
        description: "실시간 협업 도구 플랫폼. 화상 회의, 문서 공동 편집, 프로젝트 관리 기능을 통합 구현했습니다.",
        tech: ["React", "Node.js", "WebRTC", "Socket.io"],
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
        hasAward: true,
        modalId: "project6-modal",
        awardId: "award3-modal"
    }
];

/**
 * 프로젝트 슬라이더 클래스
 */
class ProjectsSlider {
    constructor() {
        this.currentPage = 0;
        this.cardsPerPage = this.getCardsPerPage();
        this.totalProjects = projectsData.length;
        this.totalPages = Math.ceil(this.totalProjects / this.cardsPerPage);

        this.slider = document.querySelector('.projects-grid');
        this.prevBtn = document.querySelector('.slider-nav.prev');
        this.nextBtn = document.querySelector('.slider-nav.next');
        this.progressContainer = document.querySelector('.slider-progress');

        this.init();
        this.setupResizeHandler();
    }

    init() {
        this.renderProjects();
        this.renderPageIndicator();
        this.setupEventListeners();
        this.updateUI();
    }

    getCardsPerPage() {
        const width = window.innerWidth;
        if (width <= 768) return 1;
        if (width <= 1200) return 2;
        return 3;
    }

    renderProjects() {
        if (!this.slider) return;

        this.slider.innerHTML = '';

        projectsData.forEach(project => {
            const card = this.createProjectCard(project);
            this.slider.appendChild(card);
        });
    }

    createProjectCard(project) {
        const card = document.createElement('div');
        card.className = 'project-card';

        // Tech stack icons (limit to 5, show +N for more)
        const maxTechIcons = 5;
        const displayTech = project.tech.slice(0, maxTechIcons);
        const remainingTech = project.tech.length - maxTechIcons;

        const techStackHTML = `
            <div class="project-tech-stack">
                ${displayTech.map(tech => `
                    <div class="tech-icon-text" title="${tech}">${tech}</div>
                `).join('')}
                ${remainingTech > 0 ? `<div class="tech-more">+${remainingTech}</div>` : ''}
            </div>
        `;

        card.innerHTML = `
            <!-- Thumbnail Image -->
            <div class="project-thumbnail">
                <img src="${project.image}" alt="${project.title}">
                <div class="project-thumbnail-overlay"></div>
            </div>

            <!-- Project Content -->
            <div class="project-content">
                <!-- Project Title -->
                <h3 class="project-title">${project.title}</h3>

                <!-- Optional Description -->
                ${project.description ? `
                    <p class="project-description">${project.description}</p>
                ` : ''}

                <!-- Tech Stack Icons -->
                ${techStackHTML}
            </div>

            <!-- Detail View Button -->
            <button class="project-detail-btn" data-modal="${project.modalId}" aria-label="View Details">
                <i class="fas fa-arrow-right"></i>
            </button>
        `;

        // Add click event to the entire card
        card.addEventListener('click', (e) => {
            // Don't trigger if clicking the detail button (it has its own handler)
            if (!e.target.closest('.project-detail-btn')) {
                const detailBtn = card.querySelector('.project-detail-btn');
                if (detailBtn) {
                    detailBtn.click();
                }
            }
        });

        return card;
    }

    renderPageIndicator() {
        if (!this.progressContainer) return;

        this.progressContainer.innerHTML = '';

        const pageIndicator = document.createElement('div');
        pageIndicator.className = 'page-indicator';
        pageIndicator.innerHTML = `<span class="current-page">1</span> / <span class="total-pages">${this.totalPages}</span>`;

        this.progressContainer.appendChild(pageIndicator);
    }

    setupEventListeners() {
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.prev());
        }

        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.next());
        }

        // 터치 스와이프 지원
        let startX = 0;
        let currentX = 0;

        this.slider.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        }, { passive: true });

        this.slider.addEventListener('touchmove', (e) => {
            currentX = e.touches[0].clientX;
        }, { passive: true });

        this.slider.addEventListener('touchend', () => {
            const diff = startX - currentX;
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    this.next();
                } else {
                    this.prev();
                }
            }
        }, { passive: true });
    }

    setupResizeHandler() {
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                const newCardsPerPage = this.getCardsPerPage();
                if (newCardsPerPage !== this.cardsPerPage) {
                    this.cardsPerPage = newCardsPerPage;
                    this.totalPages = Math.ceil(this.totalProjects / this.cardsPerPage);
                    this.currentPage = Math.min(this.currentPage, this.totalPages - 1);
                    this.renderPageIndicator();
                    this.updateUI();
                }
            }, 250);
        });
    }

    prev() {
        if (this.currentPage > 0) {
            this.currentPage--;
            this.updateUI();
        }
    }

    next() {
        if (this.currentPage < this.totalPages - 1) {
            this.currentPage++;
            this.updateUI();
        }
    }

    goToPage(page) {
        this.currentPage = Math.min(Math.max(0, page), this.totalPages - 1);
        this.updateUI();
    }

    updateUI() {
        // 슬라이더 위치 업데이트 (페이지 기반)
        const cardWidth = this.slider.querySelector('.project-card')?.offsetWidth || 0;
        const gap = 24;
        const offset = -(this.currentPage * this.cardsPerPage * (cardWidth + gap));
        this.slider.style.transform = `translateX(${offset}px)`;

        // 버튼 상태 업데이트
        if (this.prevBtn) {
            if (this.currentPage === 0) {
                this.prevBtn.classList.add('disabled');
            } else {
                this.prevBtn.classList.remove('disabled');
            }
        }

        if (this.nextBtn) {
            if (this.currentPage >= this.totalPages - 1) {
                this.nextBtn.classList.add('disabled');
            } else {
                this.nextBtn.classList.remove('disabled');
            }
        }

        // 페이지 표시 업데이트
        const currentPageSpan = document.querySelector('.current-page');
        if (currentPageSpan) {
            currentPageSpan.textContent = this.currentPage + 1;
        }
    }

    // 현재 페이지 반환 (외부에서 사용 가능)
    getCurrentPage() {
        return this.currentPage;
    }

    // 특정 페이지로 이동 (외부에서 사용 가능)
    goTo(page) {
        this.goToPage(page);
    }
}

// 초기화 함수
let projectsSliderInstance = null;

function initProjects() {
    projectsSliderInstance = new ProjectsSlider();
}

// 전역으로 내보내기
window.initProjects = initProjects;
window.getProjectsSlider = () => projectsSliderInstance;
