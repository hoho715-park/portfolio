/* ===================================
   Navigation JS - 네비게이션 관련 로직
   =================================== */

/**
 * 네비게이션 초기화
 */
function initNavbar() {
    const navbar = document.querySelector('.navbar');

    // 스크롤 이벤트 핸들러 (풀페이지 스크롤이 활성화된 경우 내비게이션 업데이트는 fullpage-scroll.js에서 처리)
    window.addEventListener('scroll', function() {
        // 스크롤 시 네비게이션 스타일 변경
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 네비게이션 링크 클릭 이벤트는 fullpage-scroll.js에서 처리
}

/**
 * 모바일 메뉴 초기화
 */
function initMobileMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    // 토글 버튼 클릭
    navToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // 외부 클릭 시 메뉴 닫기
    document.addEventListener('click', function(e) {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// 전역으로 내보내기
window.initNavbar = initNavbar;
window.initMobileMenu = initMobileMenu;