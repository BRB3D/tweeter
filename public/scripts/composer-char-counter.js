
$(document).ready(function() {





  $("#tweet-text").on('keyup', function(event) {
    const count = this.value.length;
    const element = $(".counter");
    if (count > 140)  {
      element.text(-(count -140));
      element.css('color', 'crimson');
    } else {
      element.text(140-count);
      element.css('color', 'rgb(7, 62, 52)');
    }
  })
});
