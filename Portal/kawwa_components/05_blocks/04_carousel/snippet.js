(function($){
	'use strict';

	/* V. 2.1 */
	/* As many display problems may be found in IE versions 7 and 6, you may consider a graceful degradation by skipping this plugin for them */
	/* Number of items in the carousel are defined by the browser window width */

	$(document).ready(function(){
		if (!(ie6 || ie7)) {
			if($.fn.jcarousel) {
				if($(window).width() >= 700) {
					$('.k-carousel').jcarousel({
						size: '7',
						visible: '4'
					});
				} else if($(window).width() >= 480) {
					$('.k-carousel').jcarousel({
						size: '7',
						visible: '3'
					});
				} else {
					$('.k-carousel').jcarousel({
						size: '5',
						visible: '2'
					});
				}
			}
		}
	});
})(jQuery);
