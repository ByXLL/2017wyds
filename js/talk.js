$(function() {
	var menu_ul = $('.faq > li > ul'),
		menu_a = $('.faq > li > a');
	menu_ul.hide();
	menu_a.click(function(e) {
		e.preventDefault();
		if (!$(this).hasClass('active')) {
			menu_a.removeClass('active');
			menu_ul.filter(':visible').slideUp('normal');
			$(this).addClass('active').next().stop(true, true).slideDown('normal');
		} else {
			$(this).removeClass('active');
			$(this).next().stop(true, true).slideUp('normal');
		}
	});
});

$(document).ready(function() {
	$('#horizontalTab').easyResponsiveTabs({
		type: 'default',
		width: 'auto',
		fit: true,
		closed: 'accordion',
		activate: function(event) {
			var $tab = $(this);
			var $info = $('#tabInfo');
			var $name = $('span', $info);
			$name.text($tab.text());
			$info.show();
		}
	});
	$('#verticalTab').easyResponsiveTabs({
		type: 'vertical',
		width: 'auto',
		fit: true
	});
});