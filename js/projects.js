document.addEventListener("DOMContentLoaded", () => {
  const data = [
    {
      title: "AI Chatbot",
      desc: "자연어 처리 챗봇",
      tech: ["Python"],
      img: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72",
    },
    {
      title: "CI/CD System",
      desc: "자동 배포 파이프라인",
      tech: ["Docker", "AWS"],
      img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    },
    {
      title: "Portfolio",
      desc: "개인 포트폴리오",
      tech: ["HTML", "CSS"],
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    },
    {
      title: "E-Commerce",
      desc: "이커머스 플랫폼",
      tech: ["React"],
      img: "https://images.unsplash.com/photo-1515169067865-5387ec356754",
    },
    {
      title: "Task App",
      desc: "업무 관리 앱",
      tech: ["Vue"],
      img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
    },
    {
      title: "Dashboard",
      desc: "실시간 대시보드",
      tech: ["WebSocket"],
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    },
    {
      title: "Blog",
      desc: "기술 블로그",
      tech: ["Next.js"],
      img: "https://images.unsplash.com/photo-1504805572947-34fad45aed93",
    },
    {
      title: "API Server",
      desc: "REST API 서버",
      tech: ["Spring"],
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    },
  ];

  const track = document.querySelector(".projects-track");
  const prev = document.querySelector(".projects-nav.prev");
  const next = document.querySelector(".projects-nav.next");
  const current = document.querySelector(".projects-indicator .current");
  const total = document.querySelector(".projects-indicator .total");

  const perPage = 3;
  const pages = Math.ceil(data.length / perPage);
  let page = 0;

  total.textContent = pages;

  for (let i = 0; i < pages; i++) {
    const pageEl = document.createElement("div");
    pageEl.className = "project-page";

    data.slice(i * perPage, i * perPage + perPage).forEach((p) => {
      pageEl.innerHTML += `
        <div class="project-card">
          <img src="${p.img}" />
          <div class="project-body">
            <h3>${p.title}</h3>
            <p>${p.desc}</p>
            <div class="project-tags">
              ${p.tech.map((t) => `<span>${t}</span>`).join("")}
            </div>
          </div>
        </div>
      `;
    });

    track.appendChild(pageEl);
  }

  function update() {
    track.style.transform = `translateX(-${page * 100}%)`;
    current.textContent = page + 1;
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
});
