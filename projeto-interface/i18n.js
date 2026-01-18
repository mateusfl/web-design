// Sistema de tradução PT/EN
const translations = {
    pt: {
        // Navegação
        'nav-home': 'Home',
        'nav-menu': 'Nosso cardápio',
        'nav-history': 'Nossa história',
        'nav-more': 'Mais',
        'nav-location': 'Localização',
        'nav-contact': 'Contato',
        
        // Home
        'home-title': 'Uma Cafeteria',
        'home-subtitle': 'Bem-vindo à nossa cafeteria! Oferecemos os melhores cafés especiais, acompanhados de deliciosos doces e salgados artesanais. Venha conhecer nosso ambiente acolhedor e desfrutar de momentos especiais.',
        
        // Cardápio
        'menu-title': 'Cardápio',
        'menu-espresso': 'Café Expresso',
        'menu-espresso-desc': 'Café espresso tradicional, intenso e encorpado, preparado com grãos selecionados. Perfeito para começar o dia com energia.',
        'menu-cappuccino': 'Cappuccino',
        'menu-cappuccino-desc': 'Espresso cremoso com leite vaporizado e uma generosa camada de espuma. Decorado com canela ou chocolate em pó.',
        'menu-pao-acucar': 'Pão de Açúcar',
        'menu-pao-acucar-desc': 'Delicioso pão doce tradicional, macio e levemente adocicado. Perfeito para acompanhar seu café da manhã ou lanche da tarde.',
        'menu-croissant': 'Croissant Francês',
        'menu-croissant-desc': 'Croissant artesanal, folhado e crocante por fora, macio por dentro. Disponível em versões doce e salgada.',
        'menu-torta-limao': 'Torta de Limão',
        'menu-torta-limao-desc': 'Torta cremosa de limão com base crocante de biscoito. O equilíbrio perfeito entre doce e azedo.',
        'menu-sanduiche': 'Sanduíche Natural',
        'menu-sanduiche-desc': 'Sanduíche fresco preparado com ingredientes selecionados, pão artesanal e vegetais da estação. Opções vegetarianas disponíveis.',
        
        // História
        'history-title': 'Nossa história',
        'history-p1': 'A Uma Cafeteria nasceu do sonho de criar um espaço acolhedor onde as pessoas pudessem se encontrar, trabalhar e desfrutar de cafés especiais de qualidade. Fundada em 2018, nossa cafeteria começou como um pequeno projeto familiar no coração da cidade.',
        'history-p2': 'Ao longo dos anos, desenvolvemos relacionamentos diretos com produtores locais de café, garantindo sempre a melhor qualidade dos grãos. Nossos baristas são treinados constantemente para preparar cada xícara com cuidado e dedicação. Hoje, somos reconhecidos pela comunidade como um espaço que valoriza não apenas o café, mas também os momentos especiais que ele proporciona.',
        
        // Localização
        'location-title': 'Localização',
        'location-address-name': 'Uma Cafeteria',
        'location-address-street': 'Rua dos bobos, 0 — Centro',
        'location-address-city': 'Natal, RN — 59000-000',
        'location-address-country': 'Brasil',
        'location-directions': 'Como chegar: estamos a 2 quadras da praça central. Há vagas de estacionamento na rua.',
        'location-map-link': 'abrir no Google Maps',
        'location-phone': 'Telefone: (84) 99999-0000',
        'location-hours': 'Horário de funcionamento: Seg–Sex 8h–19h, Sáb 9h–14h',
        
        // Contato
        'contact-title': 'Entre em contato conosco:',
        'contact-name': 'Nome:',
        'contact-email': 'Email:',
        'contact-message': 'Mensagem:',
        'contact-placeholder': 'Digite sua mensagem aqui...',
        'contact-submit': 'Enviar',
        
        // Títulos das páginas
        'page-menu-title': 'Cardápio',
        'page-history-title': 'Nossa história',
        'page-location-title': 'Localização',
        'page-contact-title': 'Contato'
    },
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-menu': 'Our Menu',
        'nav-history': 'Our Story',
        'nav-more': 'More',
        'nav-location': 'Location',
        'nav-contact': 'Contact',
        
        // Home
        'home-title': 'A Coffee Shop',
        'home-subtitle': 'Welcome to our coffee shop! We offer the finest specialty coffees, accompanied by delicious artisanal sweets and savory treats. Come discover our welcoming atmosphere and enjoy special moments.',
        
        // Menu
        'menu-title': 'Menu',
        'menu-espresso': 'Espresso',
        'menu-espresso-desc': 'Traditional espresso, intense and full-bodied, prepared with selected beans. Perfect to start your day with energy.',
        'menu-cappuccino': 'Cappuccino',
        'menu-cappuccino-desc': 'Creamy espresso with steamed milk and a generous layer of foam. Decorated with cinnamon or cocoa powder.',
        'menu-pao-acucar': 'Sugar Bread',
        'menu-pao-acucar-desc': 'Delicious traditional sweet bread, soft and slightly sweetened. Perfect to accompany your breakfast or afternoon snack.',
        'menu-croissant': 'French Croissant',
        'menu-croissant-desc': 'Artisanal croissant, flaky and crispy on the outside, soft on the inside. Available in sweet and savory versions.',
        'menu-torta-limao': 'Lemon Pie',
        'menu-torta-limao-desc': 'Creamy lemon pie with crispy cookie base. The perfect balance between sweet and sour.',
        'menu-sanduiche': 'Natural Sandwich',
        'menu-sanduiche-desc': 'Fresh sandwich prepared with selected ingredients, artisanal bread and seasonal vegetables. Vegetarian options available.',
        
        // History
        'history-title': 'Our Story',
        'history-p1': 'A Coffee Shop was born from the dream of creating a welcoming space where people could meet, work, and enjoy quality specialty coffees. Founded in 2018, our coffee shop started as a small family project in the heart of the city.',
        'history-p2': 'Over the years, we have developed direct relationships with local coffee producers, always ensuring the best quality beans. Our baristas are constantly trained to prepare each cup with care and dedication. Today, we are recognized by the community as a space that values not only coffee, but also the special moments it provides.',
        
        // Location
        'location-title': 'Location',
        'location-address-name': 'A Coffee Shop',
        'location-address-street': 'Main Street, 0 — Downtown',
        'location-address-city': 'Natal, RN — 59000-000',
        'location-address-country': 'Brazil',
        'location-directions': 'How to get there: we are 2 blocks from the central square. Street parking available.',
        'location-map-link': 'open in Google Maps',
        'location-phone': 'Phone: +55 (84) 99999-0000',
        'location-hours': 'Opening hours: Mon–Fri 8am–7pm, Sat 9am–2pm',
        
        // Contact
        'contact-title': 'Get in touch with us:',
        'contact-name': 'Name:',
        'contact-email': 'Email:',
        'contact-message': 'Message:',
        'contact-placeholder': 'Type your message here...',
        'contact-submit': 'Send',
        
        // Page titles
        'page-menu-title': 'Menu',
        'page-history-title': 'Our Story',
        'page-location-title': 'Location',
        'page-contact-title': 'Contact'
    }
};

