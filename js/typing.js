/* ===================================
   Typing JS - 타이핑 효과 로직
   =================================== */

/**
 * 타이핑할 텍스트 목록
 */
const typingTexts = [
    '서비스 전체를 설계하는 개발자',
    'UI부터 인프라까지 구현하는 개발자',
    '문제를 해결하는 풀스택 개발자'
];

/**
 * 타이핑 효과 초기화
 */
function initTypingEffect() {
    const typingText = document.querySelector('.typing-text');
    if (!typingText) return;
    
    let textIndex = 0;
    let charIndex = typingTexts[0].length;
    let isDeleting = true;
    
    // 초기 텍스트 설정
    typingText.textContent = typingTexts[0];
    
    /**
     * 타이핑 애니메이션 함수
     */
    function type() {
        const currentText = typingTexts[textIndex];
        
        if (isDeleting) {
            // 글자 삭제
            charIndex--;
            typingText.textContent = currentText.substring(0, charIndex);
            
            if (charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % typingTexts.length;
                setTimeout(type, 500);
                return;
            }
            setTimeout(type, 50);
        } else {
            // 글자 추가
            charIndex++;
            typingText.textContent = typingTexts[textIndex].substring(0, charIndex);
            
            if (charIndex === typingTexts[textIndex].length) {
                isDeleting = true;
                setTimeout(type, 2000);
                return;
            }
            setTimeout(type, 100);
        }
    }
    
    // 2초 후 타이핑 시작
    setTimeout(type, 2000);
}

// 전역으로 내보내기
window.initTypingEffect = initTypingEffect;
window.typingTexts = typingTexts;