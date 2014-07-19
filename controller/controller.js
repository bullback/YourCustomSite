(function() {
	// insert font-awesome.min.css
	$('head').append("<link href=\"//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css\" rel=\"stylesheet\">");

	var attr, css, cls;
	attr = {
		'id': 'ycs_header',
	};

	css = {
		'position': 'fixed',
    'top': '0',
    'left': '0',
    'width': '100%',
    'height': '52px',
    'z-index': '10000',
	};

	cls = [
		'alert',
		'alert-info',
		'alert-dismissible',
	];

	var header = putDom('html', 'div', attr, css, cls)
	var content = [
		"<button type=\"button\" class=\"close\" data-dismiss=\"alert\">",
		"  <span aria-hidden=\"true\">&times;</span>",
		"  <span class=\"sr-only\">Close</span>",
		"</button>",
		"<p class=\"pull-left\" style=\"margin-top: 1px;\"><strong>사이트 레이아웃을 원하는 모습으로 바꿔보세요.</strong> 이미 <strong>1</strong>개의 사이트 레이아웃이 제작되어 있습니다.</p>",
		"<p class=\"pull-right\" style=\"margin-top: 1px;\"><i class=\"fa fa-search\"></i> 레이아웃 찾아보기&nbsp;&nbsp;</p>",
		"<p class=\"pull-right\" style=\"margin-top: 1px;\"><i class=\"fa fa-file-text-o\"></i> 레이아웃 제작하기&nbsp;&nbsp;</p>",
  ].join('\n');

	header.append(content);

	attr = {

	};

	css = {
		'top': '25px',
	}

	setDom('body', attr, css);

})();