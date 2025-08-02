// ====== INÍCIO DO CÓDIGO DO MENU ======
document.addEventListener('DOMContentLoaded', () => {
    const buttonContainer = document.querySelector('.button-container');
    const menuDisplay = document.getElementById('menu-display');

    if (buttonContainer && menuDisplay) {
        Object.keys(libraMenus).forEach(key => {
            const menu = libraMenus[key];
            const button = document.createElement('button');
            button.className = 'menu-button';
            button.textContent = menu.name;
            button.onclick = () => showMenu(key, button);
            buttonContainer.appendChild(button);
        });

        const createDrinkHTML = (drink) => {
            return `<div class="drink-item"><p class="drink-name">${drink.name}</p></div>`;
        };

        const showMenu = (menuKey, clickedButton) => {
            menuDisplay.innerHTML = '';
            document.querySelectorAll('.menu-button').forEach(btn => btn.classList.remove('active'));
            clickedButton.classList.add('active');
            const menuData = libraMenus[menuKey];
            Object.keys(menuData.categories).forEach(categoryName => {
                const categoryTitle = document.createElement('h2');
                categoryTitle.className = 'category-title';
                categoryTitle.textContent = categoryName;
                menuDisplay.appendChild(categoryTitle);
                const drinks = menuData.categories[categoryName];
                drinks.forEach(drink => {
                    menuDisplay.innerHTML += createDrinkHTML(drink);
                });
            });
        };

        const firstButton = document.querySelector('.menu-button');
        if (firstButton) {
            const firstMenuKey = Object.keys(libraMenus)[0];
            showMenu(firstMenuKey, firstButton);
        }
    }
});
// ====== FIM DO CÓDIGO DO MENU ======


// ====== INÍCIO DO CÓDIGO DE TRADUÇÃO ======
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

// --- LÓGICA DO MODO FOCO PARA A GALERIA ---
document.addEventListener('DOMContentLoaded', () => {
    const focusButton = document.getElementById('focus-mode-button');

    // Apenas executa se o botão existir na página
    if (focusButton) {
        focusButton.addEventListener('click', () => {
            // Adiciona ou remove a classe 'focus-mode' do body
            document.body.classList.toggle('focus-mode');

            // Troca o ícone entre expandir e compactar
            const icon = focusButton.querySelector('i');
            if (icon.classList.contains('fa-expand')) {
                icon.classList.remove('fa-expand');
                icon.classList.add('fa-compress');
            } else {
                icon.classList.remove('fa-compress');
                icon.classList.add('fa-expand');
            }
        });
    }
});


// --- LÓGICA DO MODAL DA EQUIPA ---
document.addEventListener('DOMContentLoaded', () => {
    const teamCards = document.querySelectorAll('.team-card');
    const modal = document.getElementById('team-member-modal');
    
    // Apenas executa se existirem cartões da equipa na página
    if (teamCards.length > 0 && modal) {
        const modalAvatar = document.getElementById('modal-avatar');
        const modalName = document.getElementById('modal-name');
        const modalRole = document.getElementById('modal-role');
        const modalBio = document.getElementById('modal-bio');
        const closeModalButton = document.getElementById('modal-close-button');

        teamCards.forEach(card => {
            card.addEventListener('click', () => {
                // Pega os dados do cartão clicado
                const avatarSrc = card.querySelector('.team-avatar').src;
                const nameKey = card.querySelector('.team-name').getAttribute('data-translate-key');
                const roleKey = card.querySelector('.team-role').getAttribute('data-translate-key');
                const bioKey = card.querySelector('.team-bio').getAttribute('data-translate-key');

                // Pega o idioma atual para obter o texto traduzido
                const lang = localStorage.getItem('language') || 'en';

                // Preenche o modal com os dados
                modalAvatar.src = avatarSrc;
                modalName.textContent = translations[lang][nameKey];
                modalRole.textContent = translations[lang][roleKey];
                modalBio.textContent = translations[lang][bioKey];

                // Abre o modal
                modal.classList.add('open');
            });
        });

        // Função para fechar o modal
        function closeModal() {
            modal.classList.remove('open');
        }

        closeModalButton.addEventListener('click', closeModal);
        // Fecha também ao clicar no fundo escuro
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                closeModal();
            }
        });
    }
});



// Quando a página termina de carregar, ela traduz tudo automaticamente
document.addEventListener('DOMContentLoaded', translatePage);

    /*<div class="drink-details">
                    ${drink.type ? `<p class="alcohol-type">${drink.type}</p>` : ''}
                    <dl>
                        <dt>Alcohol:</dt><dd>${drink.alcohol || '-'}</dd>
                        <dt>Base:</dt><dd>${drink.base || '-'}</dd>
                        <dt>Flavors:</dt><dd>${drink.flavors || '-'}</dd>
                        <dt>Extras:</dt><dd>${drink.extras || '-'}</dd>
                        <dt>Glass:</dt><dd>${drink.glass || '-'}</dd>
                    </dl>
    */