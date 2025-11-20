// Rix Printing - Multilingual Website JavaScript

// Language translations
const translations = {
    ckb: {
        'mobile-nav-services': 'خزمەتگوزارییەکان',
        'mobile-nav-designs': 'دیزاین و بەرهەمە جیاوازەکان',
        'mobile-nav-about': 'دەربارەی ئێمە',
        'mobile-nav-partners': 'هاوبەش و کڕیارەکانمان',
        'mobile-nav-contact': 'پەیوەندی',
        'mobile-nav-blog': 'بلاگ',
        'mobile-nav-whatsapp': 'واتساپ',
        'desktop-nav-services': 'خزمەتگوزارییەکان',
        'desktop-nav-designs': 'دیزاینەکان',
        'desktop-nav-about': 'دەربارەی ئێمە',
        'desktop-nav-partners': 'هاوبەش و کڕیارەکانمان',
        'desktop-nav-contact': 'پەیوەندی',
        'desktop-nav-blog': 'بلاگ',
        'hero-title': 'چاپخانەی ریکس بۆ چاپەمەنی گشتی',
        'hero-subtitle': 'ئێمە یارمەتی براندەکان دەدەین بۆ دروستکردنی چاپی جیاواز و سەرنجڕاکێش.',
        'hero-trust': 'متمانە',
        'hero-quality': 'کوالێتی',
        'hero-speed': 'خێرایی',
        'hero-cta': 'دەستپێبکە',
        'services-title': 'خزمەتگوزارییەکانمان',
        'services-subtitle': 'چاپخانەی ڕیکس ئەم خزمەتگوزارییانە پێشکەش دەکات',
        'printing-types': 'جۆرەکانی چاپکردن',
        'offset-printing': '• چاپی ئۆفسێت',
        'digital-printing': '• چاپی دیجیتال',
        'embossing': '• حەرف بارز',
        'uv-dtf': '• UV DTF چاپی',
        'dtf-printing': '• DTF چاپی',
        'tampo-printing': '• چاپی تامپۆ',
        'laser-printing': '• چاپی لێزەر',
        'thermal-printing': '• چاپی حەراری',
        'screen-printing': '• چاپی سکڕین',
        'drum-printing': '• چاپی دروومان',
        'poster-printing': 'چاپکردنی پۆستەر و بانەر',
        'design-print': '• دیزاین و چاپ',
        'large-format': '• چاپکردنی قەبارە گەورە',
        'high-quality': '• کوالێتی بەرز',
        'book-printing': 'چاپکردنی کتێب و گۆڤار',
        'various-designs': '• دیزاین و قەبارەی جیاواز',
        'cover-printing': '• چاپکردنی ناوەوە و بەرگ',
        'card-printing': 'چاپکردنی کارتی بانگهێشت و بزنس',
        'custom-design': '• دیزاینی تایبەت',
        'precise-cutting': '• بڕینی ورد',
        'clothing-printing': 'چاپکردنی جل و بەرگ',
        'direct-printing': '• دروومان و چاپکردنی ڕاستەوخۆ',
        'color-variety': '• ڕەنگ و دیزاینی جیاواز',
        'custom-packaging': 'چاپکردنی کارتۆنی تایبەت',
        'packaging-desc': 'چاپخانەی ڕیکس ڕێگەت پێدەدات چاپکراوی تایبەت بە براندەکەت دیزاین بکەیت و چاپی بکەیت.',
        'designs-title': 'دیزاین و بەرهەمە جیاوازەکان',
        'designs-subtitle': 'بەشی تایبەت بە دیزاین و بەرهەمە جیاوازەکان',
        'designs-booklets': 'Booklets & Catalogs',
        'designs-booklets-desc': 'دیزاین و چاپی کتێبچە و کتالۆگی تایبەت',
        'designs-brochures': 'Brochures',
        'designs-brochures-desc': 'بروشوری ڕیکلامی بە دیزاینی نوێ',
        'designs-business-cards': 'Business Cards',
        'designs-business-cards-desc': 'کارتی کاروباری کراوەسازکراو',
        'designs-calendars': 'Calendars',
        'designs-calendars-desc': 'ساڵنامەی دیواری و مێزی تایبەت',
        'designs-car-stickers': 'Car Stickers',
        'designs-car-stickers-desc': 'ستیکەری ئۆتۆمبێل و شاشە',
        'designs-carbon-forms': 'Carbon Forms',
        'designs-carbon-forms-desc': 'فۆرمە کاربۆنە نەبۆکان',
        'designs-clocks': 'Clocks',
        'designs-clocks-desc': 'کاتژمێری دیواری و مێزی ڕیکلامی',
        'designs-clothing': 'Clothing & Accessories',
        'designs-clothing-desc': 'جل و بەرگ و جەمدانە ڕیکلامیەکان',
        'designs-pens': 'Custom Pens',
        'designs-pens-desc': 'قەڵەمە کراوەسازکراو و تایبەتەکان',
        'designs-desk-sets': 'Desk Sets',
        'designs-desk-sets-desc': 'کۆمەڵەی میزی کار و سەرسێخ',
        'designs-gift-baskets': 'Gift Baskets',
        'designs-gift-baskets-desc': 'دۆرهەنگەری هەنگاو و بەرهەمە تایبەتەکان',
        'designs-envelopes': 'Envelopes',
        'designs-envelopes-desc': 'پاکەتنامەی تایبەت بە براند',
        'designs-flags': 'Flags',
        'designs-flags-desc': 'ئالا و بانەری ڕیکلامی',
        'designs-flyers': 'Flyers',
        'designs-flyers-desc': 'فڵایەری ڕیکلامی بە کوالێتی بەرز',
        'designs-folders': 'Folders',
        'designs-folders-desc': 'فۆڵدەری بەڕگ و بە تایبەت',
        'designs-keychains': 'Keychains',
        'designs-keychains-desc': 'بەرهەمە ھەڵبژاردەی ڕیکلامی',
        'designs-labels': 'Labels & Stickers',
        'designs-labels-desc': 'لێیبڵ و ستیكەری جۆراو جۆر',
        'designs-letterheads': 'Letterheads',
        'designs-letterheads-desc': 'سەرنامەی فەرمی و تایبەت',
        'designs-notepads': 'Notepads',
        'designs-notepads-desc': 'نۆتبڵۆک و دفاترە بچووکەکان',
        'designs-notebooks': 'Notebooks',
        'designs-notebooks-desc': 'نوتبووکی کوردی و ئینگلیزی',
        'designs-small-notepads': 'Small Notepads',
        'designs-small-notepads-desc': 'نوتپادی بچووک و گەورە',
        'designs-our-services': 'Our Services',
        'designs-our-services-desc': 'هەموو خزمەتگوزارییە چاپکردنەکان',
        'designs-food-products': 'Advertising Food Products',
        'designs-food-products-desc': 'بەرهەمە خواردنەوەیی ڕیکلامی',
        'designs-gift-items': 'Advertising Gift Items',
        'designs-gift-items-desc': 'دۆرەفەری ڕیکلامی و هەنگاو',
        'designs-advertising-products': 'Advertising Products',
        'designs-advertising-products-desc': 'هەموو بەرهەمە ڕیکلامیەکان',
        'designs-technology': 'Advertising Technology',
        'designs-technology-desc': 'تەکنەلۆژیای نوێ بۆ ڕیکلام',
        'designs-safety-items': 'Safety Items',
        'designs-safety-items-desc': 'کێش و بەرهەمە سەلامەتیەکان',
        'designs-signs-banners': 'Signs & Banners',
        'designs-signs-banners-desc': 'نیشانە و بانەری گەورە',
        'designs-flyers-d': 'Flyers D',
        'designs-flyers-d-desc': 'فڵایەری دیجیتاڵی و چاپکراو',
        'about-title': 'دەربارەی ئێمە',
        'about-desc1': 'ئێمە، لە چاپخانەی ڕیکس، شانازی دەکەین بە پێشکەشکردنی خزمەتگوزارییەکانی چاپ بە کڕیارە بەڕێزەکانمان.',
        'about-desc2': 'بۆ چەندین ساڵ، پشتگیری کڕیارەکانمان کردووە لە بوارە جیاوازەکانی چاپدا، بە هەوڵدان بۆ بەکارهێنانی تەواوی تواناکانمان بۆ پێشکەشکردنی خزمەتگوزاری چاپکردنی گشتیی کوالێتی بەرز و پێشکەوتوو.',
        'about-trust': 'متمانەپێکراوی',
        'about-quality': 'کوالێتی',
        'about-speed': 'خێرایی',
        'partners-title': 'هاوبەش و کڕیارەکانمان',
        'partners-subtitle': 'کڕیارەکانمان سەرچاوەی هێز و سەرکەوتنمانن',
        'partner-1': 'شركة ريكس للطباعة',
        'partner-1-desc': 'سەرکەوتووترین هاوبەشمان',
        'partner-2': 'شركة البركة للطباعة',
        'partner-2-desc': 'باشترین کڕیار',
        'partner-3': 'مطبعة السليمانية',
        'partner-3-desc': 'هاوبەشێکی جێگیر',
        'partner-4': 'شركة اربيل للطباعة',
        'partner-4-desc': 'کڕیارێکی دائمی',
        'partner-5': 'مطبعة دهوك الحديثة',
        'partner-5-desc': 'هاوبەشێکی گەشەپێدراو',
        'partner-6': 'شركة كركوك للطباعة',
        'partner-6-desc': 'باشترین براند',
        'partner-7': 'مطبعة حلبجة',
        'partner-7-desc': 'شريك موثوق',
        'partner-8': 'شركة الزاخو للطباعة',
        'partner-8-desc': 'عميل مميز',
        'partner-9': 'مطبعة اربيل الدولية',
        'partner-9-desc': 'شريك استراتيجي',
        'partner-10': 'شركة القامشلي للطباعة',
        'partner-10-desc': 'عميل دائم',
        'partner-11': 'مطبعة اربيل الحديثة',
        'partner-11-desc': 'شريك تجاري',
        'partner-12': 'شركة السليمانية للطباعة',
        'partner-12-desc': 'عميل مهم',
        'partner-13': 'مطبعة رانيە',
        'partner-13-desc': 'شريك محلي',
        'partner-14': 'شركة شقلاوة للطباعة',
        'partner-14-desc': 'عميل جديد',
        'partner-15': 'مطبعة سوران',
        'partner-15-desc': 'شريك نشط',
        'partner-16': 'شركة پیرەمەگروون للطباعة',
        'partner-16-desc': 'عميل VIP',
        'partner-17': 'مطبعة شارەسوور',
        'partner-17-desc': 'شريك مميز',
        'partner-18': 'شركة كويسنجق للطباعة',
        'partner-18-desc': 'عميل موثوق',
        'partner-19': 'مطبعة چەمچەماڵ',
        'partner-19-desc': 'شريك فعال',
        'partner-20': 'شركة پیرەمەگروون للطباعة',
        'partner-20-desc': 'عميل دائم',
        'contact-title': 'پەیوەندی لەگەڵمان',
        'contact-subtitle': 'ئامادەیین بۆ یارمەتی دانی براندەکەت',
        'contact-form-title': 'فۆرمی پەیوەندی',
        'contact-form-name': 'ناو',
        'contact-form-phone': 'ژمارەی مۆبایل',
        'contact-form-description': 'وشەسەرەکی داواکەت',
        'contact-form-submit': 'ناردن',
        'contact-info-title': 'زانیاری پەیوەندی',
        'view-map-btn': 'بینینی شوێن لەسەر نەخشە',
        'footer-desc': 'چاپخانەیەکی تایبەت بە چاپەمەنی گشتی لە هەرێمی کوردستان'
    },
    ar: {
        'mobile-nav-services': 'خدماتنا',
        'mobile-nav-designs': 'تصاميم وم products مميزة',
        'mobile-nav-about': 'من نحن',
        'mobile-nav-partners': 'شركاؤنا وعملاؤنا',
        'mobile-nav-contact': 'اتصل بنا',
        'mobile-nav-blog': 'المدونة',
        'mobile-nav-whatsapp': 'واتساب',
        'desktop-nav-services': 'خدماتنا',
        'desktop-nav-designs': 'تصاميمنا',
        'desktop-nav-about': 'من نحن',
        'desktop-nav-partners': 'شركاؤنا وعملاؤنا',
        'desktop-nav-contact': 'اتصل بنا',
        'desktop-nav-blog': 'المدونة',
        'hero-title': 'مطبعة ريكس للطباعة العامة',
        'hero-subtitle': 'نحن نساعد العلامات التجارية على إنشاء طباعة فريدة وجذابة.',
        'hero-trust': 'ثقة',
        'hero-quality': 'جودة',
        'hero-speed': 'سرعة',
        'hero-cta': 'ابدأ الآن',
        'services-title': 'خدماتنا',
        'services-subtitle': 'مطبعة ريكس تقدم هذه الخدمات',
        'printing-types': 'أنواع الطباعة',
        'offset-printing': '• طباعة أوفست',
        'digital-printing': '• طباعة رقمية',
        'embossing': '• حروف بارزة',
        'uv-dtf': '• طباعة UV DTF',
        'dtf-printing': '• طباعة DTF',
        'tampo-printing': '• طباعة تمبيو',
        'laser-printing': '• طباعة ليزر',
        'thermal-printing': '• طباعة حرارية',
        'screen-printing': '• طباعة شاشة',
        'drum-printing': '• طباعة دروم',
        'poster-printing': 'طباعة بوستر وبنر',
        'design-print': '• تصميم وطباعة',
        'large-format': '• طباعة كبيرة الحجم',
        'high-quality': '• جودة عالية',
        'book-printing': 'طباعة كتب ومجلات',
        'various-designs': '• تصاميم وأحجام متنوعة',
        'cover-printing': '• طباعة الغلاف والداخل',
        'card-printing': 'طباعة بطاقات دعوة وأعمال',
        'custom-design': '• تصميم مخصص',
        'precise-cutting': '• قطع دقيق',
        'clothing-printing': 'طباعة ملابس وأقمشة',
        'direct-printing': '• درومان وطباعة مباشرة',
        'color-variety': '• ألوان وتصاميم متنوعة',
        'custom-packaging': 'طباعة كرتون مخصص',
        'packaging-desc': 'مطبعة ريكس تتيح لك تصميم وطباعة منتجات مخصصة لعلامتك التجارية.',
        'designs-title': 'تصاميم ومproducts مميزة',
        'designs-subtitle': 'قسم مخصص للتصاميم والمنتجات المميزة',
        'designs-booklets': 'Booklets & Catalogs',
        'designs-booklets-desc': 'تصميم وطباعة كتيبات وكتالوجات مخصصة',
        'designs-brochures': 'Brochures',
        'designs-brochures-desc': 'بروشورات إعلانية بتصاميم حديثة',
        'designs-business-cards': 'Business Cards',
        'designs-business-cards-desc': 'بطاقات أعمال مخصصة ومصممة خصيصاً',
        'designs-calendars': 'Calendars',
        'designs-calendars-desc': 'تقويمات حائطية ومكتبية مخصصة',
        'designs-car-stickers': 'Car Stickers',
        'designs-car-stickers-desc': 'ملصقات سيارات وشاشات',
        'designs-carbon-forms': 'Carbon Forms',
        'designs-carbon-forms-desc': 'نماذج كربون نسخ متعددة',
        'designs-clocks': 'Clocks',
        'designs-clocks-desc': 'ساعات حائطية ومكتبية إعلانية',
        'designs-clothing': 'Clothing & Accessories',
        'designs-clothing-desc': 'ملابس وأقمشة واكسسوارات إعلانية',
        'designs-pens': 'Custom Pens',
        'designs-pens-desc': 'أقلام مخصصة ومصممة خصيصاً',
        'designs-desk-sets': 'Desk Sets',
        'designs-desk-sets-desc': 'مجموعات مكتبية ومستلزمات مكاتب',
        'designs-gift-baskets': 'Gift Baskets',
        'designs-gift-baskets-desc': 'سلال هدايا ومنتجات ترويجية مميزة',
        'designs-envelopes': 'Envelopes',
        'designs-envelopes-desc': 'ظروف مخصصة باسم العلامة التجارية',
        'designs-flags': 'Flags',
        'designs-flags-desc': 'أعلام وبنرات إعلانية',
        'designs-flyers': 'Flyers',
        'designs-flyers-desc': 'منشورات إعلانية بجودة عالية',
        'designs-folders': 'Folders',
        'designs-folders-desc': 'مجلدات مخصصة وملفات ترويجية',
        'designs-keychains': 'Keychains',
        'designs-keychains-desc': 'سلاسل مفاتيح ومنتجات ترويجية',
        'designs-labels': 'Labels & Stickers',
        'designs-labels-desc': 'ملصقات وستيكرات متنوعة الأشكال',
        'designs-letterheads': 'Letterheads',
        'designs-letterheads-desc': 'ورق رسمي مخصص ورسميات الشركة',
        'designs-notepads': 'Notepads',
        'designs-notepads-desc': 'دفاتر ملاحظات وكتب صغيرة',
        'designs-notebooks': 'Notebooks',
        'designs-notebooks-desc': 'دفاتر كردية وإنجليزية مخصصة',
        'designs-small-notepads': 'Small Notepads',
        'designs-small-notepads-desc': 'مفكرة صغيرة وكبيرة مخصصة',
        'designs-our-services': 'Our Services',
        'designs-our-services-desc': 'جميع خدمات الطباعة المميزة',
        'designs-food-products': 'Advertising Food Products',
        'designs-food-products-desc': 'منتجات غذائية إعلانية',
        'designs-gift-items': 'Advertising Gift Items',
        'designs-gift-items-desc': 'هدايا إعلانية ومنتجات ترويجية',
        'designs-advertising-products': 'Advertising Products',
        'designs-advertising-products-desc': 'جميع المنتجات الإعلانية',
        'designs-technology': 'Advertising Technology',
        'designs-technology-desc': 'تكنولوجيا حديثة للإعلان',
        'designs-safety-items': 'Safety Items',
        'designs-safety-items-desc': 'منتجات السلامة والأمان',
        'designs-signs-banners': 'Signs & Banners',
        'designs-signs-banners-desc': 'لافتات وبنرات كبيرة',
        'designs-flyers-d': 'Flyers D',
        'designs-flyers-d-desc': 'منشورات ديجيتال ومطبوعة',
        'about-title': 'من نحن',
        'about-desc1': 'نحن في مطبعة ريكس، نفخر بتقديم خدمات الطباعة لعملائنا الكرام.  على مدى سنوات عديدة، دعمنا عملاءنا في مجالات الطباعة المتنوعة، وسعينا إلى استثر كافة إمكانياتنا لتقديم خدمات الطباعة العامة',
        'about-desc2': 'لعدة سنوات، دعمنا عملائنا في مختلف مجالات الطباعة، من خلال السعي لاستخدام كامل قدراتنا لتقديم خدمة طباعة عامة عالية الجودة والمتقدمة.',
        'about-trust': 'موثوق',
        'about-quality': 'جودة',
        'about-speed': 'سرعة',
        'partners-title': 'شركاؤنا وعملاؤنا',
        'partners-subtitle': 'عملاؤنا هم مصدر قوتنا ونجاحنا',
        'partner-1': 'شركة ريكس للطباعة',
        'partner-1-desc': 'أفضل شريك لدينا',
        'partner-2': 'شركة البركة للطباعة',
        'partner-2-desc': 'أفضل عميل',
        'partner-3': 'مطبعة السليمانية',
        'partner-3-desc': 'شريك ثابت',
        'partner-4': 'شركة اربيل للطباعة',
        'partner-4-desc': 'عميل دائم',
        'partner-5': 'مطبعة دهوك الحديثة',
        'partner-5-desc': 'شريك نامي',
        'partner-6': 'شركة كركوك للطباعة',
        'partner-6-desc': 'أفضل براند',
        'partner-7': 'مطبعة حلبجة',
        'partner-7-desc': 'شريك موثوق',
        'partner-8': 'شركة الزاخو للطباعة',
        'partner-8-desc': 'عميل مميز',
        'partner-9': 'مطبعة اربيل الدولية',
        'partner-9-desc': 'شريك استراتيجي',
        'partner-10': 'شركة القامشلي للطباعة',
        'partner-10-desc': 'عميل دائم',
        'partner-11': 'مطبعة اربيل الحديثة',
        'partner-11-desc': 'شريك تجاري',
        'partner-12': 'شركة السليمانية للطباعة',
        'partner-12-desc': 'عميل مهم',
        'partner-13': 'مطبعة رانيە',
        'partner-13-desc': 'شريك محلي',
        'partner-14': 'شركة شقلاوة للطباعة',
        'partner-14-desc': 'عميل جديد',
        'partner-15': 'مطبعة سوران',
        'partner-15-desc': 'شريك نشط',
        'partner-16': 'شركة پیرەمەگروون للطباعة',
        'partner-16-desc': 'عميل VIP',
        'partner-17': 'مطبعة شارەسوور',
        'partner-17-desc': 'شريك مميز',
        'partner-18': 'شركة كويسنجق للطباعة',
        'partner-18-desc': 'عميل موثوق',
        'partner-19': 'مطبعة چەمچەماڵ',
        'partner-19-desc': 'شريك فعال',
        'partner-20': 'شركة پیرەمەگروون للطباعة',
        'partner-20-desc': 'عميل دائم',
        'contact-title': 'اتصل بنا',
        'contact-subtitle': 'نحن مستعدون لمساعدة علامتك التجارية',
        'contact-form-title': 'نموذج الاتصال',
        'contact-form-name': 'الاسم',
        'contact-form-phone': 'رقم الهاتف',
        'contact-form-description': 'وصف طلبك',
        'contact-form-submit': 'إرسال',
        'contact-info-title': 'معلومات الاتصال',
        'view-map-btn': 'عرض الموقع على الخريطة',
        'footer-desc': 'مطبعة متخصصة في الطباعة العامة في إقليم كردستان'
    },
    en: {
        'mobile-nav-services': 'Services',
        'mobile-nav-designs': 'Featured Designs',
        'mobile-nav-about': 'About Us',
        'mobile-nav-partners': 'Our Partners',
        'mobile-nav-contact': 'Contact',
        'mobile-nav-blog': 'Blog',
        'mobile-nav-whatsapp': 'WhatsApp',
        'desktop-nav-services': 'Services',
        'desktop-nav-designs': 'Designs',
        'desktop-nav-about': 'About Us',
        'desktop-nav-partners': 'Our Partners',
        'desktop-nav-contact': 'Contact',
        'desktop-nav-blog': 'Blog',
        'hero-title': 'Rix General Printing Press',
        'hero-subtitle': 'We help brands create unique and attractive printing.',
        'hero-trust': 'Trust',
        'hero-quality': 'Quality',
        'hero-speed': 'Speed',
        'hero-cta': 'Get Started',
        'services-title': 'Our Services',
        'services-subtitle': 'Rix Printing Press offers these services',
        'printing-types': 'Types of Printing',
        'offset-printing': '• Offset Printing',
        'digital-printing': '• Digital Printing',
        'embossing': '• Embossing',
        'uv-dtf': '• UV DTF Printing',
        'dtf-printing': '• DTF Printing',
        'tampo-printing': '• Tampon Printing',
        'laser-printing': '• Laser Printing',
        'thermal-printing': '• Thermal Printing',
        'screen-printing': '• Screen Printing',
        'drum-printing': '• Drum Printing',
        'poster-printing': 'Poster & Banner Printing',
        'design-print': '• Design & Print',
        'large-format': '• Large Format Printing',
        'high-quality': '• High Quality',
        'book-printing': 'Book & Magazine Printing',
        'various-designs': '• Various Designs & Sizes',
        'cover-printing': '• Cover & Interior Printing',
        'card-printing': 'Invitation & Business Card Printing',
        'custom-design': '• Custom Design',
        'precise-cutting': '• Precise Cutting',
        'clothing-printing': 'Clothing & Fabric Printing',
        'direct-printing': '• Direct Printing & Drum',
        'color-variety': '• Various Colors & Designs',
        'custom-packaging': 'Custom Box Printing',
        'packaging-desc': 'Rix Printing allows you to design and print custom products for your brand.',
        'designs-title': 'Featured Designs',
        'designs-subtitle': 'Special section for unique designs and products',
        'designs-booklets': 'Booklets & Catalogs',
        'designs-booklets-desc': 'Design and printing of special booklets and catalogs',
        'designs-brochures': 'Brochures',
        'designs-brochures-desc': 'Advertising brochures with modern designs',
        'designs-business-cards': 'Business Cards',
        'designs-business-cards-desc': 'Custom designed and personalized business cards',
        'designs-calendars': 'Calendars',
        'designs-calendars-desc': 'Custom wall and desk calendars',
        'designs-car-stickers': 'Car Stickers',
        'designs-car-stickers-desc': 'Car stickers and window decals',
        'designs-carbon-forms': 'Carbon Forms',
        'designs-carbon-forms-desc': 'Carbonless multi-copy forms',
        'designs-clocks': 'Clocks',
        'designs-clocks-desc': 'Wall and desk advertising clocks',
        'designs-clothing': 'Clothing & Accessories',
        'designs-clothing-desc': 'Advertising clothing, fabrics and accessories',
        'designs-pens': 'Custom Pens',
        'designs-pens-desc': 'Custom designed and personalized pens',
        'designs-desk-sets': 'Desk Sets',
        'designs-desk-sets-desc': 'Office desk sets and accessories',
        'designs-gift-baskets': 'Gift Baskets',
        'designs-gift-baskets-desc': 'Promotional gift baskets and special products',
        'designs-envelopes': 'Envelopes',
        'designs-envelopes-desc': 'Brand-specific custom envelopes',
        'designs-flags': 'Flags',
        'designs-flags-desc': 'Advertising flags and banners',
        'designs-flyers': 'Flyers',
        'designs-flyers-desc': 'High-quality advertising flyers',
        'designs-folders': 'Folders',
        'designs-folders-desc': 'Custom folders and promotional files',
        'designs-keychains': 'Keychains',
        'designs-keychains-desc': 'Promotional keychains and gift items',
        'designs-labels': 'Labels & Stickers',
        'designs-labels-desc': 'Various types of labels and stickers',
        'designs-letterheads': 'Letterheads',
        'designs-letterheads-desc': 'Official and custom company letterheads',
        'designs-notepads': 'Notepads',
        'designs-notepads-desc': 'Notepads and small notebooks',
        'designs-notebooks': 'Notebooks',
        'designs-notebooks-desc': 'Custom Kurdish and English notebooks',
        'designs-small-notepads': 'Small Notepads',
        'designs-small-notepads-desc': 'Small and large custom notepads',
        'designs-our-services': 'Our Services',
        'designs-our-services-desc': 'All premium printing services',
        'designs-food-products': 'Advertising Food Products',
        'designs-food-products-desc': 'Advertising food products',
        'designs-gift-items': 'Advertising Gift Items',
        'designs-gift-items-desc': 'Advertising gifts and promotional items',
        'designs-advertising-products': 'Advertising Products',
        'designs-advertising-products-desc': 'All advertising products',
        'designs-technology': 'Advertising Technology',
        'designs-technology-desc': 'Modern technology for advertising',
        'designs-safety-items': 'Safety Items',
        'designs-safety-items-desc': 'Safety and security products',
        'designs-signs-banners': 'Signs & Banners',
        'designs-signs-banners-desc': 'Large signs and advertising banners',
        'designs-flyers-d': 'Flyers D',
        'designs-flyers-d-desc': 'Digital and printed flyers',
        'about-title': 'About Us',
        'about-desc1': 'We, at Rix Printing House, are proud to oer printing services to our esteemed customers. For many years, we have supported our clients in various fields of printing, striving to leverage our full capabilities to provide high-quality and advanced public printing services.',
        'about-desc2': 'For several years, we have supported our customers in various printing fields, by striving to use all our capabilities to provide high-quality and advanced general printing service.',
        'about-trust': 'Trusted',
        'about-quality': 'Quality',
        'about-speed': 'Speed',
        'partners-title': 'Our Partners & Customers',
        'partners-subtitle': 'Our customers are our source of strength and success',
        'partner-1': 'Rix Printing Company',
        'partner-1-desc': 'Our most successful partner',
        'partner-2': 'Al-Baraka Printing Company',
        'partner-2-desc': 'Best customer',
        'partner-3': 'Sulaymaniyah Printing Press',
        'partner-3-desc': 'Stable partner',
        'partner-4': 'Erbil Printing Company',
        'partner-4-desc': 'Permanent customer',
        'partner-5': 'Dohuk Modern Printing Press',
        'partner-5-desc': 'Growing partner',
        'partner-6': 'Kirkuk Printing Company',
        'partner-6-desc': 'Best brand',
        'partner-7': 'Halabja Printing Press',
        'partner-7-desc': 'Trusted partner',
        'partner-8': 'Zakho Printing Company',
        'partner-8-desc': 'Special client',
        'partner-9': 'Erbil International Printing Press',
        'partner-9-desc': 'Strategic partner',
        'partner-10': 'Qamishli Printing Company',
        'partner-10-desc': 'Permanent client',
        'partner-11': 'Erbil Modern Printing Press',
        'partner-11-desc': 'Business partner',
        'partner-12': 'Sulaymaniyah Printing Company',
        'partner-12-desc': 'Important client',
        'partner-13': 'Rania Printing Press',
        'partner-13-desc': 'Local partner',
        'partner-14': 'Shqlawa Printing Company',
        'partner-14-desc': 'New client',
        'partner-15': 'Soran Printing Press',
        'partner-15-desc': 'Active partner',
        'partner-16': 'Piramagrun Printing Company',
        'partner-16-desc': 'VIP client',
        'partner-17': 'Shareasoor Printing Press',
        'partner-17-desc': 'Special partner',
        'partner-18': 'Koysanjaq Printing Company',
        'partner-18-desc': 'Trusted client',
        'partner-19': 'Chamchamal Printing Press',
        'partner-19-desc': 'Active partner',
        'partner-20': 'Piramagrun Printing Company',
        'partner-20-desc': 'Permanent client',
        'contact-title': 'Contact Us',
        'contact-subtitle': 'We are ready to help your brand',
        'contact-form-title': 'Contact Form',
        'contact-form-name': 'Your Name',
        'contact-form-phone': 'Phone Number',
        'contact-form-description': 'Description of your request',
        'contact-form-submit': 'Send',
        'contact-info-title': 'Contact Information',
        'view-map-btn': 'View Location on Map',
        'footer-desc': 'A printing press specializing in general printing in Kurdistan Region'
    }
};

