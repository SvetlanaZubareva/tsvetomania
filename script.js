const swiperContainer = document.querySelector('.swiper-compony');
const swiperContainer2 = document.querySelector('.service-slider');

document.addEventListener(
    'DOMContentLoaded',
    () => {
        slider2();
        slider1();
        
    },
    true
)


const slider2 = () => {
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

const slider1 = () => {
  if (!swiperContainer2) {
      return ;
  };

  const swiper = new Swiper(swiperContainer2, {
    loop: true,
    autoplay: {
        delay: 3000,
    },
    slidesPerView: 2,

    navigation: {
      nextEl: '.service-slider-next',
      prevEl: '.service-slider-prev',
    },
  
    // If we need pagination
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        }
    },
  });
}



