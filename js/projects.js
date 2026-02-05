/* ===================================
   Projects JS
   =================================== */

const projectsData = [
  {
    id: 1,
    title: "IEUM",
    description:
      "손바닥 6지점에서 흐르는 전류를 측정해 장기 상태를 분석하고, 결과를 바탕으로 개인의 사상체질을 알려주며 개인 맞춤형 추천을 제공하는 웹 애플리케이션",
    tech: ["Spring", "React", "AWS"],
    image: "images/ieum.png",
    hasPaper: true,
    hasAward: true,
    hasCertificate: true,
    status: null,
    detail:
      "IEUM은 바이오 신호 기반 분석을 통해 개인의 체질과 건강 상태를 해석하고 맞춤형 솔루션을 제공하는 헬스케어 웹 서비스입니다.",
  },
  {
    id: 2,
    title: "N.O.D.E",
    subtitle: "Network Of Developer Evolution",
    description:
      "4명의 동기들이 함께 기획·디자인·개발 전 과정을 직접 수행한 팀 포트폴리오 웹사이트 프로젝트",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "WordPress"],
    image: "images/node.png",
    hasPaper: false,
    hasAward: true,
    hasCertificate: true,
    status: null,
    hasDetailModal: true,
    detailData: {
      highlight: "대학교 자기주도학습 개발 동아리에서 실제 웹 개발, 협업, 배포를 경험하며 만든 팀 포트폴리오 웹사이트 프로젝트",
      techCategories: [
        {
          category: "Frontend",
          icon: "fab fa-react",
          items: ["HTML5", "CSS3", "JavaScript", "React", "React Router"]
        },
        {
          category: "Backend",
          icon: "fab fa-node-js",
          items: ["Node.js", "Express.js", "RESTful API", "JWT 기반 인증"]
        },
        {
          category: "Database",
          icon: "fas fa-database",
          items: ["MySQL", "MongoDB", "ORM: Prisma / Mongoose"]
        },
        {
          category: "Deployment & Tools",
          icon: "fas fa-tools",
          items: ["Git & GitHub", "Netlify", "Vercel", "Firebase", "GitHub Pages", "Figma", "Google Lighthouse", "Postman", "Notion"]
        }
      ],
      overview: [
        "N.O.D.E는 대학교 자기주도학습 동아리에서 실전 웹 개발 경험을 쌓기 위해 진행한 팀 기반 웹 포트폴리오 프로젝트입니다.",
        "단순한 정적 페이지를 넘어, 실제 개발 워크플로우를 반영한 완전한 구조의 배포 가능한 웹 서비스를 구축하는 것이 목표였습니다."
      ],
      details: [
        {
          title: "개발 범위",
          icon: "fas fa-project-diagram",
          content: "기획, UI/UX 디자인, 프론트엔드 및 백엔드 구현, 데이터베이스 연동, 배포, 최적화까지 웹 개발의 전체 라이프사이클을 다루었습니다."
        },
        {
          title: "Frontend 구현",
          icon: "fab fa-react",
          content: "React를 활용한 컴포넌트 기반 아키텍처로 개발하여, 네비게이션 바, 프로젝트 카드, 반응형 레이아웃 등 재사용 가능한 UI 컴포넌트를 구현했습니다. SPA(Single Page Application) 방식의 라우팅으로 페이지 전체 리로드 없이 부드러운 페이지 전환을 구현했습니다."
        },
        {
          title: "반응형 디자인",
          icon: "fas fa-mobile-alt",
          content: "데스크톱, 태블릿, 모바일 기기에서 원활하게 작동하도록 반응형 웹 디자인에 특별히 신경을 썼습니다."
        },
        {
          title: "Backend 구현",
          icon: "fab fa-node-js",
          content: "Node.js와 Express를 사용해 RESTful API를 구축하고, JWT를 활용한 인증을 구현했습니다. MySQL 또는 MongoDB로 데이터를 저장·관리하며, Prisma나 Mongoose 같은 ORM 도구를 사용해 유지보수성과 확장성을 높였습니다."
        },
        {
          title: "배포 및 최적화",
          icon: "fas fa-rocket",
          content: "Netlify, Vercel, Firebase 등의 플랫폼을 활용해 배포하고, Google Lighthouse를 통해 성능 최적화를 진행했습니다. 여러 차례의 사용자 테스트와 피드백을 통해 UI 디테일, 접근성, 성능을 지속적으로 개선했습니다."
        }
      ],
      outcome: "이 프로젝트를 통해 실제 배포 환경 경험, GitHub을 활용한 팀 협업, 프로덕션 환경에서의 실전 문제 해결 능력을 쌓을 수 있었습니다."
    },
    detail:
      "N.O.D.E는 팀 단위 협업을 통해 완성한 포트폴리오 사이트로, 기획부터 배포까지 전 과정을 경험한 프로젝트입니다.",
  },
  {
    id: 3,
    title: "무색무광",
    subtitle: "無色無光",
    description:
      "신분증과 화이트보드의 빛 반사를 제거해 문자·이미지 인식률을 향상시키는 영상 처리 기반 프로젝트",
    tech: ["Python", "OpenCV", "PaddleOCR", "FastAPI", "React"],
    image: "images/opencv.png",
    hasPaper: false,
    hasAward: true,
    hasCertificate: true,
    status: null,
    hasDetailModal: true,
    detailData: {
      highlight: "OpenCV 멀티프레임 합성을 활용해 문서의 빛 반사(Glare)를 제거하고, PaddleOCR 튜닝을 통해 텍스트 인식률을 극대화한 웹 기반 문서 스캔 솔루션",
      overview: [
        "유광 용지, 신분증, 화이트보드 촬영 시 발생하는 조명 반사(Glare)로 인한 OCR 인식 저하 문제를 해결하기 위한 지능형 문서 스캔 웹 솔루션",
        "단일 프레임 보정의 한계를 극복하기 위해 멀티프레임(Multi-frame) 합성 기반 이미지 처리 파이프라인을 설계"
      ],
      role: {
        title: "Full Stack Developer & AI Engineer",
        description: "이미지 처리 파이프라인 설계부터 OCR 튜닝, 웹 서비스 연동까지 전반 담당"
      },
      techImplementation: [
        {
          title: "Computer Vision Pipeline",
          icon: "fas fa-eye",
          items: [
            "OpenCV 기반 멀티프레임 합성 처리",
            "반사광 영역 자동 마스킹 및 복원(Inpainting)",
            "문서 영역 검출 후 정투영(Perspective Warp) 처리"
          ]
        },
        {
          title: "OCR 최적화",
          icon: "fas fa-font",
          items: [
            "PaddleOCR(Server) 도입",
            "한글/영문 혼용 문서 기준 Detection / Recognition 파라미터 튜닝",
            "저해상도 이미지 인식률 개선"
          ]
        },
        {
          title: "Web Service",
          icon: "fas fa-globe",
          items: [
            "FastAPI 기반 비동기 이미지 처리 API",
            "React Drag & Drop UI",
            "처리 전 / 후 이미지 비교 UX 제공"
          ]
        }
      ],
      troubleShooting: [
        {
          title: "반사광으로 인한 OCR 실패",
          problem: "단일 이미지로는 복원이 불가능한 반사 영역 발생",
          solution: "다중 프레임에서 반사 없는 픽셀을 선택적으로 합성",
          result: "반사광 제거 성공률 대폭 향상, OCR 실패율 현저히 감소"
        },
        {
          title: "모바일 OCR 모델 정확도 한계",
          problem: "경량 모델 사용 시 한글·손글씨 인식 품질 저하",
          solution: "Server OCR 모델로 전환, FastAPI 비동기 처리로 성능 병목 최소화",
          result: "실제 서비스 가능한 인식 정확도 확보"
        }
      ]
    },
    detail:
      "무색무광은 영상 처리 기술을 활용하여 빛 반사를 제거하고 인식률을 향상시키는 프로젝트입니다.",
  },
  {
    id: 4,
    title: "careEYE",
    description:
      "노인의 움직임을 실시간 모니터링해 낙상을 빠르게 감지하고 알림으로 알려주는 웹 애플리케이션",
    tech: ["HTML", "CSS", "JavaScript", "Python"],
    image: "images/careeye.png",
    hasPaper: false,
    hasAward: false,
    hasCertificate: false,
    status: null,
    detail:
      "careEYE는 실시간 행동 감지를 통해 낙상 위험을 감지하고 보호자에게 알림을 제공하는 실버 케어 서비스입니다.",
  },
  {
    id: 5,
    title: "홍천 가뭄 멈춰!!",
    description:
      "데이터사이언스 수업에서 홍천 기상 데이터를 기반으로 한 달 뒤 홍천 지역의 가뭄 가능성을 예측해 제공하는 웹 서비스",
    tech: ["R"],
    image: "images/datascience.png",
    hasPaper: false,
    hasAward: false,
    hasCertificate: false,
    status: null,
    detail:
      "홍천 가뭄 예측 프로젝트는 기상 데이터 분석을 통해 가뭄 가능성을 예측하는 서비스입니다.",
  },
  {
    id: 6,
    title: "Code Visualization",
    description:
      "코드를 다양한 다이어그램으로 시각화해 구조를 분석하고, 이를 바탕으로 코드 품질을 정량적으로 계산해주는 웹 애플리케이션",
    tech: ["React", "JS"],
    image: "images/codevisual.png",
    hasPaper: false,
    hasAward: false,
    hasCertificate: false,
    status: "진행중",
    detail:
      "Code Visualization은 코드 구조를 시각화하고 품질을 분석하는 개발 도구입니다.",
  },
  {
    id: 7,
    title: "개인 포트폴리오 사이트 제작",
    description:
      "프로젝트와 경력을 정리한 반응형 웹 포트폴리오로, 직관적인 UI를 적용하고 직접 구매한 개인 도메인과 연결했습니다.",
    tech: ["HTML", "CSS", "JS", "JSON"],
    image: "images/portfolio.png",
    hasPaper: false,
    hasAward: false,
    hasCertificate: false,
    status: "진행중",
    detail:
      "개인 포트폴리오 사이트는 프로젝트와 경력을 정리한 반응형 웹 포트폴리오입니다.",
  },
  {
    id: 8,
    title: "MusikOnsemiro",
    description:
      "성악을 사랑하는 사람들이 모여 동호회를 소개하고 활동을 홍보하기 위해 제작한 성악 동호회 홍보 웹사이트 제작",
    tech: ["HTML", "CSS", "JS", "PHP", "WordPress"],
    image: "images/musikonsemiro.png",
    hasPaper: false,
    hasAward: false,
    hasCertificate: false,
    status: ["외주", "진행중"],
    detail: "MusikOnsemiro는 성악 동호회를 위한 홍보 웹사이트입니다.",
  },
  {
    id: 9,
    title: "서울대학교 이차전지연구소 플러그인 개발",
    description:
      "서울대학교 이차전지연구소를 위한 맞춤형 워드프레스 플러그인 개발 프로젝트",
    tech: ["JS", "PHP", "WordPress"],
    image: "images/seoul.png",
    hasPaper: false,
    hasAward: false,
    hasCertificate: false,
    status: ["외주", "진행중"],
    detail:
      "서울대학교 이차전지연구소를 위한 맞춤형 플러그인 개발 프로젝트입니다.",
  },
  {
    id: 10,
    title: "(주)D-1 플러그인 개발",
    description:
      "d-1 회사의 회원관리 DB를 구축·보완하고, 자료 공유와 관리를 위한 자료실 기능을 함께 구현한 웹 서비스",
    tech: ["JS", "PHP", "WordPress"],
    image: "images/d1.png",
    hasPaper: false,
    hasAward: false,
    hasCertificate: false,
    status: ["외주", "진행중"],
    detail: "(주)D-1을 위한 회원관리 및 자료실 플러그인 개발 프로젝트입니다.",
  },
];

