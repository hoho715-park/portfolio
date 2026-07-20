# 프로젝트: 박성호 포트폴리오

## 1. 개발 로그 기록 규칙 (전 프로젝트 공통 — 수정 금지)

### 작업 완료 시 반드시 수행
모든 코드 수정/생성 작업을 마친 뒤, 반드시 `dev-log/YYYY-MM-DD.md` 파일
(오늘 날짜)의 **가장 마지막 프롬프트 블록 바로 아래**에 다음 형식으로
결과를 기록하라:

## ✅ [결과] HH:MM:SS
- **수정 파일**: `경로/파일명`
- **변경 내용**: (구체적으로. 예: `.hero-section` 의 margin-bottom 을 30px → 20px 로 10px 축소)
- **이유**: (한 줄 요약)

### 기록 원칙
- 변경 내용은 반드시 "무엇을 → 어떻게" 형식의 구체적 수치/셀렉터/함수명으로 기록
- 파일을 여러 개 수정했으면 파일별로 나눠서 기록
- 기록을 빠뜨린 채 작업을 완료로 보고하지 말 것
- 코드 수정이 없는 단순 질문 턴에는 기록하지 않아도 됨
- 사용자가 이미지를 첨부한 경우, [결과] 블록에 **첨부 이미지 요약**: (이미지가 무엇을 보여줬는지 한 줄 설명) 항목을 추가로 기록할 것

## 2. 이 프로젝트 전용 규칙 (프로젝트마다 여기를 수정)

### 프로젝트 개요
박성호(Full Stack Developer)의 개인 포트폴리오 웹사이트 — 단일 페이지(SPA 아님, 풀페이지 스크롤 방식) 정적 사이트.

### 스택
- **HTML5 / CSS3 / Vanilla JavaScript (ES6+)** — 프레임워크·번들러 없음 (`package.json` 없음)
- **외부 CDN 라이브러리** (버전은 `index.html` 기준)
  - Font Awesome `6.4.0` — 아이콘
  - Google Fonts `Inter` (300~800)
  - Chart.js — 버전 미지정(`@latest` 자동), GPA 차트용
  - EmailJS `@emailjs/browser@4` — Contact 폼 메일 전송
  - devicon (jsDelivr `@latest`) — 스킬 아이콘 SVG
- **배포**: GitHub Pages (`CNAME` = `parksungho.com`, remote = `github.com/hoho715-park/portfolio`)

### 폴더 구조
```
/
├── index.html          # 유일한 HTML 진입점 (전 섹션 마크업 포함)
├── CNAME               # GitHub Pages 커스텀 도메인
├── css/                # 15개 파일, 섹션별 1:1 분리
│   ├── variables.css   # :root CSS 변수 (색상/그림자/radius/transition)
│   ├── reset.css       # 리셋
│   ├── layout.css, navbar.css, hero.css, about.css, skills.css,
│   │   archiving.css, projects.css, contact.css, footer.css,
│   │   modal.css, fullpage-scroll.css
│   └── responsive.css  # 반응형 (반드시 마지막에 로드)
├── js/                 # 11개 파일, 기능별 분리 (모듈 아님 · 전역 스코프)
├── images/
│   ├── about/          # 학력 로고
│   ├── project/main/   # 프로젝트 썸네일
│   ├── project/award/  # 수상 이미지
│   └── project/listen/ # 발표/청취 이미지
├── pdfs/               # 논문 PDF + 이력서
├── dev-log/            # 개발 로그 (섹션 1 규칙)
└── .claude/            # hooks(log-prompt.sh, load-history.sh) + settings.json
```

