import '../pages/index.css';

import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

'use strict';

(function() {

  const swipers = document.querySelectorAll('.swiper');

  swipers.forEach((el) => {

    new Swiper(el.querySelector('.swiper__container'), {
      init: true,
      loop: true,
      slidesPerView: 'auto',
      wrapperClass: 'swiper__wrapper',
      slideClass: 'card',

      breakpoints: {
        768: {
          spaceBetween: 30,
        },
        320: {
          spaceBetween: 11,
        },
      },

      navigation: {
        nextEl: el.querySelector('.swiper__arrow-next'),
        prevEl: el.querySelector('.swiper__arrow-prev'),
      },
    });
  });

  const commentsSwiper = new Swiper('.comments__swiper-container', {
    init: true,
    loop: true,
    slidesPerView: 1,
    wrapperClass: 'comments__swiper-wrapper',
    slideClass: 'comments__card',

    breakpoints: {
      840: {
        width: 746,
        spaceBetween: 40,
      },
      768: {
        width: 738,
        spaceBetween: 28,
      },
      320: {
        width: 290,
        spaceBetween: 28,
      },
    },

    navigation: {
      nextEl: '.comments__arrow-next',
      prevEl: '.comments__arrow-prev',
    },
  });

})();