const track = document.querySelector(".projects-track");
const indicator = document.querySelector(".projects-indicator");
const prevBtn = document.querySelector(".projects-nav.prev");
const nextBtn = document.querySelector(".projects-nav.next");

let currentPage = 0;
const cardsPerPage = 3;
const totalPages = Math.ceil(projectsData.length / cardsPerPage);

/* 모바일 슬라이더 상태 */
let isMobileMode = false;
let mobileCurrentIndex = 0;
let mobileContainer = null;
let mobileIndicator = null;
const MOBILE_BREAKPOINT = 768;

/* 카드 렌더링 */
function renderProjects() {
  track.innerHTML = "";

  for (let i = 0; i < totalPages; i++) {
    const page = document.createElement("div");
    page.className = "project-page";

    projectsData
      .slice(i * cardsPerPage, (i + 1) * cardsPerPage)
      .forEach((project) => {
        let statusBadges = "";
        if (project.status) {
          if (Array.isArray(project.status)) {
            statusBadges = project.status
              .map(
                (status, index) =>
                  `<div class="project-status ${status === "외주" ? "status-outsource" : "status-progress"}" style="top: ${12 + index * 36}px;">${status}</div>`,
              )
              .join("");
          } else {
            statusBadges = `<div class="project-status ${project.status === "외주" ? "status-outsource" : "status-progress"}">${project.status}</div>`;
          }
        }

        page.innerHTML += `
          <div class="project-card" data-id="${project.id}">
            <div class="project-image-wrapper">
              <img src="${project.image}" alt="${project.title}">
              ${statusBadges}
            </div>
            <div class="project-body">
              <h3>${project.title}</h3>
              <p>${project.description}</p>
              <div class="project-tags">
                ${project.tech.map((t) => `<span>${t}</span>`).join("")}
              </div>
              <div class="project-actions">
                ${
                  project.hasAward
                    ? `
                  <button class="btn-action btn-award" data-project-id="${project.id}" data-action="award">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <circle cx="12" cy="8" r="6"/>
                      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
                    </svg>
                    <span>상장보기</span>
                  </button>
                `
                    : ""
                }
                ${
                  project.hasPaper
                    ? `
                  <button class="btn-action btn-paper" data-project-id="${project.id}" data-action="paper">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                      <polyline points="10 9 9 9 8 9"/>
                    </svg>
                    <span>논문보기</span>
                  </button>
                `
                    : ""
                }
                ${
                  project.hasCertificate
                    ? `
                  <button class="btn-action btn-certificate" data-project-id="${project.id}" data-action="certificate">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                    </svg>
                    <span>수료증보기</span>
                  </button>
                `
                    : ""
                }
              </div>
            </div>
          </div>
        `;
      });

    track.appendChild(page);
  }

  updateUI();
}

