(function($) {
  $.fn.fontOptions = function(options) {
    var settings = {
      fontSize: 20,
      duration: 5000
    };
    $.extend(settings, options);

    this.animate({
      'font-size': '+=' + settings.fontSize
    }, settings.duration);

    return this;
  };
})(jQuery);