// Idioma atual (padrão: português)
let currentLang = localStorage.getItem('language') || 'pt';

// Função para traduzir o site
function translatePage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    // Atualizar atributo lang do HTML
    document.documentElement.lang = lang === 'pt' ? 'pt-br' : 'en';
    
    // Traduzir todos os elementos com data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Traduzir placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
    
    // Traduzir valores de inputs
    document.querySelectorAll('[data-i18n-value]').forEach(element => {
        const key = element.getAttribute('data-i18n-value');
        if (translations[lang] && translations[lang][key]) {
            element.value = translations[lang][key];
        }
    });
    
    // Atualizar título da página baseado na URL
    const path = window.location.pathname;
    const siteName = lang === 'pt' ? 'Uma Cafeteria' : 'A Coffee Shop';
    if (path.includes('cardapio') || path.includes('cardapio.html')) {
        document.title = translations[lang]['page-menu-title'] + ' - ' + siteName;
    } else if (path.includes('nossa-historia') || path.includes('nossa-historia.html')) {
        document.title = translations[lang]['page-history-title'] + ' - ' + siteName;
    } else if (path.includes('localizacao') || path.includes('localizacao.html')) {
        document.title = translations[lang]['page-location-title'] + ' - ' + siteName;
    } else if (path.includes('contato') || path.includes('contato.html')) {
        document.title = translations[lang]['page-contact-title'] + ' - ' + siteName;
    } else {
        document.title = translations[lang]['home-title'] + ' - ' + siteName;
    }
}

// Função para trocar idioma
function toggleLanguage() {
    const newLang = currentLang === 'pt' ? 'en' : 'pt';
    translatePage(newLang);
}

// Inicializar tradução quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    translatePage(currentLang);
});
