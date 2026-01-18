/* ===================================
   Contact JS - Contact Form 전송
   =================================== */

/**
 * Contact Form 초기화 및 mailto 방식 이메일 전송
 * 브라우저 기본 메일 클라이언트를 사용한 간단하고 확실한 방식
 */
function initContactForm() {
    const form = document.querySelector('.contact-form');
    const submitBtn = form.querySelector('.btn-submit');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // 폼 데이터 수집
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value.trim();

        // 유효성 검사
        if (!name || !email || !subject || !message) {
            showMessage('모든 필드를 입력해주세요.', 'error');
            return;
        }

        // 이메일 형식 검사
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showMessage('올바른 이메일 형식이 아닙니다.', 'error');
            return;
        }

        // 버튼 비활성화 및 로딩 상태
        submitBtn.disabled = true;
        const originalText = submitBtn.querySelector('span').textContent;
        submitBtn.querySelector('span').textContent = 'Opening Mail...';

        // mailto 링크 생성
        const mailtoSubject = `[포트폴리오 문의] ${subject}`;
        const mailtoBody = `
안녕하세요,

이름: ${name}
이메일: ${email}
문의 유형: ${getSubjectText(subject)}

메시지:
${message}

---
이 메일은 포트폴리오 Contact 폼을 통해 전송되었습니다.
        `.trim();

        const mailtoLink = `mailto:andytjdgh@gmail.com?subject=${encodeURIComponent(mailtoSubject)}&body=${encodeURIComponent(mailtoBody)}`;

        // 메일 클라이언트 열기
        window.location.href = mailtoLink;

        // 성공 메시지 표시
        setTimeout(() => {
            showMessage('메일 클라이언트가 열렸습니다. 전송을 완료해주세요!', 'success');

            // 폼 초기화
            form.reset();

            // 버튼 다시 활성화
            submitBtn.disabled = false;
            submitBtn.querySelector('span').textContent = originalText;
        }, 1000);
    });
}

/**
 * Subject 코드를 텍스트로 변환
 */
function getSubjectText(value) {
    const subjects = {
        'project': '프로젝트 제안',
        'collaboration': '협업 문의',
        'job': '채용 문의',
        'question': '기술 질문',
        'other': '기타'
    };
    return subjects[value] || value;
}

/**
 * 성공/에러 메시지 표시
 */
function showMessage(message, type) {
    // 기존 메시지 제거
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    // 새 메시지 생성
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message ${type}`;
    messageDiv.textContent = message;

    // 폼 아래에 추가
    const form = document.querySelector('.contact-form');
    form.appendChild(messageDiv);

    // 5초 후 자동 제거
    setTimeout(() => {
        messageDiv.style.opacity = '0';
        setTimeout(() => messageDiv.remove(), 300);
    }, 5000);
}

// 전역으로 내보내기
window.initContactForm = initContactForm;
