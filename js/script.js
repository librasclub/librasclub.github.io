// =========================================================================
// FUNÇÕES GLOBAIS DE TRADUÇÃO
// =========================================================================

// Função para definir o idioma
function setLanguage(lang) {
    localStorage.setItem('language', lang); // Salva a escolha do idioma
    translatePage();
}

// Função que faz a mágica da tradução
function translatePage() {
    const lang = localStorage.getItem('language') || 'en'; // Pega o idioma salvo ou usa 'en'
    
    // Encontra todos os elementos com a nossa "etiqueta invisível"
    document.querySelectorAll('[data-translate-key]').forEach(element => {
        const key = element.getAttribute('data-translate-key');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}


// =========================================================================
// INICIALIZAÇÃO PRINCIPAL APÓS O CARREGAMENTO DA PÁGINA
// =========================================================================

document.addEventListener('DOMContentLoaded', () => {
    
    // --- LÓGICA DA PÁGINA DE CARDÁPIO (COM MENU SUSPENSO) ---
    const menuSelector = document.getElementById('menu-selector');
    const menuDisplay = document.getElementById('menu-display');

    if (menuSelector && menuDisplay && typeof libraMenus !== 'undefined') {

        // Função para mostrar um cardápio específico
        function displayMenu(menuKey) {
            const menu = libraMenus[menuKey];
            if (!menu) return;

            // Limpa o conteúdo anterior
            menuDisplay.innerHTML = '';

            // Cria o HTML para cada categoria e bebida
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
        }

        // Função para popular o menu suspenso
        function populateMenuSelector() {
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

            // Mostra o primeiro cardápio da lista por padrão
            if (menuKeys.length > 0) {
                displayMenu(menuKeys[0]);
            }
        }

        populateMenuSelector();
    }


    // --- LÓGICA DO MODO FOCO PARA A GALERIA ---
    const focusButton = document.getElementById('focus-mode-button');
    if (focusButton) {
        focusButton.addEventListener('click', () => {
            document.body.classList.toggle('focus-mode');
            const icon = focusButton.querySelector('i');
            icon.classList.toggle('fa-expand');
            icon.classList.toggle('fa-compress');
        });
    }


    // --- LÓGICA DO MODAL DA EQUIPA ---
    const teamCards = document.querySelectorAll('.team-card');
    const modal = document.getElementById('team-member-modal');
    if (teamCards.length > 0 && modal) {
        const modalAvatar = document.getElementById('modal-avatar');
        const modalName = document.getElementById('modal-name');
        const modalRole = document.getElementById('modal-role');
        const modalBio = document.getElementById('modal-bio');
        const closeModalButton = document.getElementById('modal-close-button');

        teamCards.forEach(card => {
            card.addEventListener('click', () => {
                const avatarSrc = card.querySelector('.team-avatar').src;
                const nameKey = card.querySelector('.team-name').getAttribute('data-translate-key');
                const roleKey = card.querySelector('.team-role').getAttribute('data-translate-key');
                const bioKey = card.querySelector('.team-bio').getAttribute('data-translate-key');
                const lang = localStorage.getItem('language') || 'en';

                modalAvatar.src = avatarSrc;
                modalName.textContent = translations[lang][nameKey] || card.querySelector('.team-name').textContent;
                modalRole.textContent = translations[lang][roleKey] || card.querySelector('.team-role').textContent;
                modalBio.textContent = translations[lang][bioKey] || card.querySelector('.team-bio').textContent;

                modal.classList.add('open');
            });
        });

        function closeModal() {
            modal.classList.remove('open');
        }

        closeModalButton.addEventListener('click', closeModal);
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                closeModal();
            }
        });
    }

    // --- EXECUTA A TRADUÇÃO INICIAL ---
    translatePage();
});