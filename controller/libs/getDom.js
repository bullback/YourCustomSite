$(document).ready(function() {
  $('body').bind('mouseover mouseout click', function(event) {

    var $target = $(event.target);
    if (!$target.closest('#ycs-header').length) {
      $target.toggleClass(event.type == 'click' ? 'ycs-outline-clicked' : 'ycs-outline-hovered');      
    }
  });
});