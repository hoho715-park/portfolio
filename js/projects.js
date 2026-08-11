/* ===================================
   Projects JS
   =================================== */

const projectsData = [
  {
    id: 1,
    title: "IEUM",
    subtitle: "생체전류 데이터로 체질을 분석하고, 일상까지 연결하는 맞춤형 헬스케어 플랫폼",
    description:
      "생체전류 데이터로 체질을 분석하고, 일상까지 연결하는 맞춤형 헬스케어 플랫폼",
    tech: ["Spring Boot", "React", "MySQL", "Python", "AWS"],
    image: "images/project/main/ieum.png",
    hasPaper: true,
    hasAward: true,
    hasCertificate: true,
    status: null,
    hasDetailModal: true,
    detailData: {
      highlight: "IEUM은 한의학의 사상체질 이론을 데이터와 소프트웨어 기술로 재해석한 맞춤형 헬스케어 웹 애플리케이션이다. AcuBeam-III 기기를 이용해 손바닥의 신장·비장·폐·심장·간·방광에 대응하는 6개 지점의 생체전류를 측정하고, 측정 데이터를 기반으로 사용자의 체질을 분석한다. 단순히 체질 판별 결과만 보여주는 것에서 끝나지 않고, 측정 기록 시각화와 체질별 음식·운동·생활습관 추천, 건강 미션 시스템까지 연결하여 사용자가 자신의 체질을 이해하고 일상 속 건강관리로 이어갈 수 있도록 설계했다.",
      techCategories: [
        {
          category: "Frontend",
          icon: "fab fa-react",
          items: ["React", "JavaScript"]
        },
        {
          category: "Backend",
          icon: "fas fa-leaf",
          items: ["Spring Boot", "Flask"]
        },
        {
          category: "Database",
          icon: "fas fa-database",
          items: ["MySQL"]
        },
        {
          category: "AI / Data",
          icon: "fas fa-brain",
          items: ["Python", "Pandas", "scikit-learn", "KNN"]
        },
        {
          category: "Infrastructure / Collaboration",
          icon: "fab fa-aws",
          items: ["AWS", "GitHub", "Notion"]
        }
      ],
      overview: [
        "IEUM은 질병이 발생한 이후 치료하는 방식에서 나아가, 개인이 자신의 건강 상태를 이해하고 지속적으로 관리할 수 있는 서비스를 만들기 위해 시작한 프로젝트입니다.",
        "기존 사상체질 진단이 설문이나 전문가의 판단에 크게 의존한다는 점에서 출발하여, 손바닥 6개 지점에서 측정되는 생체전류 데이터를 정량적으로 분석하고 머신러닝을 통해 체질을 분류하는 방법을 구현했습니다.",
        "또한 분석 결과를 단순한 체질명으로 제공하는 것이 아니라 사용자의 측정 기록을 시각화하고, 체질별 음식·운동·생활습관 추천과 건강 미션까지 연결하여 실제 생활에서 활용할 수 있는 디지털 헬스케어 서비스로 확장했습니다."
      ],
      details: [
        {
          title: "생체전류 데이터 수집",
          icon: "fas fa-heartbeat",
          content: "AcuBeam-III 기기를 활용해 손바닥에서 신장·비장·폐·심장·간·방광에 대응하는 6개 지점의 생체전류를 측정했습니다. 측정 환경에 따른 오차를 줄이기 위해 반복 측정을 진행하고 온도·습도·시간대 등의 영향을 확인하여 데이터 수집 절차를 정리했습니다. 측정 데이터는 CSV 형태로 가공하여 이후 통계 분석과 체질 분류 알고리즘에서 활용할 수 있도록 구성했습니다."
        },
        {
          title: "데이터 관리 및 전처리",
          icon: "fas fa-database",
          content: "사용자가 측정한 장기별 생체전류 값을 웹에서 직접 입력할 수 있도록 입력 페이지를 구현하고 MySQL 데이터베이스와 연동했습니다. 측정값과 측정 일자, 사용자 정보, 체질 등의 데이터를 관리할 수 있도록 DB 구조를 설계했으며, 저장된 데이터를 Python과 Pandas를 이용해 분석했습니다. 장기별 평균·표준편차·분포를 확인하고 이상치 제거 및 정규화를 수행하여 체질 분류에 활용할 수 있는 데이터셋을 구축했습니다."
        },
        {
          title: "KNN 기반 체질 분류",
          icon: "fas fa-circle-nodes",
          content: "수집한 생체전류 데이터를 기반으로 KNN(K-Nearest Neighbors) 알고리즘을 적용하여 사용자의 생체전류 패턴과 가장 유사한 체질을 분류하도록 구현했습니다. scikit-learn을 활용해 모델을 구성하고 유클리드 거리를 기반으로 기존 체질 데이터와 새로운 사용자의 데이터를 비교했습니다. K값을 3~15 범위에서 변경하며 교차 검증을 수행하고 Accuracy, Precision, Recall, F1-score를 비교했으며, 가중치 방식도 함께 조정했습니다. 그 결과 보고서 기준 평균 F1-score를 0.73에서 0.83까지 개선했습니다."
        },
        {
          title: "생체전류 데이터 시각화",
          icon: "fas fa-chart-line",
          content: "사용자가 입력한 왼손·오른손의 장기별 생체전류 값을 그래프로 시각화하여 현재 측정 패턴을 직관적으로 확인할 수 있도록 구현했습니다. 또한 날짜별 과거 측정 기록을 조회할 수 있도록 구성하여 사용자가 이전 데이터와 현재 데이터를 확인할 수 있게 했습니다. 결과 그래프를 PNG 파일로 저장하는 기능도 제공하여 개인 건강 기록으로 활용할 수 있도록 했습니다."
        },
        {
          title: "체질 분석 결과 UI",
          icon: "fas fa-user-check",
          content: "AI가 분류한 태양인·태음인·소양인·소음인 결과를 단순 텍스트가 아닌 체질별 캐릭터와 함께 시각적으로 제공했습니다. 각 결과 페이지에서는 체질의 성격적 특징, 건강 및 신체 기능, 유의점, 체형 등의 정보를 카드 형태로 구성하여 사용자가 자신의 체질을 쉽게 이해할 수 있도록 설계했습니다. MBTI 결과 페이지처럼 사용자가 결과 자체를 흥미롭게 받아들일 수 있는 UX를 지향했습니다."
        },
        {
          title: "체질 맞춤형 추천 시스템",
          icon: "fas fa-utensils",
          content: "체질 판별 이후 사용자가 실제 생활에서 활용할 수 있도록 체질별 맞춤 추천 기능을 구현했습니다. 각 체질에 적합한 음식 재료와 피해야 할 재료를 제공하고, 추천 재료를 활용해 만들 수 있는 실제 음식과 레시피까지 연결했습니다. 이와 함께 체질별 생활습관과 운동 등을 제공하여 단순한 체질 판별 서비스를 넘어 개인 맞춤형 건강관리 플랫폼으로 확장했습니다."
        },
        {
          title: "체질 기반 건강 미션",
          icon: "fas fa-seedling",
          content: "사용자가 서비스를 지속적으로 활용할 수 있도록 마이페이지에 체질 기반 건강 미션 시스템을 구현했습니다. 체질별 100개의 건강 미션을 데이터베이스에 구성하고 매일 무작위로 4개의 미션을 제공하도록 설계했습니다. 사용자가 미션을 완료하면 화면의 식물이 새싹 → 줄기 → 꽃 → 열매 순서로 성장하며, 모든 미션을 완료하면 체질별 성취 뱃지를 획득할 수 있도록 구현했습니다. 이를 통해 건강관리 과정에 게임 요소를 적용하여 지속적인 참여를 유도했습니다."
        },
        {
          title: "Web Service Architecture",
          icon: "fas fa-sitemap",
          content: "Frontend는 React, Backend는 Spring Boot를 중심으로 구성하고 MySQL을 데이터베이스로 사용했습니다. 사용자가 웹에서 생체전류 데이터를 입력하면 서버를 통해 데이터가 저장되고, 체질 분석 알고리즘의 결과를 다시 웹에서 확인할 수 있도록 전체 데이터 흐름을 연결했습니다. 프로젝트 과정에서는 GitHub의 main / develop / feature 브랜치를 기반으로 협업하고 Pull Request와 코드 리뷰를 통해 코드를 관리했습니다."
        }
      ],
      outcome: "AcuBeam-III 기반 생체전류 측정 및 데이터 수집 프로세스를 구축하고, KNN 하이퍼파라미터 튜닝을 통해 평균 F1-score를 0.73에서 0.83까지 개선했습니다. 생체전류 입력 → 데이터 저장 → 체질 분석 → 결과 시각화 → 맞춤 추천으로 이어지는 End-to-End 웹서비스를 구현했으며, 전문가에게 기존 체질을 진단받은 일부 사용자를 대상으로 한 프로젝트 내 비교 사례에서 동일한 체질 결과를 확인했습니다. 교수·현업자·학생을 대상으로 실제 서비스 시연 및 사용자 피드백을 수집했고, 체질별 음식·운동·생활습관 추천과 건강 미션·뱃지 시스템까지 서비스를 확장했습니다."
    },
    detail:
      "IEUM은 바이오 신호 기반 분석을 통해 개인의 체질과 건강 상태를 해석하고 맞춤형 솔루션을 제공하는 헬스케어 웹 서비스입니다.",
  },
  {
    id: 13,
    title: "Guider",
    subtitle: "설명하지 않고, 보여주는 웹 네비게이터",
    description:
      "DOM 구조를 분석해 사용자의 자연어 질문을 실제 클릭 위치로 안내하는 Zero-Config AI 크롬 확장 프로그램",
    tech: ["React", "Vite", "JavaScript", "Node.js", "Express", "Claude API", "Chrome Extension (Manifest V3)"],
    image: "images/project/main/guider.png",
    hasPaper: true,
    hasAward: true,
    hasCertificate: true,
    status: null,
    hasDetailModal: true,
    detailData: {
      highlight: "온라인 서비스의 메뉴와 기능은 점점 복잡해지고 있지만, 사용자가 막히는 지점은 기능을 몰라서가 아니라 지금 화면에서 어디를 눌러야 하는지 모른다는 데 있다. Guider는 웹사이트를 수정하지 않고도 현재 페이지의 DOM 구조를 분석해, 사용자의 질문을 실제 클릭 위치와 연결하는 범용 AI 가이드다.",
      techCategories: [
        {
          category: "Frontend",
          icon: "fab fa-react",
          items: ["React", "Vite", "JavaScript", "Chrome Extension Manifest V3"]
        },
        {
          category: "Backend",
          icon: "fab fa-node-js",
          items: ["Node.js", "Express", "Claude API"]
        },
        {
          category: "Deployment",
          icon: "fab fa-chrome",
          items: ["Chrome Web Store (예정)", "GitHub"]
        }
      ],
      overview: [
        "Guider는 공공·대학·병원·금융 사이트처럼 기관 중심 메뉴 구조와 낯선 UI 때문에 사용자가 원하는 기능을 찾지 못하고 이탈하는 문제를 해결하기 위해 기획되었다. 기존 챗봇은 답변을 텍스트로 설명만 할 뿐 사용자가 다시 화면에서 메뉴를 찾아야 하고, WalkMe 같은 가이드 솔루션은 운영자가 시나리오를 미리 설정해야 하며, AI Agent는 결제·개인정보 등 민감한 작업을 대신 수행하다 오작동·정보 노출 위험이 있다.",
        "Guider는 AI가 대신 행동하지 않고, 사용자가 직접 보고 판단해 클릭할 수 있도록 화면 위에 화살표로 안내함으로써 이 세 가지 방식의 한계를 보완한다."
      ],
      details: [
        {
          title: "개발 범위",
          icon: "fas fa-project-diagram",
          content: "문제 정의 및 사용자 리서치(디지털 취약계층 웹 이용 실태 분석)부터 DOM 구조 기반 클릭 요소 추출·요약 로직 설계, LLM 연동을 통한 의도 분석 및 요소 매칭, 화면 화살표 인디케이터 렌더링까지 크롬 확장 프로그램의 전체 개발 라이프사이클을 다루었습니다. 정부·대학·클래스넷 등 4개 사이트에서 실제 시연을 진행하고, 50명을 대상으로 한 탐색 효율성 실험과 사용성 설문을 반영해 고도화했습니다."
        },
        {
          title: "DOM 구조 분석 엔진",
          icon: "fas fa-sitemap",
          content: "웹페이지의 DOM 구조를 실시간으로 파싱해 버튼·링크·입력창 등 클릭 가능한 요소를 추출하고, 불필요한 정보를 제거해 핵심 구조만 요약하는 경량화 로직을 구현했습니다. 별도의 SDK 삽입이나 사이트 개편 없이 현재 페이지만으로 클릭 후보를 추출하는 Zero-Config 방식으로 설계했습니다."
        },
        {
          title: "AI 의도 매칭 (Claude API 연동)",
          icon: "fas fa-brain",
          content: "사용자의 자연어 질문과 추출된 DOM 요약 정보를 Claude API에 전달해, 질문 의도에 가장 적합한 클릭 요소를 판별하는 프롬프트를 설계하고 응답을 파싱하는 로직을 구현했습니다."
        },
        {
          title: "Frontend / 화살표 인디케이터 렌더링",
          icon: "fab fa-react",
          content: "React + Vite 기반 사이드패널 UI와 매칭된 요소의 화면 좌표를 계산해 실제 화면 위에 시각적 화살표를 오버레이하는 Manifest V3 크롬 확장 프로그램을 구현했습니다. 사용자가 AI Agent처럼 대신 작업을 수행받는 것이 아니라, 클릭 위치만 안내받아 직접 판단하고 실행하도록 설계해 오작동·정보 노출 리스크를 최소화했습니다."
        },
        {
          title: "Backend",
          icon: "fab fa-node-js",
          content: "Node.js/Express 서버(server/index.js)를 통해 Claude API 요청을 중계하고, 확장 프로그램과 AI 응답 간의 통신을 처리했습니다."
        }
      ],
      outcome: "50명을 대상으로 한 실사용 테스트에서 과제 성공률 100%, 평균 완료시간 79% 감소, 평균 오클릭 0.4회를 기록했습니다. 사용 후 설문에서 만족도 4.6/5.0, 재사용 의사 100%를 달성했으며, 이 결과를 토대로 B2C/B2B/B2G/Data B2B 4가지 확장 비즈니스 모델을 제안했습니다."
    },
    detail:
      "Guider는 사용자가 입력한 자연어 질문을 페이지 DOM과 매칭해, 다음에 클릭할 요소를 화살표로 안내해주는 Zero-Config AI 웹 내비게이터입니다.",
  },
  {
    id: 14,
    title: "RE:FACTORY",
    description:
      "소스코드의 AST를 추출해 인터랙티브 그래프로 시각화하고 LLM 기반 의미 분석으로 코드 품질 평가와 리팩토링 인사이트를 제공하는 코드 분석 플랫폼",
    tech: ["React", "TS", "NestJS", "MySQL", "Docker", "AWS"],
    image: "images/project/main/refactory.png",
    hasPaper: true,
    hasAward: true,
    hasCertificate: true,
    status: "진행중",
    detail:
      "RE:FACTORY는 AST 기반 코드 구조 시각화와 LLM 의미 분석을 결합해 코드 품질을 평가하고 리팩토링 방향을 제안하는 코드 분석 플랫폼입니다.",
  },
  {
    id: 2,
    title: "N.O.D.E",
    subtitle: "Network Of Developer Evolution",
    description:
      "4명의 동기들이 함께 기획·디자인·개발 전 과정을 직접 수행한 팀 포트폴리오 웹사이트 프로젝트",
    tech: ["HTML", "CSS", "JS", "PHP", "AWS"],
    image: "images/project/main/node.png",
    hasPaper: false,
    hasAward: true,
    hasCertificate: true,
    status: null,
    siteUrl: "http://nodefolio.co.kr/",
    hasDetailModal: true,
    detailData: {
      highlight: "대학교 자기주도학습 개발 동아리에서 실제 웹 개발, 협업, 배포를 경험하며 만든 팀 포트폴리오 웹사이트 프로젝트",
      techCategories: [
        {
          category: "Frontend",
          icon: "fab fa-react",
          items: ["React", "HTML", "CSS", "JavaScript"]
        },
        {
          category: "Backend",
          icon: "fab fa-php",
          items: ["PHP"]
        },
        {
          category: "Deployment",
          icon: "fab fa-aws",
          items: ["AWS"]
        }
      ],
      overview: [
        "N.O.D.E는 대학교 자기주도학습 동아리에서 실전 웹 개발 경험을 쌓기 위해 진행한 팀 기반 웹 포트폴리오 프로젝트입니다.",
        "단순한 정적 페이지를 넘어, 실제 개발 워크플로우를 반영한 완전한 구조의 배포 가능한 웹 서비스를 구축하는 것이 목표였습니다."
      ],
      details: [
        {
          title: "개발 범위",
          icon: "fas fa-project-diagram",
          content: "기획, UI/UX 디자인, 프론트엔드 및 백엔드 구현, 데이터베이스 연동, 배포, 최적화까지 웹 개발의 전체 라이프사이클을 다루었습니다."
        },
        {
          title: "Frontend 구현",
          icon: "fab fa-react",
          content: "React를 활용한 컴포넌트 기반 아키텍처로 개발하여, 네비게이션 바, 프로젝트 카드, 반응형 레이아웃 등 재사용 가능한 UI 컴포넌트를 구현했습니다. SPA(Single Page Application) 방식의 라우팅으로 페이지 전체 리로드 없이 부드러운 페이지 전환을 구현했습니다."
        },
        {
          title: "반응형 디자인",
          icon: "fas fa-mobile-alt",
          content: "데스크톱, 태블릿, 모바일 기기에서 원활하게 작동하도록 반응형 웹 디자인에 특별히 신경을 썼습니다."
        },
        {
          title: "Backend 구현",
          icon: "fab fa-node-js",
          content: "Node.js와 Express를 사용해 RESTful API를 구축하고, JWT를 활용한 인증을 구현했습니다. MySQL 또는 MongoDB로 데이터를 저장·관리하며, Prisma나 Mongoose 같은 ORM 도구를 사용해 유지보수성과 확장성을 높였습니다."
        },
        {
          title: "배포 및 최적화",
          icon: "fas fa-rocket",
          content: "Netlify, Vercel, Firebase 등의 플랫폼을 활용해 배포하고, Google Lighthouse를 통해 성능 최적화를 진행했습니다. 여러 차례의 사용자 테스트와 피드백을 통해 UI 디테일, 접근성, 성능을 지속적으로 개선했습니다."
        }
      ],
      outcome: "이 프로젝트를 통해 실제 배포 환경 경험, GitHub을 활용한 팀 협업, 프로덕션 환경에서의 실전 문제 해결 능력을 쌓을 수 있었습니다."
    },
    detail:
      "N.O.D.E는 팀 단위 협업을 통해 완성한 포트폴리오 사이트로, 기획부터 배포까지 전 과정을 경험한 프로젝트입니다.",
  },
  {
    id: 3,
    title: "무색무광",
    subtitle: "無色無光",
    description:
      "신분증과 화이트보드의 빛 반사를 제거해 문자·이미지 인식률을 향상시키는 영상 처리 기반 프로젝트",
    tech: ["Python", "OpenCV", "PaddleOCR", "FastAPI", "React"],
    image: "images/project/main/opencv.png",
    hasPaper: false,
    hasAward: true,
    hasCertificate: true,
    status: null,
    hasDetailModal: true,
    detailData: {
      highlight: "OpenCV 멀티프레임 합성을 활용해 문서의 빛 반사(Glare)를 제거하고, PaddleOCR 튜닝을 통해 텍스트 인식률을 극대화한 웹 기반 문서 스캔 솔루션",
      overview: [
        "유광 용지, 신분증, 화이트보드 촬영 시 발생하는 조명 반사(Glare)로 인한 OCR 인식 저하 문제를 해결하기 위한 지능형 문서 스캔 웹 솔루션",
        "단일 프레임 보정의 한계를 극복하기 위해 멀티프레임(Multi-frame) 합성 기반 이미지 처리 파이프라인을 설계"
      ],
      role: {
        title: "Full Stack Developer & AI Engineer",
        description: "이미지 처리 파이프라인 설계부터 OCR 튜닝, 웹 서비스 연동까지 전반 담당"
      },
      techImplementation: [
        {
          title: "Computer Vision Pipeline",
          icon: "fas fa-eye",
          items: [
            "OpenCV 기반 멀티프레임 합성 처리",
            "반사광 영역 자동 마스킹 및 복원(Inpainting)",
            "문서 영역 검출 후 정투영(Perspective Warp) 처리"
          ]
        },
        {
          title: "OCR 최적화",
          icon: "fas fa-font",
          items: [
            "PaddleOCR(Server) 도입",
            "한글/영문 혼용 문서 기준 Detection / Recognition 파라미터 튜닝",
            "저해상도 이미지 인식률 개선"
          ]
        },
        {
          title: "Web Service",
          icon: "fas fa-globe",
          items: [
            "FastAPI 기반 비동기 이미지 처리 API",
            "React Drag & Drop UI",
            "처리 전 / 후 이미지 비교 UX 제공"
          ]
        }
      ],
      troubleShooting: [
        {
          title: "반사광으로 인한 OCR 실패",
          problem: "단일 이미지로는 복원이 불가능한 반사 영역 발생",
          solution: "다중 프레임에서 반사 없는 픽셀을 선택적으로 합성",
          result: "반사광 제거 성공률 대폭 향상, OCR 실패율 현저히 감소"
        },
        {
          title: "모바일 OCR 모델 정확도 한계",
          problem: "경량 모델 사용 시 한글·손글씨 인식 품질 저하",
          solution: "Server OCR 모델로 전환, FastAPI 비동기 처리로 성능 병목 최소화",
          result: "실제 서비스 가능한 인식 정확도 확보"
        }
      ]
    },
    detail:
      "무색무광은 영상 처리 기술을 활용하여 빛 반사를 제거하고 인식률을 향상시키는 프로젝트입니다.",
  },
  {
    id: 4,
    title: "careEYE",
    description:
      "노인의 움직임을 실시간 모니터링해 낙상을 빠르게 감지하고 알림으로 알려주는 웹 애플리케이션",
    tech: ["Spring Boot", "React", "Python"],
    image: "images/project/main/careeye.png",
    hasPaper: false,
    hasAward: false,
    hasCertificate: false,
    status: null,
    detail:
      "careEYE는 실시간 행동 감지를 통해 낙상 위험을 감지하고 보호자에게 알림을 제공하는 실버 케어 서비스입니다.",
  },
  {
    id: 5,
    title: "홍천 가뭄 멈춰!!",
    description:
      "데이터사이언스 수업에서 홍천 기상 데이터를 기반으로 한 달 뒤 홍천 지역의 가뭄 가능성을 예측해 제공하는 웹 서비스",
    tech: ["R"],
    image: "images/project/main/datascience.png",
    hasPaper: false,
    hasAward: false,
    hasCertificate: false,
    status: null,
    detail:
      "홍천 가뭄 예측 프로젝트는 기상 데이터 분석을 통해 가뭄 가능성을 예측하는 서비스입니다.",
  },
  {
    id: 7,
    title: "개인 포트폴리오 사이트 제작",
    description:
      "프로젝트와 경력을 정리한 반응형 웹 포트폴리오로, 직관적인 UI를 적용하고 직접 구매한 개인 도메인과 연결했습니다.",
    tech: ["HTML", "CSS", "JS", "JSON"],
    image: "images/project/main/portfolio.png",
    hasPaper: false,
    hasAward: false,
    hasCertificate: false,
    status: "진행중",
    siteUrl: "https://parksungho.com/",
    detail:
      "개인 포트폴리오 사이트는 프로젝트와 경력을 정리한 반응형 웹 포트폴리오입니다.",
  },
  {
    id: 8,
    title: "MusikOnsemiro",
    description:
      "성악을 사랑하는 사람들이 모여 동호회를 소개하고 활동을 홍보하기 위해 제작한 성악 동호회 홍보 웹사이트 제작",
    tech: ["HTML", "CSS", "JS", "PHP", "WordPress"],
    image: "images/project/main/musikonsemiro.png",
    hasPaper: false,
    hasAward: false,
    hasCertificate: false,
    status: ["외주", "진행중"],
    siteUrl: "https://musikonsemiro.com/",
    detail: "MusikOnsemiro는 성악 동호회를 위한 홍보 웹사이트입니다.",
  },
  {
    id: 11,
    title: "홍익대학교 소프트웨어융합학과 공식 홈페이지 개발·유지보수",
    description:
      "학과 소개, 교육과정, 공지사항 등을 통합 관리할 수 있는 공식 홈페이지를 구축하고, 콘텐츠 업데이트·기능 개선·서버 운영까지 전 주기를 담당한 학과 웹사이트 운영 프로젝트",
    tech: ["HTML", "CSS", "JS", "PHP"],
    image: "images/project/main/hongik_sw.png",
    hasPaper: false,
    hasAward: false,
    hasCertificate: false,
    status: ["외주", "진행중"],
    siteUrl: "https://software.hongik.ac.kr/home/",
    detail: "홍익대학교 소프트웨어융합학과 공식 홈페이지 개발 및 유지보수 프로젝트입니다.",
  },
  {
    id: 12,
    title: "메타버스 아카데미 교육 플랫폼 홈페이지 개발·운영",
    description:
      "교육 과정 소개, 수강 신청, 공지사항 기능을 중심으로 한 메타버스 아카데미 홈페이지를 제작하고, 디자인 개편·기능 추가·유지보수를 통해 안정적인 서비스 제공을 수행한 웹 운영 프로젝트",
    tech: ["HTML", "CSS", "JS", "PHP"],
    image: "images/project/main/metaverse.png",
    hasPaper: false,
    hasAward: false,
    hasCertificate: false,
    status: ["외주", "진행중"],
    siteUrl: "https://metaverse.hongik.ac.kr/",
    detail: "메타버스 아카데미 교육 플랫폼 홈페이지 개발 및 운영 프로젝트입니다.",
  },
  {
    id: 9,
    title: "서울대학교 이차전지연구소 플러그인 개발",
    description:
      "서울대학교 이차전지연구소를 위한 맞춤형 워드프레스 플러그인 개발 프로젝트",
    tech: ["JS", "PHP", "WordPress"],
    image: "images/project/main/seoul.png",
    hasPaper: false,
    hasAward: false,
    hasCertificate: false,
    status: ["외주", "진행중"],
    detail:
      "서울대학교 이차전지연구소를 위한 맞춤형 플러그인 개발 프로젝트입니다.",
  },
  {
    id: 10,
    title: "(주)D-1 플러그인 개발",
    description:
      "d-1 회사의 회원관리 DB를 구축·보완하고, 자료 공유와 관리를 위한 자료실 기능을 함께 구현한 웹 서비스",
    tech: ["JS", "PHP", "WordPress"],
    image: "images/project/main/d1.png",
    hasPaper: false,
    hasAward: false,
    hasCertificate: false,
    status: ["외주", "진행중"],
    detail: "(주)D-1을 위한 회원관리 및 자료실 플러그인 개발 프로젝트입니다.",
  },
];

