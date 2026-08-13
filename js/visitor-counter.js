/* ===================================
   Visitor Counter JS - 오늘/전체 방문자 수 기록
   =================================== */

const VISITOR_NAMESPACE = "parksungho-portfolio";
const VISITOR_TOTAL_KEY = "total";
const VISITOR_LAST_VISIT_STORAGE_KEY = "psh_portfolio_last_visit_date";

/**
 * 로컬 타임존 기준 오늘 날짜 문자열(YYYY-MM-DD) 반환
 */
function getTodayDateString() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

/**
 * Abacus 카운터 API 호출 (shouldIncrement=true면 hit, 아니면 get)
 */
async function fetchVisitorCount(key, shouldIncrement) {
  const action = shouldIncrement ? "hit" : "get";
  const response = await fetch(
    `https://abacus.jasoncameron.dev/${action}/${VISITOR_NAMESPACE}/${key}`
  );
  const data = await response.json();
  return typeof data.value === "number" ? data.value : 0;
}

/**
 * 방문자 수 카운터 초기화 - 하루 1회만 카운트 증가, 이후에는 조회만 수행
 */
async function initVisitorCounter() {
  const todayEl = document.getElementById("visitorToday");
  const totalEl = document.getElementById("visitorTotal");
  if (!todayEl || !totalEl) return;

  const today = getTodayDateString();
  const lastVisitDate = localStorage.getItem(VISITOR_LAST_VISIT_STORAGE_KEY);
  const isFirstVisitToday = lastVisitDate !== today;
  const todayKey = `daily-${today}`;

  try {
    const [todayCount, totalCount] = await Promise.all([
      fetchVisitorCount(todayKey, isFirstVisitToday),
      fetchVisitorCount(VISITOR_TOTAL_KEY, isFirstVisitToday),
    ]);

    if (isFirstVisitToday) {
      localStorage.setItem(VISITOR_LAST_VISIT_STORAGE_KEY, today);
    }

    todayEl.textContent = todayCount;
    totalEl.textContent = totalCount;
  } catch (error) {
    console.log("⚠️ 방문자 수를 불러오지 못했습니다.", error);
  }
}

// 전역으로 내보내기
window.initVisitorCounter = initVisitorCounter;
