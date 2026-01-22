/* ===================================
   Skills JS - Category Filter
   =================================== */

function initSkillsFilter() {
  const filterButtons = document.querySelectorAll(".filter-btn:not(.skills-level-btn)");
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

  // Skills Level 버튼 이벤트
  const skillsLevelBtn = document.getElementById("skills-level-btn");
  if (skillsLevelBtn) {
    skillsLevelBtn.addEventListener("click", () => {
      openSkillsLevelModal();
    });
  }
}

/* ===================================
   Skills Level Modal
   =================================== */

const skillsData = {
  frontend: [
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg",
      desc: "HTML을 활용해 웹 페이지의 구조를 설계하고 콘텐츠를 마크업할 수 있습니다.",
      level: 80
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg",
      desc: "CSS를 활용해 웹 페이지의 레이아웃과 디자인, 반응형 UI를 구현할 수 있습니다.",
      level: 60
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      desc: "JavaScript를 활용해 사용자 인터랙션과 동적인 웹 기능을 구현할 수 있습니다.",
      level: 80
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      desc: "React를 활용해 컴포넌트 기반의 유지보수하기 쉬운 프론트엔드 애플리케이션을 개발할 수 있습니다.",
      level: 90
    },
    {
      name: "Vite",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
      desc: "Vite를 활용해 빠른 개발 환경을 구성하고 프론트엔드 프로젝트를 효율적으로 빌드할 수 있습니다.",
      level: 90
    }
  ],
  backend: [
    {
      name: "Spring Boot",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
      desc: "Spring Boot를 활용해 REST API 서버 및 백엔드 애플리케이션을 빠르게 구축할 수 있습니다.",
      level: 90
    },
    {
      name: "PHP",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
      desc: "PHP를 활용해 서버 사이드 로직을 구현하고 동적인 웹 서비스를 개발할 수 있습니다.",
      level: 90
    },
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
      desc: "Java를 활용해 객체지향 기반의 안정적인 백엔드 로직과 서버 프로그램을 개발할 수 있습니다.",
      level: 60
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      desc: "Python의 기본 문법을 이해하고 있으며, 간단한 스크립트 작성 및 코드 해석이 가능합니다.",
      level: 30
    }
  ],
  cms: [
    {
      name: "WordPress",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg",
      desc: "WordPress를 활용해 웹사이트를 빠르게 구축하고 콘텐츠 관리 시스템(CMS)을 운영할 수 있습니다.",
      level: 50
    }
  ],
  etc: [
    {
      name: "Notion",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/notion/notion-original.svg",
      desc: "Notion을 활용해 일정을 공유하고 문서 정리 및 협업을 효율적으로 진행할 수 있습니다.",
      level: 70
    },
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
      desc: "GitHub를 활용해 소스 코드를 관리하고 협업 및 버전 관리를 할 수 있습니다.",
      level: 80
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      desc: "Git을 활용해 코드 변경 이력을 관리하고 협업 개발 환경을 구축할 수 있습니다.",
      level: 80
    },
    {
      name: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
      desc: "Figma를 활용해 UI/UX 디자인 시안을 제작하고 디자이너·개발자 간 협업을 할 수 있습니다.",
      level: 50
    },
    {
      name: "Photoshop",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg",
      desc: "Photoshop을 활용해 기본적인 이미지 편집 및 간단한 그래픽 작업을 할 수 있습니다.",
      level: 30
    },
    {
      name: "Postman",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
      desc: "Postman을 활용해 API 요청 테스트 및 서버 통신 검증을 할 수 있습니다.",
      level: 50
    }
  ]
};

const categoryNames = {
  frontend: "Frontend",
  backend: "Backend",
  cms: "CMS",
  etc: "ETC"
};

function initSkillsLevelModal() {
  // 모달 DOM 생성
  const modal = document.createElement("div");
  modal.id = "skills-level-modal";
  modal.className = "skills-level-modal";
  modal.innerHTML = `
    <div class="skills-level-content">
      <div class="skills-level-header">
        <h2 class="skills-level-title">
          <i class="fas fa-chart-bar"></i>
          Skills Level
        </h2>
        <button class="skills-level-close">&times;</button>
      </div>
      <div class="skills-level-body"></div>
    </div>
  `;
  document.body.appendChild(modal);

  const closeBtn = modal.querySelector(".skills-level-close");
  const body = modal.querySelector(".skills-level-body");

  // 카테고리별 스킬 렌더링
  Object.keys(skillsData).forEach(category => {
    const categorySection = document.createElement("div");
    categorySection.className = "skills-level-category";
    categorySection.innerHTML = `
      <h3 class="skills-level-category-title">${categoryNames[category]}</h3>
      <div class="skills-level-grid"></div>
    `;

    const grid = categorySection.querySelector(".skills-level-grid");

    skillsData[category].forEach(skill => {
      const item = document.createElement("div");
      item.className = "skill-level-item";
      item.innerHTML = `
        <div class="skill-level-top">
          <div class="skill-level-icon">
            <img src="${skill.icon}" alt="${skill.name}">
          </div>
          <div class="skill-level-info">
            <div class="skill-level-name">${skill.name}</div>
            <div class="skill-level-desc">${skill.desc}</div>
          </div>
        </div>
        <div class="skill-level-progress">
          <div class="skill-level-bar">
            <div class="skill-level-fill" data-level="${skill.level}"></div>
          </div>
          <span class="skill-level-percent">${skill.level}%</span>
        </div>
      `;
      grid.appendChild(item);
    });

    body.appendChild(categorySection);
  });

  // 닫기 이벤트
  closeBtn.addEventListener("click", () => closeSkillsLevelModal());
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeSkillsLevelModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("show")) {
      closeSkillsLevelModal();
    }
  });
}

function openSkillsLevelModal() {
  const modal = document.getElementById("skills-level-modal");
  if (!modal) return;

  modal.classList.add("show");

  // 게이지바 애니메이션
  setTimeout(() => {
    const fills = modal.querySelectorAll(".skill-level-fill");
    fills.forEach(fill => {
      const level = fill.dataset.level;
      fill.style.width = level + "%";
    });
  }, 100);
}

function closeSkillsLevelModal() {
  const modal = document.getElementById("skills-level-modal");
  if (!modal) return;

  modal.classList.remove("show");

  // 게이지바 리셋
  const fills = modal.querySelectorAll(".skill-level-fill");
  fills.forEach(fill => {
    fill.style.width = "0";
  });
}

// 전역 초기화
window.initSkillsFilter = initSkillsFilter;
window.initSkillsLevelModal = initSkillsLevelModal;
window.openSkillsLevelModal = openSkillsLevelModal;
window.closeSkillsLevelModal = closeSkillsLevelModal;

// DOM 로드 후 실행
document.addEventListener("DOMContentLoaded", () => {
  initSkillsFilter();
  initSkillsLevelModal();
});
