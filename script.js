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










        const carousel = document.querySelector('.carousel');
        const images = document.querySelectorAll('.carousel img');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        const indicators = document.querySelectorAll('.indicator');
        let currentIndex = 0;
        const totalImages = images.length;

        function updateCarousel() {
            carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
            indicators.forEach((indicator, index) => {
                indicator.classList.toggle('active', index === currentIndex);
            });
        }

        function goToSlide(index) {
            currentIndex = (index + totalImages) % totalImages;
            updateCarousel();
        }

        nextBtn.addEventListener('click', () => {
            goToSlide(currentIndex + 1);
        });

        prevBtn.addEventListener('click', () => {
            goToSlide(currentIndex - 1);
        });

        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                goToSlide(index);
            });
        });

        // Auto-slide opcional
        setInterval(() => {
            goToSlide(currentIndex + 1);
        }, 5000);


        
    document.querySelectorAll('.card-info').forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flip');
        });
    });

const menuLinks = document.querySelectorAll(".navbar .links a");
const sections = document.querySelectorAll("section");

// Calcula altura do header
function getHeaderHeight() {
    const header = document.querySelector("header");
    return header ? header.offsetHeight : 0;
}

// Scroll suave ao clicar nos links
menuLinks.forEach(link => {
    link.addEventListener("click", e => {
        const href = link.getAttribute("href");
        if (!href.startsWith("#")) return;
        e.preventDefault();

        const targetSection = document.querySelector(href);
        if (!targetSection) return;

        const offsetTop = targetSection.offsetTop - getHeaderHeight() - 10; // 10px de folga
        window.scrollTo({
            top: offsetTop,
            behavior: "smooth"
        });

        // Atualiza classe active no clique
        menuLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    });
});

// Atualiza link ativo ao rolar a página
function changeActiveLink() {
    let index = sections.length;

    while (--index && window.scrollY + getHeaderHeight() + 50 < sections[index].offsetTop) {}
    
    menuLinks.forEach(link => link.classList.remove("active"));
    if (menuLinks[index]) menuLinks[index].classList.add("active");
}

window.addEventListener("scroll", changeActiveLink);
changeActiveLink();

// Nova lógica para transição suave ao scroll (usando IntersectionObserver)
const scrollSections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Para animar apenas uma vez
        }
    });
}, { threshold: 0.1 });

scrollSections.forEach(section => {
    observer.observe(section);
});