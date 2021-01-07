

function slider () {

	let slider = tns({
		container: '.slider__wrapper',
		items: 1,
		slideBy: 1,
		center: true,
		mouseDrag: true,
		gutter: 100,
		prevButton: '.arrows__arrow_left',
		nextButton: '.arrows__arrow_right',
		navPosition: 'bottom',
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
	 });
}

export {slider};