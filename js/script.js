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
        const tabsContainer = document.getElementById('menu-tabs');
        const menuDisplay = document.getElementById('menu-display');

        if (!menuDisplay || typeof libraMenus === 'undefined') {
            return; // Sai se não for a página do menu
        }

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

        // Lógica para o SELETOR (DROPDOWN) - RESTAURADA
        if (menuSelector) {
            const menuKeys = Object.keys(libraMenus);
            menuKeys.forEach(key => {
                const option = document.createElement('option');
                option.value = key;
                option.textContent = libraMenus[key].name;
                menuSelector.appendChild(option);
            });
            menuSelector.addEventListener('change', (event) => {
                displayMenu(event.target.value);
            });
            if (menuKeys.length > 0) {
                displayMenu(menuKeys[0]);
            }
        }
        // Lógica para as ABAS (TABS)
        else if (tabsContainer) {
            const menuKeys = Object.keys(libraMenus);
            menuKeys.forEach(key => {
                const button = document.createElement('button');
                button.className = 'tab-button';
                button.textContent = libraMenus[key].name;
                button.dataset.menuKey = key;

                button.addEventListener('click', () => {
                    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
                    button.classList.add('active');
                    displayMenu(key);
                });
                tabsContainer.appendChild(button);
            });
            const firstTab = tabsContainer.querySelector('.tab-button');
            if (firstTab) {
                firstTab.classList.add('active');
                displayMenu(firstTab.dataset.menuKey);
            }
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

            const closeModal = () => modal.classList.remove('open');
            closeModalButton.addEventListener('click', closeModal);
            modal.addEventListener('click', (event) => {
                if (event.target === modal) closeModal();
            });
        }
    }


    

    // --- Executa todas as inicializações ---
    initMenuPage();
    initFocusMode();
    initTeamModal();
    translatePage();
});