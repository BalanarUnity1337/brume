import $ from 'jquery';
import utils from './Utils.js';

export default (function() {
  const $openMenu = $('.js-open-menu');
  const $menu = $('.js-menu');
  const $closeMenu = $('.js-close-menu');
  const $document = $(document);

  $openMenu.click(function() {
    $openMenu.addClass('is-active').prop('disabled', true);

    $menu
      .addClass('active')
      .addClass('fadeInDown')
      .one('animationend', () => {
        $menu.removeClass('fadeInDown');
      });

    $document.on('keydown', onDocumentKeyDown);
  });

  $closeMenu.click(function() {
    $openMenu.removeClass('is-active').prop('disabled', false);

    $menu.addClass('fadeOutUp').one('animationend', () => {
      $menu.removeClass('active').removeClass('fadeOutUp');
    });

    $document.off('keydown', onDocumentKeyDown);
  });

  function onDocumentKeyDown(e) {
    if (utils.isEscapeKeyPress(e.keyCode)) {
      $closeMenu.trigger('click');
    }
  }
})();