const track = document.querySelector(".projects-track");
const indicator = document.querySelector(".projects-indicator");
const prevBtn = document.querySelector(".projects-nav.prev");
const nextBtn = document.querySelector(".projects-nav.next");

let currentPage = 0;
const cardsPerPage = 3;
const totalPages = Math.ceil(projectsData.length / cardsPerPage);

/* 모바일 슬라이더 상태 */
let isMobileMode = false;
let mobileCurrentIndex = 0;
let mobileContainer = null;
let mobileIndicator = null;
const MOBILE_BREAKPOINT = 768;

/* 카드 렌더링 */
function renderProjects() {
  track.innerHTML = "";

  for (let i = 0; i < totalPages; i++) {
    const page = document.createElement("div");
    page.className = "project-page";

    projectsData
      .slice(i * cardsPerPage, (i + 1) * cardsPerPage)
      .forEach((project) => {
        let statusBadges = "";
        if (project.status) {
          if (Array.isArray(project.status)) {
            statusBadges = project.status
              .map(
                (status, index) =>
                  `<div class="project-status ${status === "외주" ? "status-outsource" : "status-progress"}" style="top: ${12 + index * 36}px;">${status}</div>`,
              )
              .join("");
          } else {
            statusBadges = `<div class="project-status ${project.status === "외주" ? "status-outsource" : "status-progress"}">${project.status}</div>`;
          }
        }

        page.innerHTML += `
          <div class="project-card" data-id="${project.id}">
            <div class="project-image-wrapper">
              <img src="${project.image}" alt="${project.title}">
              ${statusBadges}
            </div>
            <div class="project-body">
              <h3>${project.title}</h3>
              <p>${project.description}</p>
              <div class="project-tags">
                ${project.tech.map((t) => `<span>${t}</span>`).join("")}
              </div>
              <div class="project-actions">
                ${
                  project.hasAward
                    ? `
                  <button class="btn-action btn-award" data-project-id="${project.id}" data-action="award">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <circle cx="12" cy="8" r="6"/>
                      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
                    </svg>
                    <span>상장보기</span>
                  </button>
                `
                    : ""
                }
                ${
                  project.hasPaper
                    ? `
                  <button class="btn-action btn-paper" data-project-id="${project.id}" data-action="paper">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                      <polyline points="10 9 9 9 8 9"/>
                    </svg>
                    <span>논문보기</span>
                  </button>
                `
                    : ""
                }
                ${
                  project.hasCertificate
                    ? `
                  <button class="btn-action btn-certificate" data-project-id="${project.id}" data-action="certificate">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                    </svg>
                    <span>수료증보기</span>
                  </button>
                `
                    : ""
                }
                ${
                  project.siteUrl
                    ? `
                  <a class="btn-action btn-site" href="${project.siteUrl}" target="_blank" rel="noopener noreferrer" data-project-id="${project.id}" data-action="site">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="2" y1="12" x2="22" y2="12"/>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    </svg>
                    <span>사이트보기</span>
                  </a>
                `
                    : ""
                }
              </div>
            </div>
          </div>
        `;
      });

    track.appendChild(page);
  }

  updateUI();
}

