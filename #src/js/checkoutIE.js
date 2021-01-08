window.addEventListener('DOMContentLoaded', function()  {

	var 	mainBody = document.querySelector('body'),
			// scriptIE = document.createElement('script'),
			// fetchPolyfill = document.createElement('script'),
			scriptMain = document.createElement('script'),
			changeSlider =  document.createElement('script'),
			tinySlider =  document.createElement('script'),
			// footer = document.querySelector('.footer'),
			// footerMbile = document.querySelector('.footer-mobile'),
			ua = navigator.userAgent,
			is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
	
	// scriptIE.setAttribute('src', 'js/scriptIE.min.js');
	
	scriptMain.setAttribute('src', 'js/script.js');
	tinySlider.setAttribute('src', 'js/tiny-slider.js');
	changeSlider.setAttribute('src', 'js/changeSlider.js');

	// fetchPolyfill.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/fetch/0.8.0/fetch.min.js');
	// var isMobile = /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(navigator.userAgent);

	// if(isMobile) {
	// 	footerMbile.style.display = 'block';
	// 	footer.style.display = 'none';
	// }else{
	// 	footerMbile.style.display = 'none';
	// 	footer.style.display = 'block';
	// }

	// if(is_ie){
	// 	mainBody.appendChild(fetchPolyfill);
	// 	mainBody.appendChild(scriptIE);
	// }else{
	// 	mainBody.appendChild(scriptMain);
	// }
	

	mainBody.appendChild(changeSlider);

	changeSlider.onload = function() {
		
		mainBody.appendChild(tinySlider);

		tinySlider.onload = function() {
			mainBody.appendChild(scriptMain);
		};
	};

	// mainBody.appendChild(tinySlider);
	
	// 	tinySlider.onload = function() {
	// 		mainBody.appendChild(scriptMain);
	// 	};
	
});