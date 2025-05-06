document.addEventListener('DOMContentLoaded', function() {
  const track = document.querySelector('.slider-track');
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let currentIndex = 0;
  const slideCount = slides.length;

  function updateSlider() {
    // Оновлюємо позицію треку
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    // Оновлюємо активний слайд
    slides.forEach((slide, index) => {
      slide.classList.toggle('active', index === currentIndex);
    });
    
    // Оновлюємо кнопки
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === slideCount - 1;
  }

  prevBtn.addEventListener('click', function() {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });

  nextBtn.addEventListener('click', function() {
    if (currentIndex < slideCount - 1) {
      currentIndex++;
      updateSlider();
    }
  });

  // Ініціалізація
  updateSlider();
});