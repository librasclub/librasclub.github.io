/*
=================================================================
 SCRIPT.JS - Main Logic for Libra's Club Website
=================================================================

 TABLE OF CONTENTS
 -----------------
 1.0  GLOBAL FUNCTIONS
      1.1  - Translation Logic

 2.0  PAGE INITIALIZATION FUNCTIONS
      2.1  - initMenuPage()
      2.2  - initGalleryPage()
      2.3  - initTeamPage()
      2.4  - initTeamModal()
      2.5  - initFocusMode()
      // Adicione outras funções de inicialização aqui

 3.0  PRIMARY EVENT LISTENER
      3.1  - DOMContentLoaded (executa tudo quando a página carrega)
=================================================================
*/


// =================================================================
// 1.0 GLOBAL FUNCTIONS
// =================================================================

/**
 * 1.1 - Translation Logic
 * Handles language switching and content translation.
 */
function setLanguage(lang) {
    localStorage.setItem('language', lang);
    translatePage();
}

function translatePage() {
    const lang = localStorage.getItem('language') || 'en';
    
    // Translates standard text content
    document.querySelectorAll('[data-translate-key]').forEach(element => {
        const key = element.getAttribute('data-translate-key');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    // Translates placeholder attributes for form fields
    document.querySelectorAll('[data-translate-key-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-key-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
}


// =================================================================
// 2.0 PAGE INITIALIZATION FUNCTIONS
// =================================================================

/**
 * 2.1 - Initializes the Menu Page logic (dropdown selector).
 */
function initMenuPage() {
    const menuSelector = document.getElementById('menu-selector');
    const menuDisplay = document.getElementById('menu-display');

    if (!menuSelector || !menuDisplay || typeof libraMenus === 'undefined') {
        return; // Exit if not on the menu page
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

    const menuKeys = Object.keys(libraMenus);
    menuKeys.forEach(key => {
        const option = document.createElement('option');
        option.value = key;
        const translationKey = `menu_name_${key}`;
        option.setAttribute('data-translate-key', translationKey);
        option.textContent = key;
        menuSelector.appendChild(option);
    });

    menuSelector.addEventListener('change', (event) => {
        displayMenu(event.target.value);
    });

    if (menuKeys.length > 0) {
        displayMenu(menuKeys[0]);
    }
}

/**
 * 2.2 - Initializes the filterable Gallery Page.
 */
function initGalleryPage() {
    const gallerySelector = document.getElementById('gallery-selector');
    const gridContainer = document.getElementById('gallery-grid');
    const lightboxContainer = document.getElementById('lightbox-container');

    if (!gallerySelector || !gridContainer || typeof galleryImages === 'undefined') {
        return; // Exit if not on the gallery page
    }

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

    const categories = [...new Set(galleryImages.map(img => img.category))];
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        const translationKey = `gallery_filter_${category}`;
        option.setAttribute('data-translate-key', translationKey);
        option.textContent = category;
        gallerySelector.appendChild(option);
    });

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

    gallerySelector.addEventListener('change', (event) => {
        filterGallery(event.target.value);
    });

    if (categories.length > 0) {
        filterGallery(categories[0]);
    }
}

/**
 * 2.3 - Initializes the Team Page by generating members from a data file.
 */
function initTeamPage() {
    const container = document.getElementById('team-sections-container');

    if (!container || typeof teamMembers === 'undefined') {
        return; // Exit if not on the team page
    }

    const sections = {
        owners:   { titleKey: 'team_owners_subtitle', members: ['laira'] },
        managers: { titleKey: 'team_managers_subtitle', members: ['hector', 'icoraz', 'amneulix'] },
        crew:     { titleKey: 'team_crew_subtitle', members: ['alairen', 'dekiru', 'dragon', 'galleta', 'koto', 'dezzu', 'loxy', 'lulu', 'nebula', 'papu', 'mcandres', 'chepescm', 'razielsempai', 'ruto', 'rosy', 'siniz', 'veiga', 'youkai', 'naruhishi', 'riku', 'eli',] }
    };

    container.innerHTML = '';

    for (const sectionKey in sections) {
        const section = sections[sectionKey];
        const subtitle = document.createElement('h2');
        subtitle.className = 'team-subtitle';
        subtitle.setAttribute('data-translate-key', section.titleKey);
        container.appendChild(subtitle);
        
        const grid = document.createElement('div');
        grid.className = 'team-grid';
        
        section.members.forEach(memberId => {
            const member = teamMembers.find(m => m.id === memberId);
            if (member) {
                const card = document.createElement('div');
                card.className = 'team-card';
                card.innerHTML = `
                    <img src="${member.imageSrc}" alt="Avatar of ${member.id}" class="team-avatar">
                    <h3 class="team-name" data-translate-key="${member.nameKey}">${member.id}</h3>
                    <p class="team-role" data-translate-key="${member.roleKey}"></p>
                    <p class="team-bio" data-translate-key="${member.bioKey}"></p>
                    <span class="hidden" data-special-drink-key="${member.drinkKey}"></span>
                    <span class="hidden" data-spotify-playlist="${member.spotifyURL}"></span>
                `;
                grid.appendChild(card);
            }
        });
        container.appendChild(grid);
    }
}

/**
 * 2.4 - Initializes the Team Member modal functionality.
 */
function initTeamModal() {
    const teamCards = document.querySelectorAll('.team-card');
    const modal = document.getElementById('team-member-modal');
    
    if (teamCards.length === 0 || !modal) return;

    const modalAvatar = document.getElementById('modal-avatar');
    const modalName = document.getElementById('modal-name');
    const modalRole = document.getElementById('modal-role');
    const modalBio = document.getElementById('modal-bio');
    const modalSpecialDrink = document.getElementById('modal-special-drink');
    const modalSpotifyLink = document.getElementById('modal-spotify-link');
    const closeModalButton = document.getElementById('modal-close-button');

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

    closeModalButton.addEventListener('click', closeModal);
    modal.addEventListener('click', (event) => {
        if (event.target === modal) closeModal();
    });

    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.classList.contains('open')) {
            closeModal();
        }
    });
}

/**
 * 2.5 - Initializes the Focus Mode toggle on the gallery page.
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


// =================================================================
// 3.0 PRIMARY EVENT LISTENER
// =================================================================

/**
 * 3.1 - DOMContentLoaded
 * This runs once the entire page is loaded. It calls all the 
 * necessary initialization functions in the correct order.
 */
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Initialize page-specific content first
    initMenuPage();
    initGalleryPage();
    initTeamPage();
    
    // 2. Initialize components that depend on the content created above
    initTeamModal();
    initFocusMode();
    
    // 3. Finally, translate the entire page
    translatePage();
});