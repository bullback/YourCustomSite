function putDom(type, attr, css) {
  var elem = $("<" + type + "></" + type + ">");

  console.log(elem);

  $.each(attr, function(index, value) {
    elem.attr(index, value);
  });

  $.each(css, function(index, value) {
    elem.css(index, value);
  });

  elem.appendTo('body');

  return;
}