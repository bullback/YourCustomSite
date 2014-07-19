function setDom(selector, attr, css) {
  if(typeof(attr)==='undefined')
    attr = NaN;
  if(typeof(css)==='undefined')
    css = NaN;

  var elem = $(selector);

  $.each(attr, function(index, value) {
    elem.attr(index, value);
  });

  $.each(css, function(index, value) {
    elem.css(index, value);
  });

  return;
}