// Current language
let currentLanguage = 'ckb';

// Side menu functionality
function toggleSideMenu() {
    const sideMenu = document.getElementById('sideMenu');
    const overlay = document.getElementById('sideMenuOverlay');
    
    sideMenu.classList.toggle('open');
    overlay.classList.toggle('open');
}

function closeSideMenu() {
    const sideMenu = document.getElementById('sideMenu');
    const overlay = document.getElementById('sideMenuOverlay');
    
    sideMenu.classList.remove('open');
    overlay.classList.remove('open');
}

// Language switching functionality
function switchLanguage(lang) {
    currentLanguage = lang;
    
    // Update language buttons in side menu
    document.querySelectorAll('.language-option').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(`lang-${lang}`).classList.add('active');
    
    // Update language buttons in top navigation
    document.querySelectorAll('.top-lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(`top-lang-${lang}`).classList.add('active');
    
    // Update HTML lang and dir attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'en' ? 'ltr' : 'rtl';
    
    // Update body class for RTL/LTR
    if (lang === 'en') {
        document.body.classList.remove('rtl');
        document.body.classList.add('ltr');
    } else {
        document.body.classList.remove('ltr');
        document.body.classList.add('rtl');
    }
    
    // Apply translations
    applyTranslations(lang);
    
    // Close side menu after language change
    closeSideMenu();
}

function applyTranslations(lang) {
    const langData = translations[lang];
    
    // Apply translations to all elements
    Object.keys(langData).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            element.textContent = langData[key];
        }
    });
    
    // Update Arabic and Kurdish text styling
    updateTextStyling(lang);
}

