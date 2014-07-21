$(document).ready(function() {
  $('body').bind('mouseover mouseout click', function(event) {

    var $target = $(event.target);
    if (! ($target.closest('#ycs-wrapper').length || $target.closest('#ycs-handler').length)) {
      $target.toggleClass(event.type == 'click' ? 'ycs-outline-clicked' : 'ycs-outline-hovered');

      if(event.type == 'click') {
        $('#ycs-handler #handler').modal('show');
      }
    }
  });
});