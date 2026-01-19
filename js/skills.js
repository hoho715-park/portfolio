/* ===================================
   Skills JS - Category Filter
   =================================== */

function initSkillsFilter() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const skillItems = document.querySelectorAll(".skill-item");

  if (!filterButtons.length || !skillItems.length) return;

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;

      // 버튼 active 처리
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      // 스킬 필터링
      skillItems.forEach((item) => {
        const category = item.dataset.category;

        if (filter === "all" || category === filter) {
          item.classList.remove("inactive");
        } else {
          item.classList.add("inactive");
        }
      });
    });
  });
}

// 전역 초기화
window.initSkillsFilter = initSkillsFilter;

// DOM 로드 후 실행
document.addEventListener("DOMContentLoaded", () => {
  initSkillsFilter();
});
