// Function to set language and save it to session storage
function setLanguage(lang) {
    console.log('Language selected:', lang);
    sessionStorage.setItem('selectedLanguage', lang);
    const overlay = document.getElementById('language-selection-overlay');
    if (overlay) overlay.classList.add('hidden'); // Hide overlay
    displayContent(lang); // Show content
}

// Function to display content based on selected language
function displayContent(lang) {
    // Hide all content sections
    document.getElementById('kurdish-content').classList.add('hidden');
    document.getElementById('arabic-content').classList.add('hidden');
    document.getElementById('english-content').classList.add('hidden'); 

    // Show content for the selected language
    if (lang === 'ckb') {
        document.getElementById('kurdish-content').classList.remove('hidden');
        document.documentElement.lang = 'ckb';
        document.body.dir = 'ltr';
    } else if (lang === 'ar') {
        document.getElementById('arabic-content').classList.remove('hidden');
        document.documentElement.lang = 'ar';
        document.body.dir = 'rtl';
    } else if (lang === 'en') {
        document.getElementById('english-content').classList.remove('hidden');
        document.documentElement.lang = 'en';
        document.body.dir = 'ltr';
    }

    // Scroll to top after switching
    window.scrollTo(0, 0);
}

// Function to send contact email
function sendContactEmail(event, lang) {
    event.preventDefault();

    let name, phone, description, subject, body;

    if (lang === 'ckb') {
        name = document.getElementById('name-ckb-main')?.value || document.getElementById('name-ckb')?.value;
        phone = document.getElementById('phone-ckb-main')?.value || document.getElementById('phone-ckb')?.value;
        description = document.getElementById('description-ckb-main')?.value || document.getElementById('description-ckb')?.value;
        subject = 'داواکاری چاپ لە Rix Printing';
        body = `ناوی ناردن: ${name}\nژمارەی مۆبایل: ${phone}\nوەسف: ${description}`;
    } else if (lang === 'ar') {
        name = document.getElementById('name-ar-main')?.value || document.getElementById('name-ar')?.value;
        phone = document.getElementById('phone-ar-main')?.value || document.getElementById('phone-ar')?.value;
        description = document.getElementById('description-ar-main')?.value || document.getElementById('description-ar')?.value;
        subject = 'طلب طباعة من Rix Printing';
        body = `اسم المرسل: ${name}\nرقم الهاتف: ${phone}\nالوصف: ${description}`;
    } else {
        name = document.getElementById('name-en-main')?.value || document.getElementById('name-en')?.value;
        phone = document.getElementById('phone-en-main')?.value || document.getElementById('phone-en')?.value;
        description = document.getElementById('description-en-main')?.value || document.getElementById('description-en')?.value;
        subject = 'Printing Inquiry from Rix Printing';
        body = `Sender Name: ${name}\nPhone Number: ${phone}\nDescription: ${description}`;
    }

    const mailtoLink = `mailto:rixprint123@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
}

// Floating button to switch language
function createLanguageSwitcher() {
    const btn = document.createElement('button');
    btn.id = 'language-switcher';
    btn.innerHTML = '<i class="fas fa-globe"></i>';
    btn.title = 'Change Language';
    btn.onclick = () => {
        sessionStorage.removeItem('selectedLanguage');
        location.reload(); // Show overlay again
    };
    document.body.appendChild(btn);
}

document.addEventListener('DOMContentLoaded', () => {
    let selectedLang = sessionStorage.getItem('selectedLanguage');
    const overlay = document.getElementById('language-selection-overlay');

    // Default to Kurdish if no language is saved
    if (!selectedLang) {
        selectedLang = 'ckb';
        sessionStorage.setItem('selectedLanguage', 'ckb');
        console.log('Default language set to Kurdish.');
    }

    if (overlay) overlay.classList.add('hidden');
    displayContent(selectedLang);
    createLanguageSwitcher(); // 🔹 يضيف الزر في الأعلى
});

