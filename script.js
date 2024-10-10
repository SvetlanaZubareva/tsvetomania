const swiperContainer = document.querySelector('.swiper-compony')

document.addEventListener(
    'DOMContentLoaded',
    () => {
        slider();
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
