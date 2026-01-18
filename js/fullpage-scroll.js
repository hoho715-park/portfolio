/* ===================================
   Fullpage Scroll JS - 풀페이지 스냅 스크롤
   =================================== */

/**
 * 풀페이지 스크롤 시스템
 * - 섹션 단위 스냅 스크롤
 * - Transform 기반 부드러운 슬라이드 전환
 * - 스크롤 잠금 처리
 */
class FullpageScroll {
    constructor() {
        this.sections = document.querySelectorAll('section');
        this.mainContainer = document.getElementById('fullpage-wrapper');
        this.currentIndex = 0;
        this.isScrolling = false;
        this.scrollDelay = 800; // 스크롤 잠금 시간 (ms)
        this.touchStartY = 0;
        this.touchEndY = 0;

        this.init();
    }

    init() {
        // 메인 컨테이너 생성
        this.createWrapper();

        // 초기 위치 설정
        this.setInitialPosition();

        // 이벤트 리스너 등록
        this.addEventListeners();

        // 네비게이션 활성화 상태 업데이트
        this.updateNavigation();
    }

    createWrapper() {
        // 이미 wrapper가 있으면 스킵
        if (this.mainContainer) return;

        // body의 모든 section을 감싸는 wrapper 생성
        const wrapper = document.createElement('div');
        wrapper.id = 'fullpage-wrapper';
        wrapper.className = 'fullpage-wrapper';

        // 모든 섹션을 wrapper로 이동
        this.sections.forEach(section => {
            wrapper.appendChild(section);
        });

        // navbar 다음에 wrapper 추가
        const navbar = document.querySelector('.navbar');
        if (navbar && navbar.nextSibling) {
            navbar.parentNode.insertBefore(wrapper, navbar.nextSibling);
        } else {
            document.body.appendChild(wrapper);
        }

        this.mainContainer = wrapper;
    }

    setInitialPosition() {
        // 페이지 로드 시 첫 번째 섹션으로 이동
        this.currentIndex = 0;
        this.applyTransform(0, false);
    }

    addEventListeners() {
        // 마우스 휠 이벤트
        window.addEventListener('wheel', (e) => this.handleWheel(e), { passive: false });

        // 터치 이벤트 (모바일)
        window.addEventListener('touchstart', (e) => this.handleTouchStart(e), { passive: true });
        window.addEventListener('touchend', (e) => this.handleTouchEnd(e), { passive: true });

        // 키보드 이벤트
        window.addEventListener('keydown', (e) => this.handleKeyboard(e));

        // 네비게이션 링크 클릭 이벤트 오버라이드
        this.overrideNavigation();
    }

    handleWheel(e) {
        if (this.isScrolling) {
            e.preventDefault();
            return;
        }

        e.preventDefault();

        const delta = e.deltaY;

        if (delta > 0) {
            // 아래로 스크롤
            this.moveToSection(this.currentIndex + 1);
        } else {
            // 위로 스크롤
            this.moveToSection(this.currentIndex - 1);
        }
    }

    handleTouchStart(e) {
        this.touchStartY = e.touches[0].clientY;
    }

    handleTouchEnd(e) {
        if (this.isScrolling) return;

        this.touchEndY = e.changedTouches[0].clientY;
        const deltaY = this.touchStartY - this.touchEndY;

        // 최소 스와이프 거리 체크 (50px)
        if (Math.abs(deltaY) < 50) return;

        if (deltaY > 0) {
            // 아래로 스와이프 (다음 섹션)
            this.moveToSection(this.currentIndex + 1);
        } else {
            // 위로 스와이프 (이전 섹션)
            this.moveToSection(this.currentIndex - 1);
        }
    }

    handleKeyboard(e) {
        if (this.isScrolling) return;

        switch(e.key) {
            case 'ArrowDown':
            case 'PageDown':
                e.preventDefault();
                this.moveToSection(this.currentIndex + 1);
                break;
            case 'ArrowUp':
            case 'PageUp':
                e.preventDefault();
                this.moveToSection(this.currentIndex - 1);
                break;
            case 'Home':
                e.preventDefault();
                this.moveToSection(0);
                break;
            case 'End':
                e.preventDefault();
                this.moveToSection(this.sections.length - 1);
                break;
        }
    }

    moveToSection(targetIndex) {
        // 범위 체크
        if (targetIndex < 0 || targetIndex >= this.sections.length) {
            return;
        }

        // 이미 해당 섹션에 있으면 무시
        if (targetIndex === this.currentIndex) {
            return;
        }

        // 스크롤 잠금
        this.isScrolling = true;

        // 현재 인덱스 업데이트
        this.currentIndex = targetIndex;

        // Transform 적용하여 실제 화면 이동
        this.applyTransform(targetIndex, true);

        // 네비게이션 업데이트 (화면 이동과 동시에 실행)
        this.updateNavigation();

        // 스크롤 잠금 해제
        setTimeout(() => {
            this.isScrolling = false;
        }, this.scrollDelay);
    }

    applyTransform(index, animate = true) {
        // 이동할 Y 위치 계산 (index * -100vh)
        const translateY = index * -100;

        // 애니메이션 클래스 제어
        if (animate) {
            this.mainContainer.classList.add('transitioning');
        } else {
            this.mainContainer.classList.remove('transitioning');
        }

        // Transform 적용
        this.mainContainer.style.transform = `translateY(${translateY}vh)`;

        // 애니메이션 완료 후 클래스 제거
        if (animate) {
            setTimeout(() => {
                this.mainContainer.classList.remove('transitioning');
            }, 800); // transition duration과 일치
        }
    }

    updateNavigation() {
        const navLinks = document.querySelectorAll('.nav-link, .footer-nav-link');
        const currentSection = this.sections[this.currentIndex];
        const currentId = currentSection.getAttribute('id');

        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href === '#' + currentId) {
                link.classList.add('active');
            }
        });
    }

    overrideNavigation() {
        const navLinks = document.querySelectorAll('.nav-link, .footer-nav-link');

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();

                if (this.isScrolling) return;

                const targetId = link.getAttribute('href').substring(1);
                const targetIndex = Array.from(this.sections).findIndex(
                    section => section.getAttribute('id') === targetId
                );

                if (targetIndex !== -1) {
                    // 모바일 메뉴 닫기
                    const navMenu = document.querySelector('.nav-menu');
                    const navToggle = document.querySelector('.nav-toggle');
                    if (navMenu) navMenu.classList.remove('active');
                    if (navToggle) navToggle.classList.remove('active');

                    // 섹션 이동
                    this.moveToSection(targetIndex);
                }
            }, true); // 캡처 단계에서 먼저 처리
        });
    }

    // 현재 섹션 인덱스 반환 (외부에서 사용 가능)
    getCurrentIndex() {
        return this.currentIndex;
    }

    // 특정 섹션으로 이동 (외부에서 사용 가능)
    goToSection(index) {
        this.moveToSection(index);
    }
}

// 풀페이지 스크롤 인스턴스 초기화
let fullpageScrollInstance = null;

function initFullpageScroll() {
    fullpageScrollInstance = new FullpageScroll();
}

// 전역으로 내보내기
window.initFullpageScroll = initFullpageScroll;
window.getFullpageScroll = () => fullpageScrollInstance;
