const projects = [
  {
    title: "AI Chatbot",
    desc: "자연어 처리 챗봇",
    tech: ["Python"],
    award: true,
    paper: false,
  },
  {
    title: "E-Commerce",
    desc: "이커머스 플랫폼",
    tech: ["React", "Node"],
    award: true,
    paper: true,
  },
  {
    title: "Dashboard",
    desc: "실시간 데이터",
    tech: ["Spring"],
    award: false,
    paper: true,
  },
  {
    title: "CI/CD",
    desc: "자동 배포",
    tech: ["Docker", "AWS"],
    award: false,
    paper: false,
  },
  {
    title: "Portfolio",
    desc: "개인 사이트",
    tech: ["HTML", "CSS"],
    award: false,
    paper: false,
  },
  {
    title: "Task App",
    desc: "업무 관리",
    tech: ["Vue"],
    award: true,
    paper: false,
  },
  {
    title: "Blog",
    desc: "개발 블로그",
    tech: ["Next"],
    award: false,
    paper: false,
  },
  {
    title: "Monitoring",
    desc: "서버 모니터링",
    tech: ["Grafana"],
    award: false,
    paper: true,
  },
];

const track = document.querySelector(".projects-track");
const prev = document.querySelector(".slider-btn.prev");
const next = document.querySelector(".slider-btn.next");
const cur = document.querySelector(".current");
const total = document.querySelector(".total");

let page = 0;
const perPage = 3;
const pages = Math.ceil(projects.length / perPage);

total.textContent = pages;

projects.forEach((p) => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `
    <div class="project-thumb">
      <img src="https://picsum.photos/400/300?random=${Math.random()}">
    </div>
    <div class="project-body">
      <div class="project-title">${p.title}</div>
      <div class="project-desc">${p.desc}</div>
      <div class="project-tech">
        ${p.tech.map((t) => `<span>${t}</span>`).join("")}
      </div>
      <div class="project-actions">
        ${p.award ? `<button>수상보기</button>` : ``}
        ${p.paper ? `<button>논문보기</button>` : ``}
      </div>
    </div>
  `;
  card.onclick = () => openModal(p);
  track.appendChild(card);
});

function update() {
  const width = track.parentElement.offsetWidth;
  track.style.transform = `translateX(${-page * width}px)`;
  cur.textContent = page + 1;
  prev.classList.toggle("hidden", page === 0);
  next.classList.toggle("hidden", page === pages - 1);
}

prev.onclick = () => {
  page--;
  update();
};
next.onclick = () => {
  page++;
  update();
};
update();

/* MODAL */
const modal = document.getElementById("projectModal");
function openModal(p) {
  modal.classList.add("active");
  document.getElementById("modalTitle").textContent = p.title;
  document.getElementById("modalDesc").textContent = p.desc;
}
document.querySelector(".modal-close").onclick = () =>
  modal.classList.remove("active");
document.querySelector(".modal-overlay").onclick = () =>
  modal.classList.remove("active");
