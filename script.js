// --- 1. NAVIGAZIONE PRINCIPALE (Navbar in basso) ---
function switchSection(sectionId) {
    // Nascondi tutte le sezioni e rimuovi lo stato attivo dai link
    document.querySelectorAll('section').forEach(sec => sec.classList.remove('active-section'));
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    
    // Mostra la sezione selezionata
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active-section');
    }
    
    // Trova il bottone cliccato nella barra e rendilo attivo
    const currentLink = Array.from(document.querySelectorAll('.nav-item'))
        .find(item => item.getAttribute('href') === '#' + sectionId);
    if(currentLink) {
        currentLink.classList.add('active');
    }
}

// --- 2. NAVIGAZIONE INTERNA SEZIONE WORK (Graphic / Video / Photo) ---
function switchWorkTab(event, tabId) {
    // Disattiva tutti i contenuti dei progetti e bottoni della sottosezione
    document.querySelectorAll('.work-content').forEach(content => content.classList.remove('active-content'));
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    
    // Attiva il tab e il relativo bottone
    const targetTab = document.getElementById(tabId);
    if (targetTab) {
        targetTab.classList.add('active-content');
    }
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
}

// --- 3. FUNZIONI PER IL LIGHTBOX (ZOOM) ---
function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    
    if (lightbox && lightboxImg) {
        lightboxImg.src = src;
        lightbox.classList.add('show');
    }
}

// Assicurati che questa funzione sia globale ed accessibile
window.closeLightbox = function() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.remove('show');
    }
}

// --- 4. GENERAZIONE AUTOMATICA DELLE GRIGLIE ---
window.addEventListener('DOMContentLoaded', () => {
    const graphicGrid = document.getElementById('graphic-grid');
    const photographyGrid = document.getElementById('photography-grid');

    // Genera i Box per la sezione Graphic
    if (graphicGrid) {
        const mieGrafiche = [
            'GRAPHIC/Duolingo1.jpg',
            'GRAPHIC/Duolingo2.jpg',
            'GRAPHIC/festival1.png',
            'GRAPHIC/festival2.png',
            'GRAPHIC/festival3.png',
            'GRAPHIC/festival4.png',
            'GRAPHIC/loop1.png',
            'GRAPHIC/loop2.png',
            'GRAPHIC/loop3.png',
            'GRAPHIC/loop4.jpg',
            'GRAPHIC/mondrian1.jpg',
            'GRAPHIC/mondrian2.png',
            'GRAPHIC/poster1.jpg',
            'GRAPHIC/poster2.jpg',
            'GRAPHIC/poster3.jpg',
            'GRAPHIC/poster4.jpg'
        ];

        let graphicHTML = '';
        for (let i = 1; i <= 16; i++) {
            let src = mieGrafiche[i-1] || 'GRAPHIC/grafica' + i + '.jpg'; 
            graphicHTML += `
                <div class="placeholder-box" style="border: none; padding: 0; overflow: hidden; cursor: pointer;" onclick="openLightbox('${src}')">
                    <img src="${src}" alt="">
                </div>`;
        }
        graphicGrid.innerHTML = graphicHTML;
    }

    // Genera i Box per la sezione Photography
    if (photographyGrid) {
        const mieFoto = [
            'PHOTOGRAPHY/foto1.jpg',
            'PHOTOGRAPHY/foto2.jpg',
            'PHOTOGRAPHY/foto3.jpg',
            'PHOTOGRAPHY/foto4.jpg',
            'PHOTOGRAPHY/foto5.jpg',
            'PHOTOGRAPHY/foto6.jpg',
            'PHOTOGRAPHY/foto7.jpg',
            'PHOTOGRAPHY/foto8.jpg',
            'PHOTOGRAPHY/foto9.jpg',
            'PHOTOGRAPHY/foto10.jpg',
            'PHOTOGRAPHY/foto11.jpg',
            'PHOTOGRAPHY/foto12.jpg'
        ];

        let photoHTML = '';
        for (let i = 1; i <= 12; i++) {
            let src = mieFoto[i-1] || 'PHOTOGRAPHY/foto' + i + '.jpg';
            photoHTML += `
                <div class="placeholder-box" style="border: none; padding: 0; overflow: hidden; cursor: pointer;" onclick="openLightbox('${src}')">
                    <img src="${src}" alt="">
                </div>`;
        }
        photographyGrid.innerHTML = photoHTML;
    }

    // Controllo hash URL all'avvio (es: portfolio.com/#about)
    const hash = window.location.hash.replace('#', '');
    if (hash && document.getElementById(hash)) {
        switchSection(hash);
    }
});