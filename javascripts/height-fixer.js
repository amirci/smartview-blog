$(function () {
  $wrapper = $(".page-content > .wrapper");

  contentHeight = $(".page-content").height();
  wrapperPadding = parseInt($wrapper.css("padding-top")) + parseInt($wrapper.css("padding-bottom"));
  $wrapper.find("> .inner-wrapper > .row > .col-md-9").height(contentHeight - wrapperPadding);
});
