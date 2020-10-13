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
      spaceBetween: 30,

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
    spaceBetween: 40,
    width: 746,
    wrapperClass: 'comments__swiper-wrapper',
    slideClass: 'comments__card',

    navigation: {
      nextEl: '.comments__arrow-next',
      prevEl: '.comments__arrow-prev',
    },
  })

})();