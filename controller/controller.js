(function() {
	var attr, css, cls;
	attr = {
		'id': 'ycs_header',
	};

	css = {
		'position': 'fixed',
    'top': '0',
    'left': '0',
    'width': '100%',
    'height': '25px',
    'z-index': '10000',
    'border': '1px solid #000000',
    'background-color': '#000000',
	};

	cls = [
		'alert',
		'alert-info',
	];

	putDom('html', 'div', attr, css, cls)

	attr = {

	};

	css = {
		'top': '25px',
	}

	setDom('body', attr, css);

})();