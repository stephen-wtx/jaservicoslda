// =========================
// 1. Menu Dropdown Toggle
// =========================
const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars';
};


// =========================
// 2. Carrossel de Imagens
// =========================
const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const indicators = document.querySelectorAll('.indicator');
let currentIndex = 0;
const totalImages = images.length;

// Atualiza a posição do carrossel e os indicadores
function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}

// Vai para um slide específico
function goToSlide(index) {
    currentIndex = (index + totalImages) % totalImages;
    updateCarousel();
}

// Navegação pelos botões
nextBtn.addEventListener('click', () => {
    goToSlide(currentIndex + 1);
});

prevBtn.addEventListener('click', () => {
    goToSlide(currentIndex - 1);
});

// Navegação pelos indicadores
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        goToSlide(index);
    });
});

// Auto-slide opcional a cada 5 segundos
setInterval(() => {
    goToSlide(currentIndex + 1);
}, 5000);


// =========================
// 3. Flip de Cartões
// =========================
document.querySelectorAll('.card-info').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flip');
    });
});


// ================================
// 4. Scroll Suave e Link Ativo
// ================================
const menuLinks = document.querySelectorAll(".navbar .links a");
const sections = document.querySelectorAll("section");

// Calcula altura do header
function getHeaderHeight() {
    const header = document.querySelector("header");
    return header ? header.offsetHeight : 0;
}

// Scroll suave ao clicar nos links do menu
menuLinks.forEach(link => {
    link.addEventListener("click", e => {
        const href = link.getAttribute("href");
        if (!href.startsWith("#")) return;
        e.preventDefault();

        const targetSection = document.querySelector(href);
        if (!targetSection) return;

        const offsetTop = targetSection.offsetTop - getHeaderHeight() - 10;
        window.scrollTo({
            top: offsetTop,
            behavior: "smooth"
        });

        // Atualiza classe active no clique
        menuLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    });
});

// Atualiza link ativo com base no scroll
function changeActiveLink() {
    let index = sections.length;

    while (--index && window.scrollY + getHeaderHeight() + 50 < sections[index].offsetTop) {}
    
    menuLinks.forEach(link => link.classList.remove("active"));
    if (menuLinks[index]) menuLinks[index].classList.add("active");
}

window.addEventListener("scroll", changeActiveLink);
changeActiveLink();


// =========================================
// 5. Animação com IntersectionObserver
// =========================================
const scrollSections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Anima apenas uma vez
        }
    });
}, { threshold: 0.1 });

scrollSections.forEach(section => {
    observer.observe(section);
});






// Dark Mode Toggle Functionality
const themeToggle = document.getElementById('theme-toggle-icon');
const themeToggleMobile = document.getElementById('theme-toggle-icon-mobile');
const htmlElement = document.documentElement;

// Load saved theme from localStorage
const savedTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

// Toggle theme on click
themeToggle.addEventListener('click', toggleTheme);
themeToggleMobile.addEventListener('click', toggleTheme);

function toggleTheme() {
    const currentTheme = htmlElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    htmlElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    updateThemeIcon(currentTheme);
}

function updateThemeIcon(theme) {
    const icon = theme === 'dark' ? 'light_mode' : 'dark_mode';
    themeToggle.textContent = icon;
    themeToggleMobile.textContent = icon;
}

// Ensure existing JS (e.g., menu toggle, carousel) is not affected
// Add your other JavaScript code here (e.g., for navbar toggle, carousel, etc.)