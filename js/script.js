document.addEventListener('DOMContentLoaded', function() {
    // Elementos principais
    const panContainer = document.getElementById('pan-container');
    const chartContent = document.getElementById('chart-content');
    let currentScale = 1;
    
    // Elementos clicáveis
    const cardFinanceiro = document.getElementById('card-financeiro');
    const cardOperacao = document.getElementById('card-operacao');
    const cardComercial = document.getElementById('card-comercial');
    
    // Estados de expansão
    let finOpen = false;
    let opOpen = false;
    let comOpen = false;
    
    // Funções de atualização
    function updateTransform() { 
        chartContent.style.transform = `scale(${currentScale})`; 
    }
    
    function fitToScreen() {
        const containerW = panContainer.offsetWidth;
        const contentW = 2300; 
        let fitScale = (containerW / contentW);
        if(fitScale > 1) fitScale = 1; 
        currentScale = fitScale;
        updateTransform();
        updateAllBorders(); 
    }
    
    function animateSequence(containerId, isOpening) {
        try {
            const container = document.getElementById(containerId);
            if (!container) return;
            
            const vLines = container.querySelectorAll('.anim-line-v');
            const hLines = container.querySelectorAll('.anim-line-h');
            const cards = container.querySelectorAll('.child-anim-card');
            const connectors = container.querySelectorAll('.connector-vertical');
            const cols = container.querySelectorAll('.child-col');

            if (typeof gsap === 'undefined') {
                alert("Erro: A biblioteca GSAP não carregou. Verifique sua conexão ou recarregue a página sem cache (Ctrl + F5).");
                return;
            }

            const tl = gsap.timeline();
            
            if (isOpening) {
                container.classList.remove('collapsed');
                
                // Calcula e desenha as bordas IMEDIATAMENTE para que elas animem junto com os cards
                updateAllBorders();
                
                // Força o estado inicial
                if (vLines.length > 0) gsap.set(vLines, { scaleY: 0 });
                if (hLines.length > 0) gsap.set(hLines, { scaleX: 0 });
                if (connectors.length > 0) gsap.set(connectors, { scaleY: 0 });
                if (cards.length > 0) gsap.set(cards, { autoAlpha: 0, y: -30 });
                
                // 1. Desce a primeira linha vertical (Tronco principal)
                if (vLines.length > 0) {
                    tl.to(vLines[0], { scaleY: 1, duration: 0.3, ease: "none", clearProps: "scaleY" });
                }
                
                // 2. Estica os braços horizontais a partir do tronco
                if (hLines.length > 0) {
                    tl.to(hLines, { scaleX: 1, duration: 0.2, ease: "none", clearProps: "scaleX" });
                }
                
                // 3. Nasce os cards principais conectados a esses braços/tronco
                const topCards = Array.from(cards).filter(c => !c.closest('.child-col'));
                if (topCards.length > 0) {
                    tl.to(topCards, { autoAlpha: 1, y: 0, duration: 0.4, ease: "back.out(1.5)", stagger: 0.15 });
                }
                
                // 4. Se tiver mais linhas verticais pós-cards, desce elas
                const remainingVLines = Array.from(vLines).slice(1);
                if (remainingVLines.length > 0) {
                    tl.to(remainingVLines, { scaleY: 1, duration: 0.3, ease: "none", clearProps: "scaleY" });
                }
                
                // 5. Ramificação natural das Colunas (Linha -> Card -> Linha -> Card)
                if (cols.length > 0) {
                    const centerIdx = Math.floor(cols.length / 2);
                    const colStartTime = tl.duration(); // Captura o tempo exato onde o tronco terminou de crescer
                    
                    cols.forEach((col, colIdx) => {
                        const distFromCenter = Math.abs(colIdx - centerIdx);
                        let localTime = colStartTime + (distFromCenter * 0.15); // Atraso em "onda" a partir do centro
                        
                        const colElements = Array.from(col.children);
                        
                        // Iteramos de cima para baixo dentro de cada coluna
                        colElements.forEach(el => {
                            if (el.classList.contains('child-anim-card')) {
                                tl.to(el, { autoAlpha: 1, y: 0, duration: 0.4, ease: "back.out(1.5)" }, localTime);
                                localTime += 0.2; // Aguarda o card quase terminar de aparecer para soltar a próxima linha
                            } 
                            else if (el.classList.contains('connector-vertical')) {
                                tl.to(el, { scaleY: 1, duration: 0.2, ease: "none", clearProps: "scaleY" }, localTime);
                                localTime += 0.15; // Aguarda a linha desenhar para disparar o próximo card
                            } 
                            else if (el.classList.contains('log-tree')) {
                                // Exceção para o bloco Logística (Lida com cards complexos agrupados)
                                const nestedCards = el.querySelectorAll('.child-anim-card');
                                if (nestedCards.length > 0) {
                                    tl.to(nestedCards, { autoAlpha: 1, y: 0, duration: 0.4, ease: "back.out(1.5)", stagger: 0.15 }, localTime);
                                    localTime += (nestedCards.length * 0.15) + 0.3;
                                }
                            }
                        });
                    });
                }
            } else {
                if (cards.length > 0) tl.to(cards, { autoAlpha: 0, y: -20, duration: 0.3, ease: "power2.in", stagger: { amount: 0.2, from: "edges" } });
                if (connectors.length > 0) tl.to(connectors, { scaleY: 0, duration: 0.2, ease: "power2.in" }, "-=0.2");
                if (hLines.length > 0) tl.to(hLines, { scaleX: 0, duration: 0.2, ease: "power2.in" }, "-=0.1");
                if (vLines.length > 0) tl.to(vLines, { scaleY: 0, duration: 0.2, ease: "power2.in" }, "-=0.1");
                tl.add(() => container.classList.add('collapsed'));
            }
        } catch (error) {
            console.error("Erro na animação GSAP:", error);
            alert("Erro no GSAP: " + error.message);
        }
    }
    
    // Funções de toggle
    function toggleFin() { 
        finOpen = !finOpen; 
        cardFinanceiro.classList.toggle('expanded');
        animateSequence('financeiro-tree', finOpen); 
    }
    
    function toggleOp() { 
        opOpen = !opOpen; 
        cardOperacao.classList.toggle('expanded');
        animateSequence('operacao-tree', opOpen); 
    }
    
    function toggleCom() { 
        comOpen = !comOpen; 
        cardComercial.classList.toggle('expanded');
        animateSequence('comercial-tree', comOpen); 
    }
    
    // Função para atualizar bordas SVG
    function updateAllBorders() {
        const cards = document.querySelectorAll('.card, .card-small');
        cards.forEach(updateCardBorder);
    }
    
    function updateCardBorder(card) {
        if(card.offsetWidth === 0) return;
        let width = card.classList.contains('card-small') ? 200 : 260;
        let height = card.offsetHeight || 60;
        const svg = card.querySelector('svg');
        if(!svg) return;
        svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
        const bgRect = svg.querySelector('.border-bg');
        const fgRect = svg.querySelector('.border-fg');
        if(bgRect) { 
            bgRect.setAttribute('width', width); 
            bgRect.setAttribute('height', height); 
        }
        if(fgRect) {
            fgRect.setAttribute('width', width); 
            fgRect.setAttribute('height', height);
            const perimeter = 2 * (width + height - 8); 
            const cLength = height + 30; 
            const gapLength = perimeter - cLength;
            fgRect.style.strokeDasharray = `0 ${gapLength} ${cLength} 0`;
            fgRect.style.strokeDashoffset = 0; 
        }
    }
    
    // Adicionar event listeners
    cardFinanceiro.addEventListener('click', toggleFin);
    cardOperacao.addEventListener('click', toggleOp);
    cardComercial.addEventListener('click', toggleCom);
    
    // Inicialização
    window.addEventListener('load', () => {
        fitToScreen();
    });
    
    window.addEventListener('resize', () => { 
        updateAllBorders(); 
    });
    
    // Inicializar atualização de bordas
    setTimeout(updateAllBorders, 100);
});