function updateTextStyling(lang) {
    const body = document.body;
    
    // Remove existing language classes
    body.classList.remove('kurdish-text', 'arabic-text');
    
    // Add appropriate class based on language
    if (lang === 'ckb') {
        body.classList.add('kurdish-text');
    } else if (lang === 'ar') {
        body.classList.add('arabic-text');
    }
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Initialize with default language
    applyTranslations(currentLanguage);
    updateTextStyling(currentLanguage);
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Close side menu when clicking outside
    document.addEventListener('click', function(e) {
        const sideMenu = document.getElementById('sideMenu');
        const menuBtn = document.querySelector('.mobile-menu-btn');
        
        if (!sideMenu.contains(e.target) && !menuBtn.contains(e.target)) {
            closeSideMenu();
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        // Close side menu on large screens
        if (window.innerWidth >= 1025) {
            closeSideMenu();
        }
    });
});

// Add scroll effect to navigation
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.desktop-nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
        nav.style.backdropFilter = 'blur(10px)';
    } else {
        nav.style.background = 'white';
        nav.style.backdropFilter = 'none';
    }
});

// -------------------------------------------
// EMAILJS INTEGRATION START
// -------------------------------------------

// Initialize EmailJS
(function() {
    emailjs.init("-vgH1fSbISlSxwNXK"); 
})();

