/* ===================================
   Modal JS - 모달 관련 로직
   =================================== */

/**
 * 프로젝트 모달 초기화
 */
function initModal() {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const modalClose = modal.querySelector('.modal-close');
    
    // 프로젝트 이미지 클릭 시 모달 열기
    const projectImages = document.querySelectorAll('.project-image');
    projectImages.forEach(image => {
        image.addEventListener('click', function() {
            const img = this.querySelector('img');
            if (img) {
                modalImage.src = img.src;
                modalImage.alt = img.alt;
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // 수상 버튼 클릭 시 모달 열기
    const awardButtons = document.querySelectorAll('.btn-award');
    awardButtons.forEach(button => {
        button.addEventListener('click', function() {
            const awardImages = {
                'award1-modal': 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800&h=600&fit=crop',
                'award2-modal': 'https://images.unsplash.com/photo-1579547945413-497e1b99dac0?w=800&h=600&fit=crop',
                'award3-modal': 'https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?w=800&h=600&fit=crop'
            };
            
            const awardId = this.getAttribute('data-award');
            if (awardImages[awardId]) {
                modalImage.src = awardImages[awardId];
                modalImage.alt = '수상 이미지';
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // 닫기 버튼 클릭
    modalClose.addEventListener('click', function() {
        closeModal(modal, modalImage);
    });
    
    // 모달 배경 클릭 시 닫기
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal(modal, modalImage);
        }
    });
    
    // ESC 키 누르면 닫기
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal(modal, modalImage);
        }
    });
}

/**
 * 모달 닫기 함수
 * @param {HTMLElement} modal - 모달 요소
 * @param {HTMLElement} modalImage - 모달 이미지 요소
 */
function closeModal(modal, modalImage) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    setTimeout(() => {
        modalImage.src = '';
    }, 300);
}

// 전역으로 내보내기
window.initModal = initModal;
window.closeModal = closeModal;