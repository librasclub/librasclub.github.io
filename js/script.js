// =========================================================================
// FUNÇÕES GLOBAIS DE TRADUÇÃO
// =========================================================================

function setLanguage(lang) {
    localStorage.setItem('language', lang);
    translatePage();
}

function translatePage() {
    const lang = localStorage.getItem('language') || 'en';
    document.querySelectorAll('[data-translate-key]').forEach(element => {
        const key = element.getAttribute('data-translate-key');
        if (translations[lang] && translations[lang][key]) {
            // Usamos innerHTML para permitir tags como <strong> nas traduções
            element.innerHTML = translations[lang][key];
        }
    });
}

// =========================================================================
// INICIALIZAÇÃO PRINCIPAL APÓS O CARREGAMENTO DA PÁGINA
// =========================================================================

document.addEventListener('DOMContentLoaded', () => {

    /**
     * INICIALIZA A LÓGICA DA PÁGINA DE MENUS
     */
    function initMenuPage() {
        const menuSelector = document.getElementById('menu-selector');
        const menuDisplay = document.getElementById('menu-display');

        if (!menuSelector || !menuDisplay || typeof libraMenus === 'undefined') {
            return; // Sai se não for a página do menu com dropdown
        }

        // Função que mostra o conteúdo de um menu (sem alterações)
        const displayMenu = (menuKey) => {
            const menu = libraMenus[menuKey];
            if (!menu) return;
            menuDisplay.innerHTML = '';
            for (const categoryName in menu.categories) {
                const categoryTitle = document.createElement('h2');
                categoryTitle.className = 'category-title';
                categoryTitle.textContent = categoryName;
                menuDisplay.appendChild(categoryTitle);
                const drinks = menu.categories[categoryName];
                drinks.forEach(drink => {
                    const drinkItem = document.createElement('div');
                    drinkItem.className = 'drink-item';
                    const drinkName = document.createElement('h3');
                    drinkName.className = 'drink-name';
                    drinkName.textContent = drink.name;
                    drinkItem.appendChild(drinkName);
                    menuDisplay.appendChild(drinkItem);
                });
            }
        };

        // --- MUDANÇA PRINCIPAL AQUI ---
        // Cria as OPÇÕES para o menu suspenso usando TRADUÇÕES
        const menuKeys = Object.keys(libraMenus);
        menuKeys.forEach(key => {
            const option = document.createElement('option');
            option.value = key; // ex: 'temporada1'

            // Constrói a chave de tradução, ex: "menu_name_temporada1"
            const translationKey = `menu_name_${key}`;
            
            // Atribui a "etiqueta de tradução" para que a função translatePage() a encontre
            option.setAttribute('data-translate-key', translationKey);
            option.textContent = key; // Define um texto temporário antes da tradução

            menuSelector.appendChild(option);
        });

        // Adiciona o 'escutador' de evento 'change' (sem alterações)
        menuSelector.addEventListener('change', (event) => {
            displayMenu(event.target.value);
        });

        // Mostra o primeiro menu por padrão (sem alterações)
        if (menuKeys.length > 0) {
            displayMenu(menuKeys[0]);
        }
    }

    /**
     * INICIALIZA O MODO FOCO DA GALERIA
     */
    function initFocusMode() {
        const focusButton = document.getElementById('focus-mode-button');
        if (focusButton) {
            focusButton.addEventListener('click', () => {
                document.body.classList.toggle('focus-mode');
                const icon = focusButton.querySelector('i');
                icon.classList.toggle('fa-expand');
                icon.classList.toggle('fa-compress');
            });
        }
    }

    /**
     * INICIALIZA O MODAL (POP-UP) DA EQUIPA - VERSÃO ATUALIZADA
     */
    function initTeamModal() {
        const teamCards = document.querySelectorAll('.team-card');
        const modal = document.getElementById('team-member-modal');
        
        if (teamCards.length > 0 && modal) {
            const modalAvatar = document.getElementById('modal-avatar');
            const modalName = document.getElementById('modal-name');
            const modalRole = document.getElementById('modal-role');
            const modalBio = document.getElementById('modal-bio');
            const modalSpecialDrink = document.getElementById('modal-special-drink');
            const modalSpotifyLink = document.getElementById('modal-spotify-link');
            const closeModalButton = document.getElementById('modal-close-button');

            // Função para fechar o modal (agora está aqui para ser reutilizada)
            const closeModal = () => modal.classList.remove('open');

            teamCards.forEach(card => {
                card.addEventListener('click', () => {
                    const lang = localStorage.getItem('language') || 'en';
                    const nameKey = card.querySelector('.team-name').getAttribute('data-translate-key');
                    const roleKey = card.querySelector('.team-role').getAttribute('data-translate-key');
                    const bioKey = card.querySelector('.team-bio').getAttribute('data-translate-key');
                    
                    const specialDrinkKey = card.querySelector('[data-special-drink-key]')?.getAttribute('data-special-drink-key');
                    const spotifyLink = card.querySelector('[data-spotify-playlist]')?.getAttribute('data-spotify-playlist');

                    modalAvatar.src = card.querySelector('.team-avatar').src;
                    modalName.innerHTML = translations[lang][nameKey] || '...';
                    modalRole.innerHTML = translations[lang][roleKey] || '...';
                    modalBio.innerHTML = translations[lang][bioKey] || '...';
                    
                    if (specialDrinkKey && translations[lang][specialDrinkKey]) {
                        modalSpecialDrink.innerHTML = translations[lang][specialDrinkKey];
                        modalSpecialDrink.parentElement.style.display = 'block';
                    } else {
                        modalSpecialDrink.parentElement.style.display = 'none';
                    }

                    if (spotifyLink && spotifyLink.trim() !== '' && spotifyLink !== '#') {
                        modalSpotifyLink.href = spotifyLink;
                        modalSpotifyLink.parentElement.style.display = 'block';
                    } else {
                        modalSpotifyLink.parentElement.style.display = 'none';
                    }

                    modal.classList.add('open');
                });
            });

            // Configura os eventos para fechar o modal
            closeModalButton.addEventListener('click', closeModal);
            modal.addEventListener('click', (event) => {
                if (event.target === modal) closeModal();
            });

            // NOVO: Adiciona a funcionalidade de fechar com a tecla ESC
            window.addEventListener('keydown', (event) => {
                if (event.key === 'Escape' && modal.classList.contains('open')) {
                    closeModal();
                }
            });
        }
    }

    function initGalleryPage() {
        const gallerySelector = document.getElementById('gallery-selector');
        const gridContainer = document.getElementById('gallery-grid');
        const lightboxContainer = document.getElementById('lightbox-container');

        if (!gallerySelector || !gridContainer || typeof galleryImages === 'undefined') {
            return;
        }

        // 1. Gera as imagens e lightboxes (sem alterações)
        galleryImages.forEach(img => {
            const gridItem = document.createElement('a');
            gridItem.href = `#${img.id}`;
            gridItem.className = 'gallery-item';
            gridItem.dataset.category = img.category;
            gridItem.innerHTML = `<img src="${img.src}" alt="${img.alt}" loading="lazy">`;
            gridContainer.appendChild(gridItem);

            const lightboxItem = document.createElement('a');
            lightboxItem.href = '#_';
            lightboxItem.className = 'lightbox';
            lightboxItem.id = img.id;
            lightboxItem.innerHTML = `<span style="background-image: url('${img.src}')"></span>`;
            lightboxContainer.appendChild(lightboxItem);
        });

        // 2. Cria as OPÇÕES para o menu suspenso
        // MUDANÇA 1: Removido o 'all' do início da lista de categorias
        const categories = [...new Set(galleryImages.map(img => img.category))];
        
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            
            const translationKey = `gallery_filter_${category}`;
            option.setAttribute('data-translate-key', translationKey);
            option.textContent = category;
            
            gallerySelector.appendChild(option);
        });

        // 3. Função que filtra as imagens (removido o caso 'all')
        function filterGallery(category) {
            const items = gridContainer.querySelectorAll('.gallery-item');
            items.forEach(item => {
                if (item.dataset.category === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        }

        // 4. Adiciona o 'escutador' de evento 'change' (sem alterações)
        gallerySelector.addEventListener('change', (event) => {
            filterGallery(event.target.value);
        });

        // MUDANÇA 2: Filtra pela primeira categoria da lista por padrão
        if (categories.length > 0) {
            filterGallery(categories[0]);
        }
        
        translatePage(); 
    }
    // --- Executa todas as inicializações ---
    initMenuPage();
    initFocusMode();
    initTeamModal();
    translatePage();
    initGalleryPage()
});