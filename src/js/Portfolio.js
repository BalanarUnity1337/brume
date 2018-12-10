import $ from 'jquery';
import { Swiper, Navigation } from 'swiper/dist/js/swiper.esm.js';

Swiper.use([Navigation]);

export default (function() {
  const $navTabs = $('.section--portfolio .js-nav-tabs');
  const $tabContent = $('.section--portfolio .js-tab-content');

  $navTabs.on('click', '.js-nav-tab', function(e) {
    e.preventDefault();

    const $this = $(this);
    const $targetTabContent = $tabContent.children(this.hash);

    if ($this.hasClass('active')) {
      return;
    }

    $this
      .addClass('active')
      .siblings()
      .removeClass('active');

    $targetTabContent
      .one('animationend', () => {
        $targetTabContent.removeClass('fadeInUp');
      })
      .addClass('active')
      .addClass('fadeInUp')
      .siblings()
      .removeClass('active');
  });

  $('.portfolio-slider__inner').each(function() {
    let slider = new Swiper(this, {
      speed: 1000,
      noSwiping: false,
      containerModifierClass: 'portfolio-slider__inner--',
      slideClass: 'portfolio-slider__slide',
      slideActiveClass: 'portfolio-slider__slide--active',
      slideNextClass: 'portfolio-slider__slide--next',
      slidePrevClass: 'portfolio-slider__slide--prev',
      wrapperClass: 'portfolio-slider__slides',
      slideDuplicateClass: 'portfolio-slider__slide--duplicate',
      slideDuplicateActiveClass: 'portfolio-slider__slide--duplicate-active',
      slideDuplicateNextClass: 'portfolio-slider__slide--duplicate-next',
      slideDuplicatePrevClass: 'portfolio-slider__slide--duplicate-prev',
      noSwipingClass: 'portfolio-slider__inner--no-swiping',
      navigation: {
        nextEl: this.querySelector('.portfolio-slider__nav--next'),
        prevEl: this.querySelector('.portfolio-slider__nav--prev'),
        disabledClass: 'portfolio-slider__nav--disabled'
      },
      breakpointsInverse: true,
      breakpoints: {
        320: {
          width: 260,
          loop: true,
          loopAdditionalSlides: 2,
          slidesOffsetBefore: 30,
          slidesOffsetAfter: 15,
          spaceBetween: 15,
          slidesPerView: 1,
          slidesPerGroup: 1,
          noSwiping: false
        },
        768: {
          width: 604,
          loop: true,
          loopAdditionalSlides: 2,
          slidesOffsetBefore: 84,
          slidesOffsetAfter: 42,
          spaceBetween: 42,
          slidesPerView: 1,
          slidesPerGroup: 1,
          noSwiping: false
        },
        1360: {
          width: 1170,
          loop: false,
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
          spaceBetween: 0,
          slidesPerView: 4,
          slidesPerGroup: 4,
          noSwiping: true
        }
      },
      on: {
        resize: () => {
          noSwiping(this, slider);

          if (window.innerWidth < 768) {
            $(this)
              .find('.portfolio-slider__slide')
              .css('width', '260px');
          } else if (window.innerWidth < 1360) {
            $(this)
              .find('.portfolio-slider__slide')
              .css('width', '604px');
          }
        }
      }
    });
  });

  const $portfolioSlide = $('.portfolio-slider__slide');

  $portfolioSlide.on('mouseenter', function() {
    if ($(window).outerWidth() >= 1360) {
      const $this = $(this);

      $this
        .css('width', '392px')
        .siblings()
        .css('width', '259.3px');
    }
  });

  $portfolioSlide.on('mouseleave', function() {
    if ($(window).outerWidth() >= 1360) {
      const $this = $(this);

      $this
        .css('width', '292.5px')
        .siblings()
        .css('width', '292.5px');
    }
  });

  function noSwiping(sliderWrapper, swiper) {
    const currentWindowWidth = $(window).outerWidth();
    swiper = swiper || null;

    if (currentWindowWidth >= 1360) {
      $(sliderWrapper)
        .find('.portfolio-slider__slide--duplicate')
        .hide();

      if (swiper !== null) {
        swiper.update();
      }
    } else {
      $(sliderWrapper)
        .find('.portfolio-slider__slide--duplicate')
        .show();

      if (swiper !== null) {
        swiper.update();
      }
    }
  }

  $(window).on('resize', () => {
    const currentWindowWidth = $(window).outerWidth();

    if (currentWindowWidth < 768) {
    }
  });
})();
