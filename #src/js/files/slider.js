

function slider () {

	let slider = tns({
		container: '.slider',
		items: 1,
		slideBy: 1,
		center: true,
		mouseDrag: true,
		gutter: 100
		
		
		// prevButton: '.carousel__btn-prev',
		// nextButton: '.carousel__btn-next',
	 });
}

export {slider};