/* UI 업데이트 (데스크톱) */
function updateUI() {
  if (isMobileMode) {
    updateMobileUI();
    return;
  }

  track.style.transform = `translateX(-${currentPage * 100}%)`;
  indicator.textContent = `${currentPage + 1} / ${totalPages}`;

  prevBtn.classList.toggle("hidden", currentPage === 0);
  nextBtn.classList.toggle("hidden", currentPage === totalPages - 1);
}

/* 모바일 UI 업데이트 */
function updateMobileUI() {
  if (!mobileContainer) return;

  mobileContainer.style.transform = `translateX(-${mobileCurrentIndex * 100}%)`;

  if (mobileIndicator) {
    mobileIndicator.innerHTML = `<span class="current">${mobileCurrentIndex + 1}</span> / ${projectsData.length}`;
  }

  prevBtn.classList.toggle("hidden", mobileCurrentIndex === 0);
  nextBtn.classList.toggle("hidden", mobileCurrentIndex === projectsData.length - 1);
}

/* 모바일 모드 렌더링 */
function renderMobileProjects() {
  track.innerHTML = "";
  track.classList.add("mobile-mode");

  mobileContainer = document.createElement("div");
  mobileContainer.className = "mobile-cards-container";

  projectsData.forEach((project) => {
    let statusBadges = "";
    if (project.status) {
      if (Array.isArray(project.status)) {
        statusBadges = project.status
          .map(
            (status, index) =>
              `<div class="project-status ${status === "외주" ? "status-outsource" : "status-progress"}" style="top: ${12 + index * 36}px;">${status}</div>`,
          )
          .join("");
      } else {
        statusBadges = `<div class="project-status ${project.status === "외주" ? "status-outsource" : "status-progress"}">${project.status}</div>`;
      }
    }

    const cardHTML = `
      <div class="project-card" data-id="${project.id}">
        <div class="project-image-wrapper">
          <img src="${project.image}" alt="${project.title}">
          ${statusBadges}
        </div>
        <div class="project-body">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="project-tags">
            ${project.tech.map((t) => `<span>${t}</span>`).join("")}
          </div>
          <div class="project-actions">
            ${
              project.hasAward
                ? `
              <button class="btn-action btn-award" data-project-id="${project.id}" data-action="award">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="8" r="6"/>
                  <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
                </svg>
                <span>상장보기</span>
              </button>
            `
                : ""
            }
            ${
              project.hasPaper
                ? `
              <button class="btn-action btn-paper" data-project-id="${project.id}" data-action="paper">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10 9 9 9 8 9"/>
                </svg>
                <span>논문보기</span>
              </button>
            `
                : ""
            }
            ${
              project.hasCertificate
                ? `
              <button class="btn-action btn-certificate" data-project-id="${project.id}" data-action="certificate">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
                <span>수료증보기</span>
              </button>
            `
                : ""
            }
          </div>
        </div>
      </div>
    `;

    mobileContainer.innerHTML += cardHTML;
  });

  track.appendChild(mobileContainer);

  // 모바일 인디케이터 생성
  createMobileIndicator();

  updateMobileUI();
}

