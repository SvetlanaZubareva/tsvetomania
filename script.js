const swiperContainer = document.querySelector('.swiper-compony');
const swiperContainer2 = document.querySelector('.service-slider');
const swiperContainer3 = document.querySelector('.swiper-product');
const swiperContainer4 = document.querySelector('.swiper-product1');

document.addEventListener(
    'DOMContentLoaded',
    () => {
        slider2();
        slider1();
        slider3();
        slider4()
        
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
      nextEl: '.service-slider-next-product',
      prevEl: '.service-slider-prev-product',
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


// const slider3 = () => {
//   if (!swiperContainer3) {
//       return ;
//   };

  const swiperOne = new Swiper(swiperContainer3, {
    direction: 'vertical',
    loop: true,
    autoplay: {
        delay: 3000,
    },
    slidesPerView: 4,

    navigation: {
      nextEl: '.swiper-button-next-product',
      prevEl: '.swiper-button-prev-product',
    },
  
    // If we need pagination
    breakpoints: {
        0: {
            slidesPerView: 4,
            spaceBetween: 20,
        }
    },
  });
// }

const slider4 = () => {
  if (!swiperContainer4) {
      return ;
  };

  const swiper = new Swiper(swiperContainer4, {
    direction: 'horizontal',

    slidesPerView: 1,
    thumbs: {
      // указываем на превью слайдер
      swiper: swiperOne // указываем имя превью слайдера
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        }
    },
  });
}



