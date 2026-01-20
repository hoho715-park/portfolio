/* ===================================
   Contact JS - Contact Form 전송
   =================================== */

/**
 * Contact Form 초기화 및 EmailJS를 통한 이메일 전송
 */
function initContactForm() {
  const form = document.querySelector(".contact-form");
  if (!form) {
    console.error("Contact form not found");
    return;
  }

  const submitBtn = form.querySelector(".btn-submit");

  // EmailJS 로드 확인 및 초기화
  if (typeof emailjs !== 'undefined') {
    emailjs.init("lf7pNP8XPtfDvY5hC");
    console.log("✅ EmailJS 초기화 완료");
  } else {
    console.error("❌ EmailJS가 로드되지 않았습니다");
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("📧 폼 제출 이벤트 발생");

    // 폼 데이터 수집
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value.trim();

    // EmailJS 로드 확인
    if (typeof emailjs === 'undefined') {
      showMessage("이메일 서비스를 로드하는 중입니다. 잠시 후 다시 시도해주세요.", "error");
      return;
    }

    // 유효성 검사
    if (!name || !email || !subject || !message) {
      showMessage("모든 필드를 입력해주세요.", "error");
      return;
    }

    // 이메일 형식 검사
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showMessage("올바른 이메일 형식이 아닙니다.", "error");
      return;
    }

    // 버튼 비활성화 및 로딩 상태
    submitBtn.disabled = true;
    const originalText = submitBtn.querySelector("span").textContent;
    submitBtn.querySelector("span").textContent = "전송 중...";
    submitBtn.querySelector("i").className = "fas fa-spinner fa-spin";

    // EmailJS로 전송할 데이터
    const templateParams = {
      from_name: name,
      from_email: email,
      subject: getSubjectText(subject),
      message: message,
      to_email: "andytjdgh@gmail.com",
    };

    // EmailJS로 이메일 전송
    emailjs
      .send(
        "service_h4kdb7j", // EmailJS Service ID
        "template_ewxmqsj", // EmailJS Template ID
        templateParams
      )
      .then(function (response) {
        console.log("SUCCESS!", response.status, response.text);

        // 성공 메시지 표시
        showMessage("메시지가 성공적으로 전송되었습니다!", "success");

        // 폼 초기화
        form.reset();

        // 버튼 원래 상태로 복구
        submitBtn.disabled = false;
        submitBtn.querySelector("span").textContent = originalText;
        submitBtn.querySelector("i").className = "fas fa-paper-plane";
      })
      .catch(function (error) {
        console.error("FAILED...", error);

        // 에러 메시지 표시
        showMessage("메시지 전송에 실패했습니다. 다시 시도해주세요.", "error");

        // 버튼 원래 상태로 복구
        submitBtn.disabled = false;
        submitBtn.querySelector("span").textContent = originalText;
        submitBtn.querySelector("i").className = "fas fa-paper-plane";
      });
  });
}

/**
 * Subject 코드를 텍스트로 변환
 */
function getSubjectText(value) {
  const subjects = {
    project: "프로젝트 제안",
    collaboration: "협업 문의",
    job: "채용 문의",
    question: "기술 질문",
    other: "기타",
  };
  return subjects[value] || value;
}

/**
 * 성공/에러 메시지 표시
 */
function showMessage(message, type) {
  // 기존 메시지 제거
  const existingMessage = document.querySelector(".form-message");
  if (existingMessage) {
    existingMessage.remove();
  }

  // 새 메시지 생성
  const messageDiv = document.createElement("div");
  messageDiv.className = `form-message ${type}`;
  messageDiv.textContent = message;

  // 폼 아래에 추가
  const form = document.querySelector(".contact-form");
  form.appendChild(messageDiv);

  // 5초 후 자동 제거
  setTimeout(() => {
    messageDiv.style.opacity = "0";
    setTimeout(() => messageDiv.remove(), 300);
  }, 5000);
}

// 전역으로 내보내기
window.initContactForm = initContactForm;