/* UI 업데이트 (데스크톱) */
function updateUI() {
  if (isMobileMode) {
    updateMobileUI();
    return;
  }

  track.style.transform = `translateX(-${currentPage * 100}%)`;
  indicator.textContent = `${currentPage + 1} / ${totalPages}`;

  prevBtn.classList.toggle("hidden", currentPage === 0);
  nextBtn.classList.toggle("hidden", currentPage === totalPages - 1);
}

/* 모바일 UI 업데이트 */
function updateMobileUI() {
  if (!mobileContainer) return;

  mobileContainer.style.transform = `translateX(-${mobileCurrentIndex * 100}%)`;

  if (mobileIndicator) {
    mobileIndicator.innerHTML = `<span class="current">${mobileCurrentIndex + 1}</span> / ${projectsData.length}`;
  }

  prevBtn.classList.toggle("hidden", mobileCurrentIndex === 0);
  nextBtn.classList.toggle("hidden", mobileCurrentIndex === projectsData.length - 1);
}

/* 모바일 모드 렌더링 */
function renderMobileProjects() {
  track.innerHTML = "";
  track.classList.add("mobile-mode");

  mobileContainer = document.createElement("div");
  mobileContainer.className = "mobile-cards-container";

  projectsData.forEach((project) => {
    let statusBadges = "";
    if (project.status) {
      if (Array.isArray(project.status)) {
        statusBadges = project.status
          .map(
            (status, index) =>
              `<div class="project-status ${status === "외주" ? "status-outsource" : "status-progress"}" style="top: ${12 + index * 36}px;">${status}</div>`,
          )
          .join("");
      } else {
        statusBadges = `<div class="project-status ${project.status === "외주" ? "status-outsource" : "status-progress"}">${project.status}</div>`;
      }
    }

    const cardHTML = `
      <div class="project-card" data-id="${project.id}">
        <div class="project-image-wrapper">
          <img src="${project.image}" alt="${project.title}">
          ${statusBadges}
        </div>
        <div class="project-body">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="project-tags">
            ${project.tech.map((t) => `<span>${t}</span>`).join("")}
          </div>
          <div class="project-actions">
            ${
              project.hasAward
                ? `
              <button class="btn-action btn-award" data-project-id="${project.id}" data-action="award">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="8" r="6"/>
                  <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
                </svg>
                <span>상장보기</span>
              </button>
            `
                : ""
            }
            ${
              project.hasPaper
                ? `
              <button class="btn-action btn-paper" data-project-id="${project.id}" data-action="paper">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10 9 9 9 8 9"/>
                </svg>
                <span>논문보기</span>
              </button>
            `
                : ""
            }
            ${
              project.hasCertificate
                ? `
              <button class="btn-action btn-certificate" data-project-id="${project.id}" data-action="certificate">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
                <span>수료증보기</span>
              </button>
            `
                : ""
            }
            ${
              project.siteUrl
                ? `
              <a class="btn-action btn-site" href="${project.siteUrl}" target="_blank" rel="noopener noreferrer" data-project-id="${project.id}" data-action="site">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
                <span>사이트보기</span>
              </a>
            `
                : ""
            }
          </div>
        </div>
      </div>
    `;

    mobileContainer.innerHTML += cardHTML;
  });

  track.appendChild(mobileContainer);

  // 모바일 인디케이터 생성
  createMobileIndicator();

  updateMobileUI();
}

