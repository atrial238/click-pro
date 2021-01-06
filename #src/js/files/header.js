const menuOverlay = document.querySelector('.nav__overlay'),
		menu = document.querySelector('.header__nav');
	
function header (){

	const menuClose = document.querySelector('.nav__close'),
			menuActive = document.querySelector('.header__open-nav'),
			widthScroll =  window.innerWidth - document.documentElement.clientWidth;
			
	menuClose.addEventListener('click', () => {
		menuOverlay.classList.remove('nav__overlay_active');
		menu.classList.remove('header__nav_active');
		document.body.classList.remove('_lock');
		document.body.style.paddingRight ='';
	});
	
	menuActive.addEventListener('click', () => {
		
		menuOverlay.classList.add('nav__overlay_active');
		menu.classList.add('header__nav_active');
		document.body.classList.add('_lock');
		document.body.style.paddingRight = widthScroll  + 'px';
	});

	window.addEventListener('resize', () => {
		menuOverlay.classList.remove('nav__overlay_active');
		menu.classList.remove('header__nav_active');
		document.body.classList.remove('_lock');
		document.body.style.paddingRight ='';
	});
}
export{header, menuOverlay, menu};