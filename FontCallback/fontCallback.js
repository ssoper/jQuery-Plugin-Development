(function($) {
  $.fn.fontCallback = function(options, cb) {
    if ($.isFunction(options)) {
      cb = options;
      options = {};
    }

    var settings = {
      fontSize: '+=20',
      duration: 5000
    };
    $.extend(settings, options);

    this.animate({
      'font-size': settings.fontSize
    }, settings.duration, cb);

    return this;
  };
})(jQuery);
