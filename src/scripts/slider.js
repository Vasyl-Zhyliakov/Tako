import Swiper from 'swiper';
import { Navigation, Scrollbar } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

export const testimonialsSwiper = new Swiper('.testimonials__swiper', {
  modules: [Navigation, Scrollbar],
  navigation: {
    nextEl: '.testimonials__button-right',
    prevEl: '.testimonials__button-left',
  },

  scrollbar: {
    el: '.testimonials__swiper-scrollbar',
    draggable: true,
  },

  slideToClickedSlide: true,
  autoHeight: false,

  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 16,
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 32,
    },

    1024: {
      slidesPerView: 4,
      spaceBetween: 32,
    },
  },
});

export const awardsSwiper = new Swiper('.awards__swiper', {
  modules: [Navigation, Scrollbar],
  navigation: {
    nextEl: '.awards__button-right',
    prevEl: '.awards__button-left',
  },

  scrollbar: {
    el: '.awards__swiper-scrollbar',
    draggable: true,
  },

  slideToClickedSlide: true,
  autoHeight: false,

  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 16,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 32,
    },

    1024: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },
});

export const workSwiper = new Swiper('.awards__swiper', {
  modules: [Navigation, Scrollbar],
  navigation: {
    nextEl: '.work__button--right',
    prevEl: '.work__button--left',
  },

  scrollbar: {
    el: '.work__swiper-scrollbar',
    draggable: true,
  },

  slideToClickedSlide: true,
  autoHeight: false,

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
  },
});
