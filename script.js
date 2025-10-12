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
