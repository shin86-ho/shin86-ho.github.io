document.addEventListener('DOMContentLoaded', () => {
    let selectedLang = sessionStorage.getItem('selectedLanguage');
    const overlay = document.getElementById('language-selection-overlay');

    if (!selectedLang) {
        selectedLang = 'ckb';
        sessionStorage.setItem('selectedLanguage', 'ckb');
    }

    if (overlay) overlay.classList.add('hidden');
    displayContent(selectedLang);
    createLanguageSwitcher();
});

// === Language Display Function ===
function displayContent(lang) {
    document.getElementById('kurdish-content').classList.add('hidden');
    document.getElementById('arabic-content').classList.add('hidden');
    document.getElementById('english-content').classList.add('hidden');

    if (lang === 'ckb') {
        document.getElementById('kurdish-content').classList.remove('hidden');
        document.body.dir = 'ltr';
    } else if (lang === 'ar') {
        document.getElementById('arabic-content').classList.remove('hidden');
        document.body.dir = 'rtl';
    } else {
        document.getElementById('english-content').classList.remove('hidden');
        document.body.dir = 'ltr';
    }
}

// === Create Button and Menu ===
function createLanguageSwitcher() {
    const wrapper = document.createElement('div');
    wrapper.id = 'language-switcher-wrapper';

    const btn = document.createElement('button');
    btn.id = 'language-switcher';
    btn.innerHTML = '<i class="fas fa-globe"></i>';
    wrapper.appendChild(btn);

    const menu = document.createElement('div');
    menu.id = 'language-menu';

    const langs = [
        { code: 'ckb', label: 'کوردی' },
        { code: 'ar', label: 'عربي' },
        { code: 'en', label: 'English' }
    ];

    langs.forEach(l => {
        const item = document.createElement('button');
        item.className = 'language-menu-item';
        item.textContent = l.label;
        item.onclick = () => {
            sessionStorage.setItem('selectedLanguage', l.code);
            displayContent(l.code);
            menu.classList.remove('show');
        };
        menu.appendChild(item);
    });

    wrapper.appendChild(menu);
    document.body.appendChild(wrapper);

    btn.onclick = (e) => {
        e.stopPropagation();
        menu.classList.toggle('show');
    };

    document.addEventListener('click', (e) => {
        if (!wrapper.contains(e.target)) {
            menu.classList.remove('show');
        }
    });
}
