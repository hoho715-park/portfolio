/* ===================================
   Hero Logos JS - 메인 하단 로고 마키(관리 사이트 · 프로젝트)
   =================================== */

/**
 * 로고 목록 — 여기만 수정하면 됨
 * - type: "site"(운영·관리 중인 사이트) | "project"(진행한 프로젝트)
 * - url: 있으면 클릭 시 새 탭으로 이동
 * - logo: 이미지 경로. 비워두면 이니셜(mono) + color 로 임시 아이콘 표시
 */
const heroLogosData = [
  { name: "MusikOnsemiro", type: "site", url: "https://musikonsemiro.com/", logo: "", mono: "M", color: "#f472b6" },
  { name: "홍익대 소프트웨어융합학과", type: "site", url: "https://software.hongik.ac.kr/home/", logo: "", mono: "SW", color: "#3b82f6" },
  { name: "메타버스 아카데미", type: "site", url: "https://metaverse.hongik.ac.kr/", logo: "", mono: "MA", color: "#8b5cf6" },
  { name: "N.O.D.E", type: "site", url: "http://nodefolio.co.kr/", logo: "", mono: "N", color: "#22c55e" },
  { name: "서울대 이차전지연구소", type: "site", url: "", logo: "", mono: "SNU", color: "#0ea5e9" },
  { name: "(주)D-1", type: "site", url: "", logo: "", mono: "D1", color: "#f97316" },
  { name: "IEUM", type: "project", url: "", logo: "", mono: "IE", color: "#a78bfa" },
  { name: "Guider", type: "project", url: "", logo: "", mono: "G", color: "#ec4899" },
  { name: "RE:FACTORY", type: "project", url: "", logo: "", mono: "RF", color: "#38bdf8" },
  { name: "무색무광", type: "project", url: "", logo: "", mono: "無", color: "#94a3b8" },
  { name: "careEYE", type: "project", url: "", logo: "", mono: "CE", color: "#14b8a6" },
];

/** 로고 1개의 HTML 생성 */
function renderHeroLogoItem(item) {
  const icon = item.logo
    ? `<img class="hero-logo-img" src="${item.logo}" alt="${item.name}">`
    : `<span class="hero-logo-mono" style="--logo-color: ${item.color}">${item.mono}</span>`;

  const tag =
    item.type === "site"
      ? `<span class="hero-logo-tag tag-site"><i></i>운영중</span>`
      : `<span class="hero-logo-tag tag-project">Project</span>`;

  const inner = `${icon}<span class="hero-logo-name">${item.name}</span>${tag}`;

  return item.url
    ? `<a class="hero-logo-item" href="${item.url}" target="_blank" rel="noopener noreferrer">${inner}</a>`
    : `<div class="hero-logo-item">${inner}</div>`;
}

/**
 * 로고 마키 초기화 — 목록을 2번 이어 붙여 끊김 없이 무한 스크롤
 */
function initHeroLogos() {
  const track = document.querySelector(".hero-logos-track");
  if (!track) return;

  const items = heroLogosData.map(renderHeroLogoItem).join("");
  track.innerHTML = items + items;

  // 두 번째 묶음은 스크린리더·키보드 포커스에서 제외
  const half = heroLogosData.length;
  Array.from(track.children)
    .slice(half)
    .forEach((el) => {
      el.setAttribute("aria-hidden", "true");
      el.setAttribute("tabindex", "-1");
    });
}

window.initHeroLogos = initHeroLogos;
