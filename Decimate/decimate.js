(function($) {
  $.fn.decimate = function() {
    var num = Math.ceil(this.children.length / 10);
    for(var index = 0; index < num; index++) {
      this.children().eq(index).remove();
    }
  };
})(jQuery);
