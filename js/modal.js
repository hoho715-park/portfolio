/* ===================================
   Modal 초기화 함수
   =================================== */
function initModal() {
  console.log("✅ Modal 초기화 완료");
  // 이미지 모달과 PDF 모달은 자동으로 초기화됨
  initProjectDetailModal();
}

// 전역으로 내보내기
window.initModal = initModal;

/* ===================================
   Project Detail Modal (New)
   =================================== */
function initProjectDetailModal() {
  const detailModal = document.getElementById("projectDetailModal");
  if (!detailModal) return;

  const overlay = detailModal.querySelector(".detail-modal-overlay");
  const closeBtn = detailModal.querySelector(".detail-modal-close");
  const thumbnail = document.getElementById("detailThumbnail");
  const titleEl = document.getElementById("detailTitle");
  const subtitleEl = document.getElementById("detailSubtitle");
  const techStackEl = document.getElementById("detailTechStack");
  const highlightEl = document.getElementById("detailHighlight");
  const sectionsEl = document.getElementById("detailSections");

  // 모달 열기 함수
  window.openProjectDetailModal = function(project) {
    if (!project.hasDetailModal || !project.detailData) {
      console.log("❌ No detail modal data for this project");
      return false;
    }

    const data = project.detailData;

    // Thumbnail
    thumbnail.src = project.image;
    thumbnail.alt = project.title;

    // Title & Subtitle
    titleEl.textContent = project.title;
    subtitleEl.textContent = project.subtitle || "";

    // Tech Stack
    techStackEl.innerHTML = project.tech.map(tech => {
      const iconClass = getTechIcon(tech);
      return `<span class="detail-tech-chip"><i class="${iconClass}"></i>${tech}</span>`;
    }).join("");

    // Highlight
    highlightEl.innerHTML = `<p>${data.highlight}</p>`;

    // Build sections
    let sectionsHTML = "";

    // Tech Categories Section (for N.O.D.E style)
    if (data.techCategories) {
      sectionsHTML += `
        <div class="detail-section">
          <div class="detail-section-header">
            <div class="detail-section-icon"><i class="fas fa-tools"></i></div>
            <h3 class="detail-section-title">사용 기술</h3>
          </div>
          <div class="detail-section-content">
            <div class="detail-tech-categories">
              ${data.techCategories.map(cat => `
                <div class="detail-tech-category">
                  <h4 class="detail-tech-category-title"><i class="${cat.icon}"></i>${cat.category}</h4>
                  <div class="detail-tech-category-items">
                    ${cat.items.map(item => `<span class="detail-tech-category-chip">${item}</span>`).join("")}
                  </div>
                </div>
              `).join("")}
            </div>
          </div>
        </div>
      `;
    }

    // Overview Section
    if (data.overview) {
      sectionsHTML += `
        <div class="detail-section">
          <div class="detail-section-header">
            <div class="detail-section-icon"><i class="fas fa-info-circle"></i></div>
            <h3 class="detail-section-title">프로젝트 개요</h3>
          </div>
          <div class="detail-section-content">
            ${data.overview.map(text => `<p>${text}</p>`).join("")}
          </div>
        </div>
      `;
    }

    // Role Section
    if (data.role) {
      sectionsHTML += `
        <div class="detail-section">
          <div class="detail-section-header">
            <div class="detail-section-icon"><i class="fas fa-user-tie"></i></div>
            <h3 class="detail-section-title">담당 역할</h3>
          </div>
          <div class="detail-section-content">
            <div class="detail-role-badge"><i class="fas fa-star"></i>${data.role.title}</div>
            <p>${data.role.description}</p>
          </div>
        </div>
      `;
    }

    // Details Section (for N.O.D.E style - multiple detail items)
    if (data.details) {
      sectionsHTML += `
        <div class="detail-section">
          <div class="detail-section-header">
            <div class="detail-section-icon"><i class="fas fa-file-alt"></i></div>
            <h3 class="detail-section-title">상세 내용</h3>
          </div>
          <div class="detail-section-content">
            ${data.details.map(detail => `
              <div class="detail-subsection">
                <h4 class="detail-subsection-title"><i class="${detail.icon}"></i>${detail.title}</h4>
                <p>${detail.content}</p>
              </div>
            `).join("")}
          </div>
        </div>
      `;
    }

    // Tech Implementation Section
    if (data.techImplementation) {
      sectionsHTML += `
        <div class="detail-section">
          <div class="detail-section-header">
            <div class="detail-section-icon"><i class="fas fa-cogs"></i></div>
            <h3 class="detail-section-title">핵심 기술 구현</h3>
          </div>
          <div class="detail-section-content">
            ${data.techImplementation.map(sub => `
              <div class="detail-subsection">
                <h4 class="detail-subsection-title"><i class="${sub.icon}"></i>${sub.title}</h4>
                <ul>
                  ${sub.items.map(item => `<li>${item}</li>`).join("")}
                </ul>
              </div>
            `).join("")}
          </div>
        </div>
      `;
    }

    // Trouble Shooting Section
    if (data.troubleShooting) {
      sectionsHTML += `
        <div class="detail-section">
          <div class="detail-section-header">
            <div class="detail-section-icon"><i class="fas fa-bug"></i></div>
            <h3 class="detail-section-title">문제 해결 경험</h3>
          </div>
          <div class="detail-section-content">
            ${data.troubleShooting.map(trouble => `
              <div class="detail-trouble">
                <h4 class="detail-trouble-title"><i class="fas fa-exclamation-triangle"></i>${trouble.title}</h4>
                <div class="detail-trouble-item">
                  <div class="detail-trouble-label problem">문제</div>
                  <p class="detail-trouble-text">${trouble.problem}</p>
                </div>
                <div class="detail-trouble-item">
                  <div class="detail-trouble-label solution">해결</div>
                  <p class="detail-trouble-text">${trouble.solution}</p>
                </div>
                <div class="detail-trouble-item">
                  <div class="detail-trouble-label result">결과</div>
                  <p class="detail-trouble-text">${trouble.result}</p>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      `;
    }

    // Outcome Section
    if (data.outcome) {
      sectionsHTML += `
        <div class="detail-section detail-outcome-section">
          <div class="detail-section-header">
            <div class="detail-section-icon"><i class="fas fa-trophy"></i></div>
            <h3 class="detail-section-title">프로젝트 성과</h3>
          </div>
          <div class="detail-section-content">
            <p class="detail-outcome-text">${data.outcome}</p>
          </div>
        </div>
      `;
    }

    sectionsEl.innerHTML = sectionsHTML;

    // Show modal
    detailModal.classList.add("show");
    document.body.style.overflow = "hidden";
    console.log("✅ Project detail modal opened");
    return true;
  };

  // 모달 닫기 함수
  window.closeProjectDetailModal = function() {
    detailModal.classList.remove("show");
    document.body.style.overflow = "";
    console.log("✅ Project detail modal closed");
  };

  // 닫기 버튼
  closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    window.closeProjectDetailModal();
  });

  // 배경 클릭
  overlay.addEventListener("click", () => {
    window.closeProjectDetailModal();
  });

  // ESC 키
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && detailModal.classList.contains("show")) {
      window.closeProjectDetailModal();
    }
  });

  console.log("✅ Project detail modal initialized");
}

// Tech icon mapping helper
function getTechIcon(tech) {
  const iconMap = {
    "Python": "fab fa-python",
    "OpenCV": "fas fa-eye",
    "PaddleOCR": "fas fa-font",
    "FastAPI": "fas fa-bolt",
    "React": "fab fa-react",
    "Computer Vision": "fas fa-camera",
    "Spring": "fas fa-leaf",
    "Spring Boot": "fas fa-leaf",
    "AWS": "fab fa-aws",
    "HTML": "fab fa-html5",
    "CSS": "fab fa-css3-alt",
    "JavaScript": "fab fa-js",
    "JS": "fab fa-js",
    "PHP": "fab fa-php",
    "WordPress": "fab fa-wordpress",
    "Java": "fab fa-java",
    "R": "fas fa-chart-line",
    "NEXT.JS": "fas fa-n",
    "JSON": "fas fa-code"
  };
  return iconMap[tech] || "fas fa-code";
}

// DOM 로드 후 초기화
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initProjectDetailModal);
} else {
  initProjectDetailModal();
}

/* ===================================
   Legacy Project Modal (Simple)
   =================================== */
const modal = document.getElementById("project-modal");
const legacyTitleEl = document.getElementById("modal-title");
const legacyDescEl = document.getElementById("modal-description");

function openProjectModal(project) {
  // 먼저 상세 모달이 있는지 확인
  if (project.hasDetailModal && window.openProjectDetailModal) {
    const opened = window.openProjectDetailModal(project);
    if (opened) return;
  }

  // 상세 모달이 없으면 기존 간단한 모달 사용
  if (!modal || !legacyTitleEl || !legacyDescEl) return;
  legacyTitleEl.textContent = project.title;
  legacyDescEl.textContent = project.detail;
  modal.classList.add("show");
}

// 프로젝트 모달 닫기 이벤트 (안전하게 처리)
if (modal) {
  const projectModalClose = modal.querySelector(".modal-close");
  if (projectModalClose) {
    projectModalClose.onclick = () => {
      modal.classList.remove("show");
    };
  }

  modal.onclick = (e) => {
    if (e.target === modal) modal.classList.remove("show");
  };
}

/* ===================================
   Image Modal - DOM 로드 후 초기화
   =================================== */

// DOM이 준비된 후 모달 생성
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initImageModal);
} else {
  initImageModal();
}

function initImageModal() {
  console.log("🚀 이미지 모달 초기화 시작...");

  // 모달 DOM 생성
  const imageModal = document.createElement("div");
  imageModal.id = "image-modal";
  imageModal.className = "image-modal";
  imageModal.innerHTML = `
    <div class="image-modal-content">
      <button class="modal-close" aria-label="닫기">&times;</button>
      <div class="image-modal-images"></div>
    </div>
  `;
  document.body.appendChild(imageModal);

  const imageContainer = imageModal.querySelector(".image-modal-images");
  const imageCloseBtn = imageModal.querySelector(".modal-close");

  // 모달 열기 함수
  // items: string[] | { src, title?, highlight? }[]
  window.openImageModal = function (items) {
    console.log("✅ openImageModal 호출됨:", items);

    // 입력 정규화: 문자열도 { src } 형태로 변환
    const normalized = items.map((item) =>
      typeof item === "string" ? { src: item } : item,
    );

    // 초기화
    imageContainer.innerHTML = "";
    imageContainer.className = "image-modal-images";

    // 클래스 추가
    if (normalized.length > 1) {
      imageContainer.classList.add("multiple-images");
    } else {
      imageContainer.classList.add("single-image");
    }

    // figure(이미지 + 캡션) 추가
    normalized.forEach((item, index) => {
      const figure = document.createElement("div");
      figure.className = "image-modal-figure";

      const img = document.createElement("img");
      img.src = item.src;
      img.alt = item.title || `이미지 ${index + 1}`;
      img.onload = () => console.log(`✅ 이미지 로드 완료: ${item.src}`);
      img.onerror = () => console.error(`❌ 이미지 로드 실패: ${item.src}`);
      figure.appendChild(img);

      if (item.title || item.highlight) {
        const caption = document.createElement("div");
        caption.className = "image-modal-caption";
        if (item.variant) {
          caption.classList.add(`image-modal-caption--${item.variant}`);
        }
        let html = "";
        if (item.title) {
          const titleHTML = String(item.title).replace(/\n/g, "<br>");
          const labelHTML = item.label
            ? ` <span class="image-modal-caption-label">${item.label}</span>`
            : "";
          html += `<div class="image-modal-caption-title">${titleHTML}${labelHTML}</div>`;
        }
        if (item.highlight) {
          html += `<div class="image-modal-caption-highlight">${item.highlight}</div>`;
        }
        caption.innerHTML = html;
        figure.appendChild(caption);
      }

      imageContainer.appendChild(figure);
    });

    // 모달 표시
    imageModal.classList.add("show");
    console.log("✅ 모달 표시됨");
  };

  // 모달 닫기 함수
  window.closeImageModal = function () {
    imageModal.classList.remove("show");
    console.log("✅ 모달 닫힘");
  };

  // 닫기 버튼
  imageCloseBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    window.closeImageModal();
  });

  // 배경 클릭
  imageModal.addEventListener("click", (e) => {
    if (e.target === imageModal) {
      window.closeImageModal();
    }
  });

  // ESC 키
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && imageModal.classList.contains("show")) {
      window.closeImageModal();
    }
  });

  console.log("✅ 이미지 모달 시스템 초기화 완료");
}

/* ===================================
   PDF Modal - DOM 로드 후 초기화
   =================================== */

// DOM이 준비된 후 PDF 모달 생성
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initPDFModal);
} else {
  initPDFModal();
}

function initPDFModal() {
  console.log("🚀 PDF 모달 초기화 시작...");

  // 모달 DOM 생성
  const pdfModal = document.createElement("div");
  pdfModal.id = "pdf-modal";
  pdfModal.className = "pdf-modal";
  pdfModal.innerHTML = `
    <div class="pdf-modal-content">
      <button class="modal-close" aria-label="닫기">&times;</button>
      <h2 class="pdf-modal-title">논문 목록</h2>
      <div class="pdf-list"></div>
    </div>
  `;
  document.body.appendChild(pdfModal);

  const pdfList = pdfModal.querySelector(".pdf-list");
  const pdfCloseBtn = pdfModal.querySelector(".modal-close");

  // 모달 열기 함수
  window.openPDFModal = function (papers) {
    console.log("✅ openPDFModal 호출됨:", papers);

    // 초기화
    pdfList.innerHTML = "";

    // PDF 아이템 추가
    papers.forEach((paper) => {
      const pdfItem = document.createElement("div");
      pdfItem.className = paper.isFirstAuthor ? "pdf-item pdf-item-highlight" : "pdf-item";
      const badgeHTML = (paper.isFirstAuthor || paper.isEnglish || paper.venue)
        ? `<div class="pdf-first-author-badge">
            ${paper.isFirstAuthor ? '<span class="pdf-author-label"><i class="fas fa-star"></i> 1저자</span>' : ''}
            ${paper.isEnglish ? '<span class="pdf-paper-language"><i class="fas fa-language"></i> English</span>' : ''}
            ${paper.venue ? `<span class="pdf-paper-venue">(${paper.venue})</span>` : ''}
          </div>`
        : '';

      pdfItem.innerHTML = `
        ${badgeHTML}
        <div class="pdf-item-title">${paper.title}</div>
        <div class="pdf-item-actions">
          <button class="pdf-action-btn pdf-view-btn" data-pdf="${paper.file}" title="조회">
            <i class="fas fa-eye"></i>
          </button>
          <button class="pdf-action-btn pdf-download-btn" data-pdf="${paper.file}" title="다운로드">
            <i class="fas fa-download"></i>
          </button>
        </div>
      `;
      pdfList.appendChild(pdfItem);
    });

    // 조회 버튼 이벤트
    pdfList.querySelectorAll(".pdf-view-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const pdfFile = btn.dataset.pdf;
        window.open(pdfFile, "_blank");
      });
    });

    // 다운로드 버튼 이벤트
    pdfList.querySelectorAll(".pdf-download-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const pdfFile = btn.dataset.pdf;
        const link = document.createElement("a");
        link.href = pdfFile;
        link.download = pdfFile.split("/").pop();
        link.click();
      });
    });

    // 모달 표시
    pdfModal.classList.add("show");
    console.log("✅ PDF 모달 표시됨");
  };

  // 모달 닫기 함수
  window.closePDFModal = function () {
    pdfModal.classList.remove("show");
    console.log("✅ PDF 모달 닫힘");
  };

  // 닫기 버튼
  pdfCloseBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    window.closePDFModal();
  });

  // 배경 클릭
  pdfModal.addEventListener("click", (e) => {
    if (e.target === pdfModal) {
      window.closePDFModal();
    }
  });

  // ESC 키
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && pdfModal.classList.contains("show")) {
      window.closePDFModal();
    }
  });

  console.log("✅ PDF 모달 시스템 초기화 완료");
}
