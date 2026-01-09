/* ===================================
   Skills JS - 스킬 필터링 로직
   =================================== */

/**
 * Skills 필터 초기화
 */
function initSkillsFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const skillItems = document.querySelectorAll('.skill-item');
    
    // 초기 상태: 모든 스킬 활성화
    setAllActive(skillItems);
    
    // 필터 버튼 클릭 이벤트
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // 활성 버튼 상태 변경
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // 필터링 적용
            filterSkills(skillItems, filter);
        });
    });
}

/**
 * 스킬 필터링 함수
 * @param {NodeList} items - 스킬 아이템 목록
 * @param {string} filter - 필터 카테고리
 */
function filterSkills(items, filter) {
    items.forEach(item => {
        const category = item.getAttribute('data-category');
        
        if (filter === 'all') {
            // 전체: 모든 아이템 활성화
            item.classList.remove('inactive');
            item.classList.add('active');
        } else if (category === filter) {
            // 해당 카테고리: 활성화
            item.classList.remove('inactive');
            item.classList.add('active');
        } else {
            // 다른 카테고리: 비활성화 (흐릿하게)
            item.classList.remove('active');
            item.classList.add('inactive');
        }
    });
}

/**
 * 모든 스킬 활성화
 * @param {NodeList} items - 스킬 아이템 목록
 */
function setAllActive(items) {
    items.forEach(item => {
        item.classList.remove('inactive');
        item.classList.add('active');
    });
}

// 전역으로 내보내기
window.initSkillsFilter = initSkillsFilter;