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
    
    const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    
    async function animateSequence(containerId, isOpening) {
        const container = document.getElementById(containerId);
        const vLines = container.querySelectorAll('.anim-line-v');
        const hLines = container.querySelectorAll('.anim-line-h');
        const cards = container.querySelectorAll('.child-anim-card');
        const row = container.querySelector('[id$="-row"]');
        const cols = Array.from(row ? row.querySelectorAll('.child-col') : []);
        
        if (isOpening) {
            container.classList.remove('collapsed');
            
            if(vLines[0]) { vLines[0].classList.add('draw'); }
            await wait(20); 
            
            hLines.forEach(l => l.classList.add('draw'));
            await wait(20); 
            
            cards.forEach(card => {
                if(!card.closest('.child-col')) card.classList.add('visible');
            });
            await wait(20); 
            
            for(let i=1; i<vLines.length; i++) vLines[i].classList.add('draw');
            await wait(30); 
            
            if(cols.length > 0) {
                let sortedCols = [];
                let centerIdx;
                if(containerId === 'operacao-tree') {
                    centerIdx = 1; // "Serviços"
                } else {
                    centerIdx = Math.floor(cols.length / 2);
                }
                
                sortedCols.push({ el: cols[centerIdx], idx: centerIdx }); 
                
                let maxDist = Math.max(centerIdx, cols.length - 1 - centerIdx);
                for(let i=1; i <= maxDist; i++) {
                    if(centerIdx - i >= 0) sortedCols.push({ el: cols[centerIdx - i], idx: centerIdx - i });
                    if(centerIdx + i < cols.length) sortedCols.push({ el: cols[centerIdx + i], idx: centerIdx + i });
                }
                
                for (let item of sortedCols) {
                    const col = item.el;
                    const idx = item.idx;
                    
                    if(idx < centerIdx) col.classList.add('trace-right'); 
                    else if(idx > centerIdx) col.classList.add('trace-left'); 
                    else col.classList.add('trace-center'); 
                    
                    await wait(10); 
                    col.classList.add('trace-v');
                    await wait(10); 
                    
                    // MOSTRA TODOS OS CARDS NA COLUNA SEQUENCIALMENTE
                    const cardsInCol = col.querySelectorAll('.card');
                    const connectors = col.querySelectorAll('.connector-vertical');
                    
                    if(cardsInCol.length > 0) {
                        cardsInCol[0].classList.add('visible');
                        await wait(10); 
                    }
                    
                    for(let i = 1; i < cardsInCol.length; i++) {
                        if (connectors[i-1]) {
                            connectors[i-1].style.height = '30px'; 
                            await wait(10); 
                        }
                        cardsInCol[i].classList.add('visible');
                        await wait(10); 
                    }
                }
            }
            updateAllBorders();
            
        } else {
            if(cols.length > 0) {
                for (let col of cols) {
                    const allCards = col.querySelectorAll('.card');
                    const connectors = col.querySelectorAll('.connector-vertical');
                    
                    allCards.forEach(c => c.classList.remove('visible'));
                    connectors.forEach(c => c.style.height = '0');
                    
                    col.classList.remove('trace-v');
                    col.classList.remove('trace-right', 'trace-left', 'trace-center');
                }
                await wait(20);
            }
            
            cards.forEach(c => c.classList.remove('visible')); 
            vLines.forEach((l, i) => { if(i > 0) l.classList.remove('draw'); });
            await wait(30);
            
            hLines.forEach(l => l.classList.remove('draw'));
            if(vLines[0]) vLines[0].classList.remove('draw');
            
            await wait(150); 
            container.classList.add('collapsed');
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