(function() {
	var type = 'div';
	
	var attr = {
		'id': 'ycs_header',
	};

	var css = {
		'position': 'absolute',
    'top': '50%',
    'left': '50%',
    'width': '100px',
    'height': '100px',
    'margin-top': '-25px',
    'margin-left': '-25px',
    'z-index': '10000',
    'border': '1px solid #000000',
    'background-color': '#000000',
	};

	putDom(type, attr, css);
})();