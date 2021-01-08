

function slider () {

	let slider = tns({
		container: '.slider__wrapper',
		items: 1,
		slideBy: 1,
		
		mouseDrag: true,
		
		prevButton: '.arrows__arrow_left',
		nextButton: '.arrows__arrow_right',
		navPosition: 'bottom',
		// autoplay: true,
		// autoplayTimeout: 5000,
		// autoplayHoverPause: true,
		responsive: {
			1580: {
			  items: 1,
			  slideBy: 1,
				center: true,
				mouseDrag: true,
			},
			1200: {
				items: 2,
				slideBy: 1,
				mouseDrag: true,
			 }
		 }
	 });
}

export {slider};