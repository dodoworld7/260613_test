document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('activateBtn');
    const terminal = document.getElementById('terminal');
    const terminalText = document.getElementById('terminalText');
    
    const lines = [
        "> J.A.R.V.I.S 메인 프레임 접속 중...",
        "> 환경 변수 로드 완료",
        "> Vibe Coding 엔진 가동",
        "> 물리 엔진 동기화... 완벽합니다.",
        "> 사용자 뇌파 동기화 진행 중... [||||||||||] 100%",
        "> 미스터 도현님, 환영합니다.",
        "> 창의성 부스트 모드가 활성화되었습니다.",
        "> 코딩을 시작할 준비가 완료되었습니다. 전방에 커피 한 잔이 준비되어 있는지 확인하십시오. 😎"
    ];

    btn.addEventListener('click', () => {
        terminal.classList.add('active');
        terminalText.innerHTML = '';
        
        let lineIndex = 0;
        
        function typeLine() {
            if (lineIndex < lines.length) {
                const p = document.createElement('p');
                terminalText.appendChild(p);
                
                let charIndex = 0;
                const text = lines[lineIndex];
                
                function typeChar() {
                    if (charIndex < text.length) {
                        p.innerHTML += text.charAt(charIndex);
                        charIndex++;
                        setTimeout(typeChar, 30);
                    } else {
                        lineIndex++;
                        setTimeout(typeLine, 600);
                    }
                }
                typeChar();
            } else {
                setTimeout(() => {
                    terminal.classList.remove('active');
                }, 4000);
            }
        }
        
        setTimeout(typeLine, 500);
    });
});
