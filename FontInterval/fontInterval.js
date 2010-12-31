(function($) {
  $.fn.fontInterval = function(options) {
    var settings = {
      fontSize: 20,
      duration: 5000
    };
    $.extend(settings, options);

    var timer = null;
    var cycle = function(elem) {
      elem.animate({
        'font-size': '+=' + settings.fontSize
      }, settings.duration, function() {
        $(this).animate({
          'font-size': '-=' + settings.fontSize
        }, settings.duration)
      });
    }

    var doTimer = function (elem) {
      if(timer != null) clearInterval(timer);

      timer = setInterval(function() {
        cycle(elem);
      }, Math.ceil(settings.duration * 2.1));
    };

    cycle(this);
    doTimer(this);

    return this;
  };
})(jQuery);
