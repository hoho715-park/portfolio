/* ===================================
   Main JS - 메인 초기화 스크립트
   =================================== */

/**
 * DOM 로드 완료 시 모든 모듈 초기화
 */
document.addEventListener('DOMContentLoaded', function() {
    // 풀페이지 스크롤 초기화 (가장 먼저)
    initFullpageScroll();

    // 네비게이션 초기화
    initNavbar();
    initMobileMenu();

    // 방문자 수 카운터 초기화
    initVisitorCounter();

    // 애니메이션 초기화
    initAllAnimations();

    // 모달 초기화
    initModal();

    // 히어로 섹션 효과
    initTypingEffect();
    initCodeRain();

    // 스킬 필터 초기화
    initSkillsFilter();

    // 프로젝트 페이지네이션 초기화
    initProjects();

    // Contact Form 초기화
    initContactForm();

    // 콘솔 메시지
    printConsoleMessage();
});

/**
 * 콘솔 환영 메시지 출력
 */
function printConsoleMessage() {
    console.log('%c👋 안녕하세요!', 'font-size: 24px; font-weight: bold; color: #6366f1;');
    console.log('%c이 포트폴리오는 박성호가 제작했습니다.', 'font-size: 14px; color: #64748b;');
    console.log('%c연락처: andytjdgh@gmail.com', 'font-size: 12px; color: #94a3b8;');
}