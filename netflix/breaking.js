


//menu
const menuItems = document.querySelectorAll('nav ul li');

        // Itera sobre cada uno de ellos para añadir eventos
        menuItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                const submenu = item.querySelector('ul');
                if (submenu) {
                    submenu.classList.add('visible');
                }
            });

            item.addEventListener('mouseleave', () => {
                const submenu = item.querySelector('ul');
                if (submenu) {
                    submenu.classList.remove('visible');
                }
            });
        });




        //carusel

      
const sliderContainer = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

const updateSliderPosition = () => {
  const slideWidth = slides[0].clientWidth;
  sliderContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
};

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSliderPosition();
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSliderPosition();
});

window.addEventListener('resize', updateSliderPosition);
