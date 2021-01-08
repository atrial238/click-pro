// import {slider} from './slider';

function changeSlider () {
	function tinySlider () {

		let slider = tns({
			container: '.slider__wrapper',
			items: 1,
			slideBy: 1,
			loop: false,
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
	const slidesSmoll = document.querySelectorAll('.card-slide'),
		slideBig = document.querySelectorAll('.slider__slide'),
		slideWrapper = document.querySelector('.slider__wrapper'),
		slider = document.querySelector('.feedback__slider'),
		tinySliderWrapper = document.querySelector('.tns-outer');

	let allowChangeMore = true,
		allowChangeLess = true;

	function change(){
		
		if(window.innerWidth < 1580  ){
			tinySliderWrapper.remove();
			for(let i = 0; i < slidesSmoll.length; i++){
				slideWrapper.appendChild(slidesSmoll[i]);
			}
		
				slider.appendChild(slideWrapper);
			
			
			tinySlider ();
		}else{
			tinySliderWrapper.remove();
			for(let i = 0; i < slideBig.length; i++){
				slideWrapper.appendChild(slideBig[i]);
			}
			slider.appendChild(slideWrapper);
			tinySlider ();
		}
	}

	window.addEventListener("resize", () => {
		change();
	});
}
export default changeSlider;