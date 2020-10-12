import '../pages/index.css';

import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

'use strict';

(function() {

  new Swiper('.swiper__container', {
    init: true,
    loop: true,
    slidesPerView: 'auto',
    // spaceBetween: 30,
    wrapperClass: 'swiper__wrapper',
    slideClass: 'card',

    // pagination: {
    //   el: '.swiper__nav',
    //   clickable: true,
    //   bulletClass: 'swiper__nav-item',
    //   bulletActiveClass: 'swiper__nav-item_is-active',
    // },

    navigation: {
      nextEl: '.swiper__arrow-next',
      prevEl: '.swiper__arrow-prev',
    },
  })

})();