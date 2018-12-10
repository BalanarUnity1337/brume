import { Swiper, Pagination } from 'swiper/dist/js/swiper.esm.js';

Swiper.use([Pagination]);

export default new Swiper('.reviews-slider__inner', {
  speed: 800,
  loop: true,
  loopAdditionalSlides: 2,
  containerModifierClass: 'reviews-slider__inner--',
  slideClass: 'reviews-slider__slide',
  slideActiveClass: 'reviews-slider__slide--active',
  slideNextClass: 'reviews-slider__slide--next',
  slidePrevClass: 'reviews-slider__slide--prev',
  wrapperClass: 'reviews-slider__slides',
  slideDuplicateClass: 'reviews-slider__slide--duplicate',
  slideDuplicateActiveClass: 'reviews-slider__slide--duplicate-active',
  slideDuplicateNextClass: 'reviews-slider__slide--duplicate-next',
  slideDuplicatePrevClass: 'reviews-slider__slide--duplicate-prev',
  pagination: {
    el: '.reviews-slider__pagination',
    type: 'bullets',
    bulletElement: 'button',
    clickable: true,
    clickableClass: 'reviews-slider__pagination--clickable',
    bulletClass: 'reviews-slider__pagination-item',
    bulletActiveClass: 'reviews-slider__pagination-item--active',
    modifierClass: 'reviews-slider__pagination--'
  },
  observer: true,
  breakpointsInverse: true,
  breakpoints: {
    320: {
      width: 292,
      spaceBetween: 30,
      noSwiping: false
    },
    768: {
      width: 734,
      spaceBetween: 40,
      noSwiping: false
    },
    1360: {
      width: 792,
      spaceBetween: 0,
      noSwiping: true,
      noSwipingClass: 'reviews-slider__inner--no-swiping',
      slideToClickedSlide: true
    }
  }
});
