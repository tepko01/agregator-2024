$(document).ready(function () {
    svg4everybody({});

		$('.schools-slider-js').slick({
			infinite: true,
			dots: true,
			slidesToShow: 4,
			slidesToScroll: 4,
			prevArrow: '.schools-slider__nav--prev',
			nextArrow: '.schools-slider__nav--next',
			// appendDots: '.schools-slider__dots',
			dotsClass: 'schools-slider__dots',
			customPaging : function(slider, i) {
				return '';
			},
		});
});
