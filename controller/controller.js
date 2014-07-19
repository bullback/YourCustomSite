(function() {
	var type = 'div';
	
	var attr = {
		'id': 'ycs_header',
	};

	var css = {
		'position': 'fixed',
    'top': '0',
    'left': '0',
    'width': '100%',
    'height': '25px',
    'z-index': '10000',
    'border': '1px solid #000000',
    'background-color': '#000000',
	};

	putDom(type, attr, css);

	var selector = 'body';

	var css = {
		'top': '25px',
	}

	setDom(selector, NaN, css);

})();