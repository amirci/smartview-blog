$(function () {
  $('#modal-login').click(function (event) {
    event.stopPropagation();
  });

  $('#login-button').tooltipster({
    theme: 'tooltipster-shadow login-tooltip',
    position: 'bottom',
    trigger: 'click',
    interactive: true,
    contentAsHTML: true,
    restoration: 'none',
    content: $('#modal-login'),
    autoClose: false,
    functionReady: function(origin, tooltip) {
      new LoginViewModel(tooltip);
    },
    functionBefore: function(origin, continueTooltip) {
      origin.addClass('active');
      continueTooltip();
    },
    functionAfter: function(origin) {
      origin.removeClass('active')
    }
  });

  $(document).click(function () {
    $('#login-button.active').tooltipster('hide');
  });
});
