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
    description:
      "4명의 동기들이 함께 기획·디자인·개발 전 과정을 직접 수행한 팀 포트폴리오 웹사이트 프로젝트",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "WordPress"],
    image: "images/node.png",
    hasPaper: false,
    hasAward: true,
    hasCertificate: false,
    status: null,
    detail:
      "N.O.D.E는 팀 단위 협업을 통해 완성한 포트폴리오 사이트로, 기획부터 배포까지 전 과정을 경험한 프로젝트입니다.",
  },
  {
    id: 3,
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
    id: 4,
    title: "무색무광",
    description:
      "신분증과 화이트보드의 빛 반사를 제거해 문자·이미지 인식률을 향상시키는 영상 처리 기반 프로젝트",
    tech: ["React", "NEXT.JS", "Python"],
    image: "images/opencv.png",
    hasPaper: false,
    hasAward: true,
    hasCertificate: true,
    status: null,
    detail:
      "무색무광은 영상 처리 기술을 활용하여 빛 반사를 제거하고 인식률을 향상시키는 프로젝트입니다.",
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
    title: "MusikOnsemiro",
    description:
      "성악을 사랑하는 사람들이 모여 동호회를 소개하고 활동을 홍보하기 위해 제작한 성악 동호회 홍보 웹사이트 제작",
    tech: ["HTML", "CSS", "JS", "PHP", "WordPress"],
    image: "images/musikonsemiro.png",
    hasPaper: false,
    hasAward: false,
    hasCertificate: false,
    status: ["외주", "진행중"],
    detail:
      "MusikOnsemiro는 성악 동호회를 위한 홍보 웹사이트입니다.",
  },
  {
    id: 8,
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
    id: 9,
    title: "(주)D-1 플러그인 개발",
    description:
      "d-1 회사의 회원관리 DB를 구축·보완하고, 자료 공유와 관리를 위한 자료실 기능을 함께 구현한 웹 서비스",
    tech: ["JS", "PHP", "WordPress"],
    image: "images/d1.png",
    hasPaper: false,
    hasAward: false,
    hasCertificate: false,
    status: ["외주", "진행중"],
    detail:
      "(주)D-1을 위한 회원관리 및 자료실 플러그인 개발 프로젝트입니다.",
  },
];

const track = document.querySelector(".projects-track");
const indicator = document.querySelector(".projects-indicator");
const prevBtn = document.querySelector(".projects-nav.prev");
const nextBtn = document.querySelector(".projects-nav.next");

let currentPage = 0;
const cardsPerPage = 3;
const totalPages = Math.ceil(projectsData.length / cardsPerPage);

/* 카드 렌더링 */
function renderProjects() {
  track.innerHTML = "";

  for (let i = 0; i < totalPages; i++) {
    const page = document.createElement("div");
    page.className = "project-page";

    projectsData
      .slice(i * cardsPerPage, (i + 1) * cardsPerPage)
      .forEach((project) => {
        let statusBadges = '';
        if (project.status) {
          if (Array.isArray(project.status)) {
            statusBadges = project.status.map((status, index) =>
              `<div class="project-status ${status === '외주' ? 'status-outsource' : 'status-progress'}" style="top: ${12 + (index * 36)}px;">${status}</div>`
            ).join('');
          } else {
            statusBadges = `<div class="project-status ${project.status === '외주' ? 'status-outsource' : 'status-progress'}">${project.status}</div>`;
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
                ${project.hasAward ? `
                  <button class="btn-action btn-award">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <circle cx="12" cy="8" r="6"/>
                      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
                    </svg>
                    <span>상장보기</span>
                  </button>
                ` : ""}
                ${project.hasPaper ? `
                  <button class="btn-action btn-paper">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                      <polyline points="10 9 9 9 8 9"/>
                    </svg>
                    <span>논문보기</span>
                  </button>
                ` : ""}
                ${project.hasCertificate ? `
                  <button class="btn-action btn-certificate">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                    </svg>
                    <span>수료증보기</span>
                  </button>
                ` : ""}
              </div>
            </div>
          </div>
        `;
      });

    track.appendChild(page);
  }

  updateUI();
}

/* UI 업데이트 */
function updateUI() {
  track.style.transform = `translateX(-${currentPage * 100}%)`;
  indicator.textContent = `${currentPage + 1} / ${totalPages}`;

  prevBtn.classList.toggle("hidden", currentPage === 0);
  nextBtn.classList.toggle("hidden", currentPage === totalPages - 1);
}

/* 이벤트 */
prevBtn.addEventListener("click", () => {
  if (currentPage > 0) {
    currentPage--;
    updateUI();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentPage < totalPages - 1) {
    currentPage++;
    updateUI();
  }
});

/* 카드 클릭 → 모달 */
document.addEventListener("click", (e) => {
  const card = e.target.closest(".project-card");
  if (!card) return;

  const project = projectsData.find((p) => p.id == card.dataset.id);
  openProjectModal(project);
});

/* 초기화 */
renderProjects();
