$(function() {
  var shrinkHeader = 40;
  $(window).scroll(function() {
    var scroll = getCurrentScroll();
    $header = $('.site-header, .header-padding');
    if ( scroll >= shrinkHeader ) {
      $header.addClass('site-header-smaller');
    } else {
      $header.removeClass('site-header-smaller');
    }
  });

  function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }
});
