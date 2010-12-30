(function($) {
  $.fn.fontExpand = function() {
    this.animate({
      'font-size': '+=20'
    }, 5000);

    return this;
  };
})(jQuery);
