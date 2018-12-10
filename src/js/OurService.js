import $ from 'jquery';

export default (function() {
  const $navTabs = $('.section--our-service .js-nav-tabs');
  const $tabContent = $('.section--our-service .js-tab-content');

  $navTabs.on('click', '.js-nav-tab', function(e) {
    e.preventDefault();

    const $this = $(this);
    const currentWindowWidth = $(window).outerWidth();
    const $targetTabContent = $tabContent.children(this.hash);

    if ($this.hasClass('active')) {
      return;
    }

    $this
      .addClass('active')
      .siblings()
      .removeClass('active');

    if (currentWindowWidth >= 1360) {
      $targetTabContent
        .one('animationend', () => {
          $targetTabContent.removeClass('fadeInRight');
        })
        .addClass('active')
        .addClass('fadeInRight')
        .siblings()
        .removeClass('active');
    } else {
      $targetTabContent
        .one('animationend', () => {
          $targetTabContent.removeClass('fadeInUp');
        })
        .addClass('active')
        .addClass('fadeInUp')
        .siblings()
        .removeClass('active');
    }
  });
})();
