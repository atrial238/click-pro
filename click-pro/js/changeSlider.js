const slidesNew = document.querySelectorAll('.card-slide'),
		slideWrapper = document.querySelectorAll('.slider__slide'),
		slider = document.querySelector('.slider__wrapper');

// for(let i = 0; i < slidesNew.length; i++){
// slidesNew[i].classList.add('slider__slide');
// slidesNew[i].classList.add('slide');
// }

// function changeSlider (){
// 	if(window.innerWidth < 1580) {
// 		for(let i = 0; i < slideWrapper.length; i++){
// 			slideWrapper[i].remove();
// 		}
// 		for(let i = 0; i < slidesNew.length; i++){
// 			slider.appendChild(slidesNew[i]);
// 		}
// 	}else{
// 		for(let i = 0; i < slidesNew.length; i++){
// 			slidesNew[i].remove();
// 		}
// 		for(let i = 0; i < slideWrapper.length; i++){
// 			slider.appendChild(slideWrapper[i]);
// 		}
// 	}
// }
// changeSlider ();

if(window.innerWidth < 1580  ) {
	for(let i = 0; i < slideWrapper.length; i++){
		slideWrapper[i].remove();
	}
	for(let i = 0; i < slidesNew.length; i++){
		slider.appendChild(slidesNew[i]);
	}
}

window.addEventListener('resize', function() {
location.reload();
});

	