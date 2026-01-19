/* ===================================
   Navigation JS - 네비게이션 관련 로직
   =================================== */

/**
 * 네비게이션 초기화
 */
function initNavbar() {
  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelectorAll(".nav-link, .footer-nav-link");

  // 스크롤 시 네비게이션 스타일 변경
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // 메뉴 클릭 시 정확한 위치로 스크롤
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      if (!href || !href.startsWith("#")) return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();

      const navbarHeight = navbar.offsetHeight;
      const targetPosition =
        target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });

      // 모바일 메뉴 닫기
      const navMenu = document.querySelector(".nav-menu");
      const navToggle = document.querySelector(".nav-toggle");
      if (navMenu) navMenu.classList.remove("active");
      if (navToggle) navToggle.classList.remove("active");
    });
  });
}

/**
 * 모바일 메뉴 초기화
 */
function initMobileMenu() {
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (!navToggle || !navMenu) return;

  // 토글 버튼 클릭
  navToggle.addEventListener("click", function () {
    this.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // 외부 클릭 시 메뉴 닫기
  document.addEventListener("click", function (e) {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
      navToggle.classList.remove("active");
      navMenu.classList.remove("active");
    }
  });
}

// 전역으로 내보내기
window.initNavbar = initNavbar;
window.initMobileMenu = initMobileMenu;
