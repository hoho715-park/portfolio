/* ===================================
   Code Rain JS - 코드 비 효과 로직
   =================================== */

/**
 * 코드 스니펫 목록
 */
const codeSnippets = [
    'Hello World', 'console.log()', 'function()', 'const app', 'let data',
    'return true', 'if (true) {}', 'for (i=0)', 'while (run)', '<div></div>',
    '<html>', '{ }', '=> {}', 'npm install', 'git commit', 'git push',
    'async await', 'try catch', 'export default', 'import React',
    'useState()', 'useEffect()', 'fetch(url)', 'axios.get()', 'res.json()',
    'req.body', 'SELECT *', 'INSERT INTO', 'CREATE TABLE', 'docker run',
    'kubectl apply', 'aws s3 sync', 'npm run dev', 'yarn build',
    'python app.py', 'node server.js', 'java -jar', 'mvn clean',
    'gradle build', './deploy.sh', 'chmod +x', 'sudo apt', 'brew install',
    'ping localhost', 'curl -X POST', 'ssh user@host', 'cd /home',
    'mkdir project', 'touch index.js', 'cat .env', 'grep -r', 'ls -la',
    'echo $PATH', 'PORT=3000', '.map()', '.filter()', '.reduce()',
    '.forEach()', 'Promise.all()', 'new Date()', 'JSON.parse()',
    'Object.keys()', 'Array.from()', 'Math.random()', 'parseInt()',
    'toString()', 'addEventListener', 'querySelector', 'getElementById',
    'createElement', 'appendChild', 'innerHTML', 'className', 'onClick',
    'onChange', 'onSubmit', 'setState()', 'props.data', 'this.state',
    'render()', 'useCallback', 'useMemo', 'useRef', 'useContext',
    'dispatch()', 'reducer()', 'middleware', 'bcrypt.hash', 'jwt.sign()',
    'express.Router', 'app.listen()', 'res.status(200)', 'next()', 'cors()',
    'dotenv.config', '200 OK', '404 Not Found', '500 Error', 'POST /api',
    'GET /users', 'PUT /update', 'DELETE /id', 'Bearer token',
    'Content-Type', 'Authorization'
];

/**
 * 코드 비 효과 초기화
 */
function initCodeRain() {
    const codeRain = document.querySelector('.code-rain');
    if (!codeRain) return;
    
    // CSS 애니메이션 추가
    addCodeRainStyles();
    
    // 컬럼 수 계산
    const columns = Math.floor(window.innerWidth / 35);
    
    // 각 컬럼에 코드 드롭 생성
    for (let i = 0; i < columns; i++) {
        createCodeDrop(codeRain, i);
    }
}

/**
 * 코드 비 스타일 추가
 */
function addCodeRainStyles() {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        @keyframes codeRainFall {
            0% { transform: translateY(-100%); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(100vh); opacity: 0; }
        }
    `;
    document.head.appendChild(styleSheet);
}

/**
 * 코드 드롭 생성
 * @param {HTMLElement} container - 컨테이너 요소
 * @param {number} index - 컬럼 인덱스
 */
function createCodeDrop(container, index) {
    const drop = document.createElement('div');
    
    drop.style.cssText = `
        position: absolute;
        left: ${index * 35 + Math.random() * 15}px;
        top: ${Math.random() * -100}%;
        font-family: 'Fira Code', 'Source Code Pro', 'Consolas', 'Monaco', monospace;
        font-size: 11px;
        color: rgba(99, 102, 241, 0.18);
        writing-mode: vertical-rl;
        text-orientation: mixed;
        white-space: nowrap;
        animation: codeRainFall ${10 + Math.random() * 15}s linear infinite;
        animation-delay: ${Math.random() * 8}s;
        pointer-events: none;
        text-shadow: 0 0 8px rgba(99, 102, 241, 0.3);
        letter-spacing: 2px;
    `;
    
    // 랜덤 스니펫 조합
    const numSnippets = 2 + Math.floor(Math.random() * 4);
    let text = '';
    for (let i = 0; i < numSnippets; i++) {
        text += codeSnippets[Math.floor(Math.random() * codeSnippets.length)] + ' ';
    }
    drop.textContent = text.trim();
    
    container.appendChild(drop);
}

// 전역으로 내보내기
window.initCodeRain = initCodeRain;
window.codeSnippets = codeSnippets;