/* 모바일 인디케이터 생성 */
function createMobileIndicator() {
  // 기존 인디케이터 숨기기
  if (indicator) {
    indicator.style.display = "none";
  }

  // 모바일 인디케이터가 없으면 생성
  mobileIndicator = document.querySelector(".mobile-indicator");
  if (!mobileIndicator) {
    mobileIndicator = document.createElement("div");
    mobileIndicator.className = "mobile-indicator";
    const projectsSection = document.querySelector(".projects-section");
    const projectsWrapper = document.querySelector(".projects-wrapper");
    if (projectsSection && projectsWrapper) {
      projectsWrapper.insertAdjacentElement("afterend", mobileIndicator);
    }
  }
  mobileIndicator.style.display = "block";
}

/* 데스크톱 모드로 복원 */
function restoreDesktopMode() {
  track.classList.remove("mobile-mode");

  // 모바일 인디케이터 숨기기
  if (mobileIndicator) {
    mobileIndicator.style.display = "none";
  }

  // 데스크톱 인디케이터 표시
  if (indicator) {
    indicator.style.display = "block";
  }

  mobileContainer = null;
  renderProjects();
}

/* 모드 체크 및 전환 */
function checkAndSwitchMode() {
  const wasMobile = isMobileMode;
  isMobileMode = window.innerWidth <= MOBILE_BREAKPOINT;

  if (isMobileMode !== wasMobile) {
    if (isMobileMode) {
      mobileCurrentIndex = 0;
      renderMobileProjects();
    } else {
      currentPage = 0;
      restoreDesktopMode();
    }
  }
}

