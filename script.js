document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.slides');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const totalSlides = indicators.length;
    
    let currentSlide = 0;

    function updateSlide() {
        slides.style.transform = `translateX(-${currentSlide * 100}%)`;
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentSlide);
        });
    }

    function showNextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlide();
    }

    function showPrevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlide();
    }

    nextBtn.addEventListener('click', showNextSlide);
    prevBtn.addEventListener('click', showPrevSlide);

    indicators.forEach(indicator => {
        indicator.addEventListener('click', () => {
            currentSlide = parseInt(indicator.getAttribute('data-slide'));
            updateSlide();
        });
    });

    updateSlide(); // Inicializa el slider
});
