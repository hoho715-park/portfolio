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
    detail:
      "careEYE는 실시간 행동 감지를 통해 낙상 위험을 감지하고 보호자에게 알림을 제공하는 실버 케어 서비스입니다.",
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
        page.innerHTML += `
          <div class="project-card" data-id="${project.id}">
            <img src="${project.image}" alt="${project.title}">
            <div class="project-body">
              <h3>${project.title}</h3>
              <p>${project.description}</p>
              <div class="project-tags">
                ${project.tech.map((t) => `<span>${t}</span>`).join("")}
              </div>
              <div class="project-actions">
                ${project.hasAward ? `<button class="btn-sub">상장보기</button>` : ""}
                ${project.hasPaper ? `<button class="btn-sub">논문보기</button>` : ""}
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
