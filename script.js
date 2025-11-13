// Function to set language and save it to session storage (وظيفة لتعيين اللغة وحفظها في تخزين الجلسة)
function setLanguage(lang) {
    console.log('Language selected:', lang);
    sessionStorage.setItem('selectedLanguage', lang);
    const overlay = document.getElementById('language-selection-overlay');
    if (overlay) {
        overlay.classList.add('hidden'); // Hide the language selection overlay
        console.log('Overlay hidden.');
    }
    displayContent(lang); // Display content for the selected language
}

// Function to display content based on selected language (وظيفة لعرض المحتوى بناءً على اللغة المختارة)
function displayContent(lang) {
    // Hide all content sections first (إخفاء جميع أقسام المحتوى أولاً)
    document.getElementById('kurdish-content').classList.add('hidden');
    document.getElementById('arabic-content').classList.add('hidden');
    document.getElementById('english-content').classList.add('hidden'); 
    
    // Show content for the selected language (إظهار المحتوى للغة المختارة)
    if (lang === 'ckb') {
        document.getElementById('kurdish-content').classList.remove('hidden');
        document.documentElement.lang = 'ckb';
        document.body.dir = 'ltr'; /* Kurdish is generally left-to-right */
        console.log('Kurdish content displayed.');
    } else if (lang === 'ar') {
        document.getElementById('arabic-content').classList.remove('hidden');
        document.documentElement.lang = 'ar';
        document.body.dir = 'rtl'; /* Arabic is right-to-left */
        console.log('Arabic content displayed.');
    } else if (lang === 'en') {
        document.getElementById('english-content').classList.remove('hidden');
        document.documentElement.lang = 'en';
        document.body.dir = 'ltr';
        console.log('English content displayed.');
    }
    // Scroll to the top of the page after displaying content (التمرير إلى أعلى الصفحة بعد عرض المحتوى)
    window.scrollTo(0, 0);
}

// Function to send contact email (وظيفة لإرسال بريد إلكتروني للتواصل)
function sendContactEmail(event, lang) {
    event.preventDefault(); // Prevent default form submission (منع الإرسال الافتراضي للنموذج)

    let name, phone, description, subject, body;

    // Determine which form fields to get values from based on language (تحديد حقول النموذج للحصول على القيم منها بناءً على اللغة)
    if (lang === 'ckb') {
        // Prioritize main contact form, then fallback to footer form (إعطاء الأولوية لنموذج الاتصال الرئيسي، ثم نموذج التذييل)
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
    } else if (lang === 'en') {
        name = document.getElementById('name-en-main')?.value || document.getElementById('name-en')?.value;
        phone = document.getElementById('phone-en-main')?.value || document.getElementById('phone-en')?.value;
        description = document.getElementById('description-en-main')?.value || document.getElementById('description-en')?.value;
        subject = 'Printing Inquiry from Rix Printing';
        body = `Sender Name: ${name}\nPhone Number: ${phone}\nDescription: ${description}`;
    }

    const mailtoLink = `mailto:rixprint123@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;

    // Clear the form fields after submission attempt (مسح حقول النموذج بعد محاولة الإرسال)
    if (lang === 'ckb') {
        if (document.getElementById('name-ckb-main')) {
            document.getElementById('name-ckb-main').value = '';
            document.getElementById('phone-ckb-main').value = '';
            document.getElementById('description-ckb-main').value = '';
        }
        if (document.getElementById('name-ckb')) { /* Also clear if it's the footer form */
            document.getElementById('name-ckb').value = '';
            document.getElementById('phone-ckb').value = '';
            document.getElementById('description-ckb').value = '';
        }
    } else if (lang === 'ar') {
        if (document.getElementById('name-ar-main')) {
            document.getElementById('name-ar-main').value = '';
            document.getElementById('phone-ar-main').value = '';
            document.getElementById('description-ar-main').value = '';
        }
        if (document.getElementById('name-ar')) {
            document.getElementById('name-ar').value = '';
            document.getElementById('phone-ar').value = '';
            document.getElementById('description-ar').value = '';
        }
    } else if (lang === 'en') {
        if (document.getElementById('name-en-main')) {
            document.getElementById('name-en-main').value = '';
            document.getElementById('phone-en-main').value = '';
            document.getElementById('description-en-main').value = '';
        }
        if (document.getElementById('name-en')) {
            document.getElementById('name-en').value = '';
            document.getElementById('phone-en').value = '';
            document.getElementById('description-en').value = '';
        }
    }
}

// Check for selected language on page load (التحقق من اللغة المختارة عند تحميل الصفحة)
document.addEventListener('DOMContentLoaded', () => {
    const selectedLang = sessionStorage.getItem('selectedLanguage');
    console.log('DOMContentLoaded - Stored language:', selectedLang);
    const overlay = document.getElementById('language-selection-overlay');
    if (selectedLang) {
        if (overlay) {
            overlay.classList.add('hidden'); // Hide overlay on load if language is stored
            console.log('Overlay hidden on load due to stored language.');
        }
        displayContent(selectedLang); // Display content for stored language
    } else {
        if (overlay) {
            overlay.classList.remove('hidden'); // Show overlay if no language stored
            console.log('No stored language, showing overlay.');
        }
    }
});


// 🌐 Floating Language Button Logic
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('language-button');
    const dropdown = document.getElementById('language-dropdown');
    const currentLangName = document.getElementById('current-language-name');
    const storedLang = sessionStorage.getItem('selectedLanguage') || 'ckb';
    
    function updateLangLabel(lang) {
        if (!currentLangName) return;
        if (lang === 'ckb') currentLangName.textContent = 'کوردی';
        else if (lang === 'ar') currentLangName.textContent = 'عربي';
        else currentLangName.textContent = 'English';
    }
    updateLangLabel(storedLang);

    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('hidden');
    });

    document.addEventListener('click', (e) => {
        if (!btn.contains(e.target)) dropdown.classList.add('hidden');
    });

    const originalSetLanguage = window.setLanguage;
    window.setLanguage = function(lang) {
        originalSetLanguage(lang);
        updateLangLabel(lang);
        dropdown.classList.add('hidden');
    };
});
