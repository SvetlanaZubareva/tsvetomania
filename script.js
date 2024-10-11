const swiperContainer = document.querySelector('.swiper-compony');
const swiperContainer2 = document.querySelector('.slider__thumbs .swiper-container');

document.addEventListener(
    'DOMContentLoaded',
    () => {
        slider();
        slider1();
    },
    true
)


const slider = () => {
  if (!swiperContainer) {
      return ;
  };

  const swiper = new Swiper(swiperContainer, {
    loop: true,
    autoplay: {
        delay: 3000,
    },
    slidesPerView: 2,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination-company',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        }
    },
  });
}

