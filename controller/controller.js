(function() {
	
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

	var cls = [
		'alert',
		'alert-info',
	];

	putDom('html', 'div', attr, css, cls)

	var selector = 'body';

	var attr = {

	};

	var css = {
		'top': '25px',
	}

	setDom(selector, attr, css);

})();