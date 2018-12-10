import { Swiper, Pagination } from 'swiper/dist/js/swiper.esm.js';
import $ from 'jquery';

Swiper.use([Pagination]);

export default (function() {
  let isInit = false;

  let slider = null;

  const sliderOptions = {
    init: false,
    speed: 800,
    noSwiping: true,
    noSwipingClass: 'slider__inner--no-swiping',
    containerModifierClass: 'slider__inner--',
    slideClass: 'slider__slide',
    slideActiveClass: 'slider__slide--active',
    slideNextClass: 'slider__slide--next',
    slidePrevClass: 'slider__slide--prev',
    wrapperClass: 'slider__slides',
    pagination: {
      el: '.slider__pagination',
      type: 'bullets',
      bulletElement: 'button',
      clickable: true,
      bulletClass: 'slider__pagination-item',
      bulletActiveClass: 'slider__pagination-item--active',
      modifierClass: 'slider__pagination--',
      clickableClass: 'slider__pagination--clickable'
    },
    on: {
      init: function() {
        isInit = !isInit;
      },
      beforeDestroy: function() {
        isInit = !isInit;
      }
    }
  };

  $(window).on('resize', function() {
    const currentWindowWidth = this.innerWidth;

    if (currentWindowWidth >= 1360 && !isInit) {
      slider = new Swiper('.slider__inner', sliderOptions);

      slider.init();
    } else if (currentWindowWidth < 1360 && isInit) {
      slider.destroy();
    }
  });

  $(window).trigger('resize');
})();
