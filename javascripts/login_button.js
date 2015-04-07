$(function () {
  $('#login-button').tooltipster({
    theme: 'tooltipster-shadow login-tooltip',
    position: 'bottom-right',
    trigger: 'hover',
    interactive: true,
    contentAsHTML: true,
    restoration: 'none',
    content: $('#modal-login'),
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
});
