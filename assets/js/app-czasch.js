jQuery(document).ready(function($) {

	var startWindowScroll = 0;
	$('.popup-link').magnificPopup({
		type: 'inline',
		midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
		closeBtnInside: true,
		fixedContentPos: true
		// callbacks: {
		//     beforeOpen: function() {
		//         startWindowScroll = $(window).scrollTop();
		//         $('html').addClass('mfp-helper');
		//     },
		//     close: function() {
		//         $('html').removeClass('mfp-helper');
		//         $(window).scrollTop(startWindowScroll);
		//     }
		// }
	});

    $('.full-width-slider').royalSlider({
        arrowsNav: true,
        loop: false,
        keyboardNavEnabled: true,
        controlsInside: false,
        imageScaleMode: 'fill',
        arrowsNavAutoHide: false,
        autoScaleSlider: false,
        autoHeight: false,
        // autoScaleSliderWidth: 960,
        // autoScaleSliderHeight: 350,
        controlNavigation: 'bullets',
        thumbsFitInViewport: false,
        navigateByClick: true,
        startSlideId: 0,
        autoPlay: false,
        transitionType: 'move',
        globalCaption: false,
        deeplinking: {
            enabled: true,
            change: false
        },
        /* size of all images http://help.dimsemenov.com/kb/royalslider-jquery-plugin-faq/adding-width-and-height-properties-to-images */
        imgWidth: 1400,
        imgHeight: 680
    });

	setTimeout(updateSliderSize, 2000);

	function updateSliderSize() {
		$('.full-width-slider').royalSlider('updateSliderSize', true);
		// console.log("biatch");
	}


});