/* 모바일 인디케이터 생성 */
function createMobileIndicator() {
  // 기존 인디케이터 숨기기
  if (indicator) {
    indicator.style.display = "none";
  }

  // 모바일 인디케이터가 없으면 생성
  mobileIndicator = document.querySelector(".mobile-indicator");
  if (!mobileIndicator) {
    mobileIndicator = document.createElement("div");
    mobileIndicator.className = "mobile-indicator";
    const projectsSection = document.querySelector(".projects-section");
    const projectsWrapper = document.querySelector(".projects-wrapper");
    if (projectsSection && projectsWrapper) {
      projectsWrapper.insertAdjacentElement("afterend", mobileIndicator);
    }
  }
  mobileIndicator.style.display = "block";
}

/* 데스크톱 모드로 복원 */
function restoreDesktopMode() {
  track.classList.remove("mobile-mode");

  // 모바일 인디케이터 숨기기
  if (mobileIndicator) {
    mobileIndicator.style.display = "none";
  }

  // 데스크톱 인디케이터 표시
  if (indicator) {
    indicator.style.display = "block";
  }

  mobileContainer = null;
  renderProjects();
}

/* 모드 체크 및 전환 */
function checkAndSwitchMode() {
  const wasMobile = isMobileMode;
  isMobileMode = window.innerWidth <= MOBILE_BREAKPOINT;

  if (isMobileMode !== wasMobile) {
    if (isMobileMode) {
      mobileCurrentIndex = 0;
      renderMobileProjects();
    } else {
      currentPage = 0;
      restoreDesktopMode();
    }
  }
}