// Form submission handling
function handleFormSubmission(formId) {
    const form = document.getElementById(formId);
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = document.getElementById('contact-form-submit');
            const originalBtnText = submitBtn.innerText;
            
            // Change button text to indicate loading
            submitBtn.innerText = currentLanguage === 'en' ? 'Sending...' : '...جارێک';
            submitBtn.disabled = true;

            // Send email using EmailJS
            emailjs.sendForm('service_bycz8ta', 'template_k79rb9k', this)
                .then(function() {
                    console.log('SUCCESS!');
                    
                    const messages = {
                        ckb: 'سڵاو! پەیامەکەت بە سەرکەوتوویی نێردرا.',
                        ar: 'شكراً! تم إرسال رسالتك بنجاح.',
                        en: 'Thank you! Your message has been sent successfully.'
                    };
                    
                    alert(messages[currentLanguage]);
                    form.reset();
                    
                }, function(error) {
                    console.log('FAILED...', error);
                    
                    const errorMessages = {
                        ckb: 'هەڵەیەک ڕوویدا، تکایە دواتر هەوڵ بدەرەوە.',
                        ar: 'حدث خطأ، يرجى المحاولة لاحقاً.',
                        en: 'An error occurred, please try again later.'
                    };
                    alert(errorMessages[currentLanguage]);
                })
                .finally(function() {
                    // Reset button
                    submitBtn.innerText = originalBtnText;
                    submitBtn.disabled = false;
                });
        });
    }
}

