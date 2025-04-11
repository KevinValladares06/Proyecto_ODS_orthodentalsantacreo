const darkMode = document.getElementById('dark-mode');
const lightMode = document.getElementById('light-mode');

darkMode.addEventListener('click', ()=> {
    document.body.classList.toggle('dark_mode')
    darkMode.classList.toggle('hide')
    lightMode.classList.remove('hide')
})
lightMode.addEventListener('click', ()=> {
    document.body.classList.remove('dark_mode')
    lightMode.classList.toggle('hide')
    darkMode.classList.remove('hide')
})


/*Carusel*/ 
document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.carousel');
  const totalImages = document.querySelectorAll('.image-boxs').length;
  const visibleImages = 3; // Cambia esto si cambia el número de imágenes visibles
  const imageWidth = carousel.querySelector('.image-boxs').clientWidth;
  let offset = 0;
  let interval;

  function cloneImages() {
      for (let i = 0; i < visibleImages; i++) {
          const clone = carousel.children[i].cloneNode(true);
          carousel.appendChild(clone);
      }
  }

  function startCarousel() {
      interval = setInterval(() => {
          moveNext();
      }, 2000); // Cambia la imagen cada 2 segundos (más rápido)
  }

  function moveNext() {
      offset -= imageWidth / visibleImages;
      if (offset <= -imageWidth * totalImages / visibleImages) {
          offset = 0;
          carousel.style.transition = 'none';
          carousel.style.transform = 'translateX(0)';
          setTimeout(() => {
              carousel.style.transition = 'transform 0.3s linear'; // Aumentar la velocidad de la transición
          }, 50); // Esperar un breve momento antes de restaurar la transición
      } else {
          carousel.style.transform = `translateX(${offset}px)`;
      }
  }

  function movePrev() {
      if (offset === 0) {
          offset = -imageWidth * (totalImages - visibleImages) / visibleImages;
          carousel.style.transition = 'none';
          carousel.style.transform = `translateX(${offset}px)`;
          setTimeout(() => {
              carousel.style.transition = 'transform 0.3s linear'; // Aumentar la velocidad de la transición
          }, 50); // Esperar un breve momento antes de restaurar la transición
      } else {
          offset += imageWidth / visibleImages;
          carousel.style.transform = `translateX(${offset}px)`;
      }
  }

  document.querySelector('.carousel-button.next').addEventListener('click', () => {
      clearInterval(interval);
      moveNext();
      startCarousel();
  });

  document.querySelector('.carousel-button.prev').addEventListener('click', () => {
      clearInterval(interval);
      movePrev();
      startCarousel();
  });

  cloneImages();
  startCarousel();
});