/* 이벤트 */
prevBtn.addEventListener("click", () => {
  if (isMobileMode) {
    if (mobileCurrentIndex > 0) {
      mobileCurrentIndex--;
      updateMobileUI();
    }
  } else {
    if (currentPage > 0) {
      currentPage--;
      updateUI();
    }
  }
});

nextBtn.addEventListener("click", () => {
  if (isMobileMode) {
    if (mobileCurrentIndex < projectsData.length - 1) {
      mobileCurrentIndex++;
      updateMobileUI();
    }
  } else {
    if (currentPage < totalPages - 1) {
      currentPage++;
      updateUI();
    }
  }
});

/* 리사이즈 이벤트 */
let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(checkAndSwitchMode, 150);
});

/* 이미지 모달 준비 대기 */
function waitForImageModal(callback, maxAttempts = 50) {
  let attempts = 0;
  const checkInterval = setInterval(() => {
    attempts++;
    if (typeof window.openImageModal === 'function') {
      console.log("✅ window.openImageModal is ready!");
      clearInterval(checkInterval);
      callback();
    } else if (attempts >= maxAttempts) {
      console.error("❌ Timeout: window.openImageModal not found after", maxAttempts, "attempts");
      clearInterval(checkInterval);
    }
  }, 100);
}

/* 버튼 클릭 이벤트 핸들러 */
function setupButtonHandlers() {
  document.addEventListener("click", (e) => {
    const button = e.target.closest(".btn-action");

    // 버튼 클릭인 경우
    if (button) {
      const projectId = parseInt(button.dataset.projectId);
      const action = button.dataset.action;

      console.log("🎯 Button clicked - Project ID:", projectId, "Action:", action);

      // 사이트 링크는 기본 동작 허용 (새 탭에서 열림)
      if (action === "site") {
        e.stopPropagation();
        return;
      }

      e.preventDefault();
      e.stopPropagation();

      // IEUM 프로젝트(id: 1)
      if (projectId === 1) {
        if (action === "award") {
          console.log("📸 Opening award images...");
          window.openImageModal([
            "images/project/award/ieum_award_1.png",
            "images/project/award/ieum_award_2.png",
            "images/project/award/ieum_award_3.png",
            "images/project/award/ieum_award_4.png",
          ]);
        } else if (action === "certificate") {
          console.log("🎓 Opening certificate images...");
          window.openImageModal([
            "images/project/listen/ieum_listen_1.png",
            "images/project/listen/ieum_listen_2.png",
            "images/project/listen/ieum_listen_3.png",
            "images/project/listen/ieum_listen_4.png",
          ]);
        } else if (action === "paper") {
          console.log("📄 Opening paper PDFs...");
          window.openPDFModal([
            {
              title: "디지털 시대의 사용자 경험(UX) 개선을 위한 스큐어모피즘 기반 QSCC-II 웹 애플리케이션 연구",
              file: "pdfs/ieum_paper_1.pdf",
              isFirstAuthor: false,
              award: "우수논문상"
            },
            {
              title: "스트레스 기반 생체 전류 리듬 균형화 메커니즘",
              file: "pdfs/ieum_paper_2.pdf",
              isFirstAuthor: true,
              award: "우수논문상"
            }
          ]);
        }
      }

      // Guider 프로젝트(id: 13)
      if (projectId === 13) {
        if (action === "award") {
          console.log("📸 Opening award images...");
          window.openImageModal([
            "images/project/award/guider_award_1.png",
            "images/project/award/guider_award_2.png",
          ]);
        } else if (action === "certificate") {
          console.log("🎓 Opening certificate images...");
          window.openImageModal([
            "images/project/listen/guider_listen_1.png",
          ]);
        } else if (action === "paper") {
          console.log("📄 Opening paper PDFs...");
          window.openPDFModal([
            {
              title: "An LLM-based Web Navigator (Guider) for Effective Information Search on Complex Websites",
              file: "pdfs/guider_paper_1.pdf",
              isFirstAuthor: true,
              isEnglish: true,
              venue: "KSII - 한국인터넷정보학회 - 국제 논문지",
            },
          ]);
        }
      }

      // RE:FACTORY 프로젝트(id: 14)
      if (projectId === 14) {
        if (action === "award") {
          console.log("📸 Opening award images...");
          window.openImageModal([
            "images/project/award/refactory_award_1.png",
            "images/project/award/refactory_award_2.png",
            "images/project/award/refactory_award_3.png",
          ]);
        } else if (action === "certificate") {
          console.log("🎓 Opening certificate images...");
          window.openImageModal([
            "images/project/listen/refactory_listen_1.png",
            "images/project/listen/refactory_listen_2.png",
          ]);
        } else if (action === "paper") {
          console.log("📄 Opening paper PDFs...");
          window.openPDFModal([
            {
              title: "대형 언어 모델들(LLM)과 인간 코드의 품질 비교 분석",
              file: "pdfs/refactory_paper_1.pdf",
              isFirstAuthor: true,
              venue: "ASK-한국정보처리학회",
            },
          ]);
        }
      }

      // N.O.D.E 프로젝트(id: 2)
      if (projectId === 2) {
        if (action === "award") {
          console.log("📸 Opening award images...");
          window.openImageModal([
            "images/project/award/node_award_1.png",
          ]);
        } else if (action === "certificate") {
          console.log("🎓 Opening certificate images...");
          window.openImageModal([
            "images/project/listen/node_listen_1.png",
          ]);
        }
      }

      // 무색무광 프로젝트(id: 3)
      if (projectId === 3) {
        if (action === "award") {
          console.log("📸 Opening award images...");
          window.openImageModal([
            "images/project/award/opencv_award_1.png",
          ]);
        } else if (action === "certificate") {
          console.log("🎓 Opening certificate images...");
          window.openImageModal([
            "images/project/listen/opencv_listen_1.png",
          ]);
        }
      }

      return;
    }

    // 카드 클릭인 경우
    const card = e.target.closest(".project-card");
    if (card) {
      const project = projectsData.find((p) => p.id == card.dataset.id);
      if (project) {
        openProjectModal(project);
      }
    }
  });
}

/* 초기화 */
function init() {
  isMobileMode = window.innerWidth <= MOBILE_BREAKPOINT;

  if (isMobileMode) {
    renderMobileProjects();
  } else {
    renderProjects();
  }
}

init();

// 이미지 모달이 준비될 때까지 기다린 후 이벤트 핸들러 설정
waitForImageModal(setupButtonHandlers);