/* 이벤트 */
prevBtn.addEventListener("click", () => {
  if (isMobileMode) {
    if (mobileCurrentIndex > 0) {
      mobileCurrentIndex--;
      updateMobileUI();
    }
  } else {
    if (currentPage > 0) {
      currentPage--;
      updateUI();
    }
  }
});

nextBtn.addEventListener("click", () => {
  if (isMobileMode) {
    if (mobileCurrentIndex < projectsData.length - 1) {
      mobileCurrentIndex++;
      updateMobileUI();
    }
  } else {
    if (currentPage < totalPages - 1) {
      currentPage++;
      updateUI();
    }
  }
});

/* 리사이즈 이벤트 */
let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(checkAndSwitchMode, 150);
});

/* 이미지 모달 준비 대기 */
function waitForImageModal(callback, maxAttempts = 50) {
  let attempts = 0;
  const checkInterval = setInterval(() => {
    attempts++;
    if (typeof window.openImageModal === 'function') {
      console.log("✅ window.openImageModal is ready!");
      clearInterval(checkInterval);
      callback();
    } else if (attempts >= maxAttempts) {
      console.error("❌ Timeout: window.openImageModal not found after", maxAttempts, "attempts");
      clearInterval(checkInterval);
    }
  }, 100);
}

/* 버튼 클릭 이벤트 핸들러 */
function setupButtonHandlers() {
  document.addEventListener("click", (e) => {
    const button = e.target.closest(".btn-action");

    // 버튼 클릭인 경우
    if (button) {
      e.preventDefault();
      e.stopPropagation();

      const projectId = parseInt(button.dataset.projectId);
      const action = button.dataset.action;

      console.log("🎯 Button clicked - Project ID:", projectId, "Action:", action);

      // IEUM 프로젝트(id: 1)
      if (projectId === 1) {
        if (action === "award") {
          console.log("📸 Opening award images...");
          window.openImageModal([
            "images/ieum_award_1.png",
            "images/ieum_award_2.png",
            "images/ieum_award_3.png",
            "images/ieum_award_4.png",
          ]);
        } else if (action === "certificate") {
          console.log("🎓 Opening certificate images...");
          window.openImageModal([
            "images/ieum_listen_1.png",
            "images/ieum_listen_2.png",
            "images/ieum_listen_3.png",
            "images/ieum_listen_4.png",
          ]);
        } else if (action === "paper") {
          console.log("📄 Opening paper PDFs...");
          window.openPDFModal([
            {
              title: "디지털 시대의 사용자 경험(UX) 개선을 위한 스큐어모피즘 기반 QSCC-II 웹 애플리케이션 연구",
              file: "pdfs/ieum_paper_1.pdf",
              isFirstAuthor: false
            },
            {
              title: "스트레스 기반 생체 전류 리듬 균형화 메커니즘",
              file: "pdfs/ieum_paper_2.pdf",
              isFirstAuthor: true
            }
          ]);
        }
      }

      // N.O.D.E 프로젝트(id: 2)
      if (projectId === 2) {
        if (action === "award") {
          console.log("📸 Opening award images...");
          window.openImageModal([
            "images/node_award_1.png",
          ]);
        } else if (action === "certificate") {
          console.log("🎓 Opening certificate images...");
          window.openImageModal([
            "images/node_listen_1.png",
          ]);
        }
      }

      // 무색무광 프로젝트(id: 3)
      if (projectId === 3) {
        if (action === "award") {
          console.log("📸 Opening award images...");
          window.openImageModal([
            "images/opencv_award_1.png",
          ]);
        } else if (action === "certificate") {
          console.log("🎓 Opening certificate images...");
          window.openImageModal([
            "images/opencv_listen_1.png",
          ]);
        }
      }

      return;
    }

    // 카드 클릭인 경우
    const card = e.target.closest(".project-card");
    if (card) {
      const project = projectsData.find((p) => p.id == card.dataset.id);
      if (project) {
        openProjectModal(project);
      }
    }
  });
}

/* 초기화 */
function init() {
  isMobileMode = window.innerWidth <= MOBILE_BREAKPOINT;

  if (isMobileMode) {
    renderMobileProjects();
  } else {
    renderProjects();
  }
}

init();

// 이미지 모달이 준비될 때까지 기다린 후 이벤트 핸들러 설정
waitForImageModal(setupButtonHandlers);
