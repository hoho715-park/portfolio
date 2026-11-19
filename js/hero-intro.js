/* ===================================
   Hero Intro JS - 메인 진입 인트로 · 등장 연출 · 마우스 인터랙션
   =================================== */

const HERO_INTRO_DURATION = 1700; // 인트로 오버레이 총 시간(ms)
const SCRAMBLE_GLYPHS = "01<>/{}[]#$%&*=+アカサタナハマ";

/**
 * 히어로 인트로 초기화
 * - <head> 인라인 스크립트가 html 에 .hero-anim / .show-intro 클래스를 미리 붙여둠
 */
function initHeroIntro() {
  const hero = document.querySelector("#main");
  if (!hero) return;

  const root = document.documentElement;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!root.classList.contains("hero-anim") || reduceMotion) {
    hero.classList.add("is-revealed");
    return;
  }

  if (root.classList.contains("show-intro")) {
    playIntroOverlay(() => revealHero(hero));
  } else {
    setTimeout(() => revealHero(hero), 80);
  }

  initHeroPointerEffects(hero);
}

/** 인트로 오버레이: 터미널 타이핑 + 퍼센트 카운트 → 위아래로 갈라지며 열림 */
function playIntroOverlay(onDone) {
  const overlay = document.querySelector(".hero-intro");
  if (!overlay) return onDone();

  const cmd = overlay.querySelector(".hero-intro-cmd");
  const percent = overlay.querySelector(".hero-intro-percent");
  const text = cmd.dataset.text || "";
  const typeTime = 650;
  const start = performance.now();

  function tick(now) {
    const t = Math.min((now - start) / (HERO_INTRO_DURATION - 500), 1);
    cmd.textContent = text.slice(0, Math.ceil(text.length * Math.min((now - start) / typeTime, 1)));
    percent.textContent = String(Math.round(easeOutCubic(t) * 100)).padStart(3, "0");
    if (t < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);

  setTimeout(() => {
    overlay.classList.add("is-opening");
    sessionStorage.setItem("heroIntroSeen", "1");
    onDone();
  }, HERO_INTRO_DURATION - 500);

  setTimeout(() => {
    overlay.remove();
    document.documentElement.classList.remove("show-intro");
  }, HERO_INTRO_DURATION + 400);
}

/** 히어로 등장: CSS 등장 애니메이션 트리거 + 이름 스크램블 + 숫자 카운트업 */
function revealHero(hero) {
  hero.classList.add("is-revealed");

  // 등장 애니메이션이 끝나면 고정(forwards) 해제 → hover·자석 효과의 transform 이 먹히도록
  hero.querySelectorAll(".hero-badge, .hero-subtitle-wrapper, .highlight-item, .btn-resume-download").forEach((el) => {
    el.addEventListener("animationend", () => el.classList.add("anim-done"), { once: true });
  });

  const name = hero.querySelector("[data-scramble]");
  if (name) setTimeout(() => scrambleText(name), 350);

  setTimeout(() => {
    hero.querySelectorAll("[data-count]").forEach((el) => countUp(el));
  }, 1100);
}

/** 글자를 무작위 기호로 섞다가 한 글자씩 원래 글자로 고정 */
function scrambleText(el) {
  const finalText = el.dataset.scramble || el.textContent;
  const chars = Array.from(finalText);
  const settleStep = 260;
  const start = performance.now();

  function frame(now) {
    const elapsed = now - start;
    let done = true;
    el.textContent = chars
      .map((ch, i) => {
        if (elapsed >= (i + 1) * settleStep) return ch;
        done = false;
        return SCRAMBLE_GLYPHS[Math.floor(Math.random() * SCRAMBLE_GLYPHS.length)];
      })
      .join("");
    el.classList.toggle("is-scrambling", !done);
    if (!done) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

/** 0 → data-count 까지 숫자 카운트업 */
function countUp(el) {
  const target = parseInt(el.dataset.count, 10) || 0;
  const duration = 1200;
  const start = performance.now();

  function frame(now) {
    const t = Math.min((now - start) / duration, 1);
    el.textContent = Math.round(easeOutCubic(t) * target);
    if (t < 1) requestAnimationFrame(frame);
  }
  el.textContent = "0";
  requestAnimationFrame(frame);
}

/** 마우스 스포트라이트 · 콘텐츠 기울기 · 코드비 패럴랙스 · 자석 버튼 (마우스 환경에서만) */
function initHeroPointerEffects(hero) {
  if (!window.matchMedia("(pointer: fine)").matches) return;

  const content = hero.querySelector(".hero-content");
  const rain = hero.querySelector(".code-rain");
  const button = hero.querySelector(".btn-resume-download");
  let rafId = null;
  let pointer = { x: 0.5, y: 0.5 };

  hero.addEventListener("mousemove", (e) => {
    const rect = hero.getBoundingClientRect();
    pointer = { x: (e.clientX - rect.left) / rect.width, y: (e.clientY - rect.top) / rect.height };
    hero.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    hero.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);

    if (!rafId) {
      rafId = requestAnimationFrame(() => {
        const dx = pointer.x - 0.5;
        const dy = pointer.y - 0.5;
        if (content) content.style.setProperty("--tilt", `rotateX(${(-dy * 6).toFixed(2)}deg) rotateY(${(dx * 6).toFixed(2)}deg)`);
        if (rain) rain.style.transform = `translate(${(-dx * 30).toFixed(1)}px, ${(-dy * 20).toFixed(1)}px)`;
        rafId = null;
      });
    }
  });

  hero.addEventListener("mouseleave", () => {
    if (content) content.style.setProperty("--tilt", "rotateX(0deg) rotateY(0deg)");
    if (rain) rain.style.transform = "";
  });

  if (button) {
    button.addEventListener("mousemove", (e) => {
      const r = button.getBoundingClientRect();
      const mx = e.clientX - (r.left + r.width / 2);
      const my = e.clientY - (r.top + r.height / 2);
      button.style.transform = `translate(${mx * 0.25}px, ${my * 0.35}px)`;
    });
    button.addEventListener("mouseleave", () => {
      button.style.transform = "";
    });
  }
}

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

window.initHeroIntro = initHeroIntro;