// Initialize form handling
document.addEventListener('DOMContentLoaded', function() {
    handleFormSubmission('contactForm');
});

// -------------------------------------------
// EMAILJS INTEGRATION END
// -------------------------------------------

// Add loading animation for better UX
function showLoading(element) {
    element.innerHTML = '<div class="loading"></div>';
}

function hideLoading(element, originalContent) {
    element.innerHTML = originalContent;
}

// Utility function for mobile detection
function isMobile() {
    return window.innerWidth <= 768;
}

// Add touch support for mobile devices
if ('ontouchstart' in window) {
    document.addEventListener('touchstart', function() {}, { passive: true });
}

// Performance optimization: Lazy load images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Add hover effects for partner cards
document.addEventListener('DOMContentLoaded', function() {
    const partnerCards = document.querySelectorAll('.partner-card');
    partnerCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Add form validation enhancement
document.addEventListener('DOMContentLoaded', function() {
    const formInputs = document.querySelectorAll('.form-input');
    
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
    });
});

// Add smooth reveal animations on scroll
function revealOnScroll() {
    const reveals = document.querySelectorAll('.card-hover, .partner-card, .contact-form, .design-card');
    
    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('revealed');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// Add CSS for reveal animation
const style = document.createElement('style');
style.textContent = `
    .card-hover, .partner-card, .contact-form, .design-card {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }
    
    .card-hover.revealed, .partner-card.revealed, .contact-form.revealed, .design-card.revealed {
        opacity: 1;
        transform: translateY(0);
    }
    
    .form-group.focused .form-label {
        color: var(--primary-color);
        transform: translateY(-5px);
    }
`;
document.head.appendChild(style);