### 주요 진입점 파일
- **`index.html`** — 유일한 진입점. CSS 13개 + JS 11개를 순서대로 로드
- **`js/main.js`** — `DOMContentLoaded`에서 모든 모듈의 `init*()` 함수를 순서대로 호출하는 부트스트랩. **새 기능 추가 시 반드시 여기에 init 호출을 등록할 것**
- **`js/projects.js`** — `projectsData` 배열이 프로젝트 콘텐츠의 단일 소스(제목/설명/tech/이미지/detail). 프로젝트 추가·수정은 이 배열만 고치면 됨
- **`js/skills.js`** — `skillsData`, `categoryNames` 보유
- **`css/variables.css`** — 모든 색상/간격 토큰. 색상 하드코딩 대신 이 변수를 쓸 것

### 빌드 / 실행 방법
- **빌드 과정 없음.** 번들러·트랜스파일러·테스트 러너 모두 없음
- 로컬 확인: `index.html`을 브라우저로 직접 열거나 정적 서버(예: VSCode Live Server) 사용
- 배포: `main` 브랜치 push → GitHub Pages 자동 반영
- 린터/포매터 설정 파일 없음 *(미확인 — 에디터 단 Prettier를 쓰는지 직접 기입 필요)*

### 코드 컨벤션 (실제 파일에서 관찰된 패턴)
- **주석은 한국어**. JSDoc 블록(`/** ... */`)으로 함수 목적을 한 줄 설명하는 패턴이 일관됨
- **모든 CSS/JS 파일 최상단에 배너 주석** (25개 파일 전부 동일 형식):
  ```
  /* ===================================
     Contact JS - Contact Form 전송
     =================================== */
  ```
- **네이밍**
  - 초기화 함수: `init` + PascalCase (`initNavbar`, `initSkillsFilter`, `initContactForm`)
  - 그 외 함수: camelCase 동사 시작 (`renderProjects`, `openProjectModal`, `updateUI`)
  - 데이터 배열: `~Data` 접미사 (`projectsData`, `skillsData`, `typingTexts`)
  - 상수: 고정값은 UPPER_SNAKE (`MOBILE_BREAKPOINT`), 그 외 `const`/`let` camelCase
  - CSS 클래스: kebab-case + BEM 유사 접두사 (`.hero-section`, `.detail-modal-close`, `.skill-item`)
  - 섹션 id: 소문자 단어 (`#main`, `#about`, `#skills`, `#archiving`, `#projects`, `#contact`)
- **JS 모듈 시스템 없음** — `import`/`export` 미사용, 모든 함수가 전역. 로드 순서에 의존하므로 `index.html`의 `<script>` 순서를 임의로 바꾸지 말 것
- **⚠️ 들여쓰기·따옴표가 파일마다 혼재**: 구버전 파일은 4-space + `'작은따옴표'`(`main.js`, `animation.js`, `coderain.js`, `typing.js`, `hero.css`, `responsive.css` 등), 신규/재포맷 파일은 2-space + `"큰따옴표"`(`projects.js`, `contact.js`, `about.css`, `modal.css`, `skills.css` 등). `index.html`은 2-space.
  → **수정 시 그 파일의 기존 스타일을 그대로 따를 것.** 전체 통일 여부는 *(미확인 — 직접 기입 필요)*

### 기타 특이사항
- **EmailJS public key가 `js/contact.js`에 하드코딩**되어 있음(`emailjs.init("lf7pNP8XPtfDvY5hC")`). public key라 노출 자체는 정상이나, 교체 시 이 파일을 직접 수정
- 개인정보(이메일/전화번호)가 `index.html`과 `js/main.js` 콘솔 메시지에 하드코딩되어 있음 — 변경 시 두 곳 모두 확인
- 프로젝트 상세는 모달(`#projectDetailModal`)에서 `projectsData`를 읽어 동적 렌더링 — HTML에는 빈 컨테이너만 존재
- 데스크톱/모바일 렌더링 경로가 분리되어 있음(`renderProjects` / `renderMobileProjects`, `MOBILE_BREAKPOINT`) — 프로젝트 UI 수정 시 양쪽 모두 반영 필요
- 브라우저 지원 범위 *(미확인 — 직접 기입 필요)*