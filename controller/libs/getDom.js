$(document).ready(function() {
  $('body').bind('mouseover mouseout click', function(event) {

    var $target = $(event.target);
    if (!$target.closest('#ycs').length) {
      $target.toggleClass(event.type == 'click' ? 'ycs-outline-clicked' : 'ycs-outline-hovered');

      if(event.type == 'click') {
        $.ajax({
        type: 'POST',
        data: {
          'test': 'test',
        },
        url : 'http://bullback.cafe24.com/ajax/',
        success: function(data) {
          var msg = 'Request Status: ' + request.status + '\n';
          msg += 'Request Errors: ' + error + '\n';
          msg += 'Response Message: ' + request.responseText
          alert(msg);
        },
        error: function(request, status, error) {
          var msg = 'Request Status: ' + request.status + '\n';
          msg += 'Request Errors: ' + error + '\n';
          msg += 'Response Message: ' + request.responseText
          alert(msg);
        },
      });
      }      
    }
  });
});