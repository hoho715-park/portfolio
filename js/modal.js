/* ===================================
   Modal 초기화 함수
   =================================== */
function initModal() {
  console.log("✅ Modal 초기화 완료");
  // 이미지 모달과 PDF 모달은 자동으로 초기화됨
}

// 전역으로 내보내기
window.initModal = initModal;

/* ===================================
   Project Detail Modal
   =================================== */
const modal = document.getElementById("project-modal");
const titleEl = document.getElementById("modal-title");
const descEl = document.getElementById("modal-description");

function openProjectModal(project) {
  if (!modal || !titleEl || !descEl) return;
  titleEl.textContent = project.title;
  descEl.textContent = project.detail;
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
  window.openImageModal = function (images) {
    console.log("✅ openImageModal 호출됨:", images);

    // 초기화
    imageContainer.innerHTML = "";
    imageContainer.className = "image-modal-images";

    // 클래스 추가
    if (images.length > 1) {
      imageContainer.classList.add("multiple-images");
    } else {
      imageContainer.classList.add("single-image");
    }

    // 이미지 추가
    images.forEach((src, index) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = `이미지 ${index + 1}`;
      img.onload = () => console.log(`✅ 이미지 로드 완료: ${src}`);
      img.onerror = () => console.error(`❌ 이미지 로드 실패: ${src}`);
      imageContainer.appendChild(img);
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
      pdfItem.innerHTML = `
        ${paper.isFirstAuthor ? '<div class="pdf-first-author-badge"><i class="fas fa-star"></i> 1저자</div>' : ''}
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
