/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./#src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./#src/js/files/changeSlider.js":
/*!***************************************!*\
  !*** ./#src/js/files/changeSlider.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function changeSlider () {
	const slides = document.querySelectorAll('.card-slide');
	console.log(slides)
}


/***/ }),

/***/ "./#src/js/files/dynamicAdapt.js":
/*!***************************************!*\
  !*** ./#src/js/files/dynamicAdapt.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function dynamicAdapt (numbr) {
	(function (arr) {
	  arr.forEach(function (item) {
		 if (item.hasOwnProperty('after')) {
			return;
		 }
		 Object.defineProperty(item, 'after', {
			configurable: true,
			enumerable: true,
			writable: true,
			value: function after() {
			  var argArr = Array.prototype.slice.call(arguments),
				 docFrag = document.createDocumentFragment();
	
			  argArr.forEach(function (argItem) {
				 var isNode = argItem instanceof Node;
				 docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
			  });
	
			  this.parentNode.insertBefore(docFrag, this.nextSibling);
			}
		 });
	  });
	})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);


  const	setArr = document.querySelector(`[data-move${numbr}]`).dataset[`move${numbr}`].split(', '),
		  moveableElem = document.querySelector(`[data-move${numbr}]`),
		  moveToElemChildren = document.querySelector(`.${setArr[0]}`).children,
		  anchorSibling = moveableElem.previousElementSibling,
		  anchorParent = moveableElem.parentElement;

  let widthWindowUser = document.documentElement.clientWidth;

  function move () {
  
	  widthWindowUser = document.documentElement.clientWidth;
	  
	  if(widthWindowUser < setArr[2]) {

		  if(moveToElemChildren.length < 1) {
			  document.querySelector(`.${setArr[0]}`).appendChild(moveableElem);
		  }else{
			  moveToElemChildren[setArr[1] - 2].after(moveableElem);
		  } 
	  }else if(anchorSibling){
		  anchorSibling.after(moveableElem); 
	  }else if(anchorParent) {
		  anchorParent.prepend(moveableElem);
	  }
  }
	  window.addEventListener('resize', () => move());
	  move ();
}
/* harmony default export */ __webpack_exports__["default"] = (dynamicAdapt);

/***/ }),

/***/ "./#src/js/files/header.js":
/*!*********************************!*\
  !*** ./#src/js/files/header.js ***!
  \*********************************/
/*! exports provided: header, menuOverlay, menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "header", function() { return header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuOverlay", function() { return menuOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menu", function() { return menu; });
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


/***/ }),

/***/ "./#src/js/files/imageToBackground.js":
/*!********************************************!*\
  !*** ./#src/js/files/imageToBackground.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isIE__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isIE */ "./#src/js/files/isIE.js");


function ibg(){
	const ibg = document.querySelectorAll('.img-bg');
	
	for (var i = 0; i < ibg.length; i++) {

		if(Object(_isIE__WEBPACK_IMPORTED_MODULE_0__["default"])()){

			if(ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {

				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
				ibg[i].querySelector('img').style.width = '0px';
				ibg[i].querySelector('img').style.height = '0px';

			}
		}else if(ibg[i].querySelector('source') && ibg[i].querySelector('source').getAttribute('srcset') != null){
			
			// ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('source').getAttribute('srcset') + ')';
			ibg[i].querySelector('img').style.width = '';
			ibg[i].querySelector('img').style.height = '';
		}	
	}
}
/* harmony default export */ __webpack_exports__["default"] = (ibg); 


/***/ }),

/***/ "./#src/js/files/isIE.js":
/*!*******************************!*\
  !*** ./#src/js/files/isIE.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function isIE() {
	var ua = navigator.userAgent;
	var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
	return is_ie;
}
/* harmony default export */ __webpack_exports__["default"] = (isIE);

/***/ }),

/***/ "./#src/js/files/isSupportWebp.js":
/*!****************************************!*\
  !*** ./#src/js/files/isSupportWebp.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function testWebp () {
	function test(callback) {

		var webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	
	test(function (support) {
	
		if (support == true) {
			document.querySelector('body').classList.add('_webp');
		} else {
			document.querySelector('body').classList.add('_no-webp');
		}
	});
}
/* harmony default export */ __webpack_exports__["default"] = (testWebp);

/***/ }),

/***/ "./#src/js/files/menuAlign.js":
/*!************************************!*\
  !*** ./#src/js/files/menuAlign.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function menuAlign () {

	const menuItems = document.querySelectorAll('.nav__link'),
			style =  window.getComputedStyle(document.querySelector('.nav__link')),
			marginRightItems = parseInt(style.marginRight);

	menuItems.forEach(item => {
		const menuItemWidht = item.clientWidth;
		item.addEventListener("mouseover", () => {
			const currentmenuItemWidht = item.clientWidth,
			differentWidth = currentmenuItemWidht - menuItemWidht;
			item.style.marginRight = (marginRightItems - differentWidth ) + 'px';
		});
	});
	menuItems.forEach(item => {
		item.addEventListener("mouseout", () => {
			item.style.marginRight = marginRightItems + 'px';
		});
	});
}
/* harmony default export */ __webpack_exports__["default"] = (menuAlign);

/***/ }),

/***/ "./#src/js/files/slider.js":
/*!*********************************!*\
  !*** ./#src/js/files/slider.js ***!
  \*********************************/
/*! exports provided: slider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slider", function() { return slider; });


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



/***/ }),

/***/ "./#src/js/files/sliderAlign.js":
/*!**************************************!*\
  !*** ./#src/js/files/sliderAlign.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function alignHeigthCard () {
	const cards= document.querySelectorAll('.card-slide'),
			arrHeightCards = [];
	let maxHeightCard;

	cards.forEach(card => {
		arrHeightCards.push(card.clientHeight);
	});

	maxHeightCard = Math.max.apply(null, arrHeightCards) + 43;

	if(window.innerWidth > 1580) {
		cards.forEach(card => {
			card.style.height = maxHeightCard + 'px';
		});
	}else{
		cards.forEach(card => {
			card.style.height = 'auto';
		});
	}

}
/* harmony default export */ __webpack_exports__["default"] = (alignHeigthCard);

/***/ }),

/***/ "./#src/js/files/timer.js":
/*!********************************!*\
  !*** ./#src/js/files/timer.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function timer () {

const minutes = document.querySelector('.timer__digit_minutes'),
		seconds = document.querySelector('.timer__digit_seconds'),
		minutesWrapperWidth = minutes.clientWidth,
		secondswrapperwidth = seconds.clientWidth,
		deadLine = 15 * 60 * 1000;

let total = {},
	timeleft = 0,
	some = 30,
	idTimeLeft = setInterval(setTimeLeft, 1000);

  function addZero(num){
		if(num < 10){
			return '0' + num;
		}else{
			 return num;
		}
  }
  function calculateTimeLeft() {
		  timeleft += 1000;
		  
		let totalTime = deadLine - timeleft;

		if(totalTime <= 0){
			 clearInterval(idTimeLeft);
			 totalTime = 0;
		}
		total = {
			 seconds: totalTime/1000 % 60,
			 minutes: Math.floor(totalTime/(1000 * 60) % 60)
		};
  }
  function setTimeLeft (){
		calculateTimeLeft();
		minutes.textContent = addZero(total.minutes);
		seconds.textContent = addZero(total.seconds);
  }  
}
/* harmony default export */ __webpack_exports__["default"] = (timer);

/***/ }),

/***/ "./#src/js/main.js":
/*!*************************!*\
  !*** ./#src/js/main.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _files_imageToBackground__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./files/imageToBackground */ "./#src/js/files/imageToBackground.js");
/* harmony import */ var _files_isSupportWebp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./files/isSupportWebp */ "./#src/js/files/isSupportWebp.js");
/* harmony import */ var _files_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./files/slider */ "./#src/js/files/slider.js");
/* harmony import */ var _files_timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./files/timer */ "./#src/js/files/timer.js");
/* harmony import */ var _files_menuAlign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./files/menuAlign */ "./#src/js/files/menuAlign.js");
/* harmony import */ var _files_dynamicAdapt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./files/dynamicAdapt */ "./#src/js/files/dynamicAdapt.js");
/* harmony import */ var _files_changeSlider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./files/changeSlider */ "./#src/js/files/changeSlider.js");
/* harmony import */ var _files_changeSlider__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_files_changeSlider__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _files_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./files/header */ "./#src/js/files/header.js");
/* harmony import */ var _files_sliderAlign__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./files/sliderAlign */ "./#src/js/files/sliderAlign.js");




// import initMap from './files/map';
// import tabs from './files/tabs';

// import swiper from './files/swiper';
// import catalog from './files/catalog';



// import {smoothScrolling} from './files/scrolling';




		
	Object(_files_imageToBackground__WEBPACK_IMPORTED_MODULE_0__["default"])();
	Object(_files_isSupportWebp__WEBPACK_IMPORTED_MODULE_1__["default"])();
	Object(_files_header__WEBPACK_IMPORTED_MODULE_7__["header"])();
	Object(_files_sliderAlign__WEBPACK_IMPORTED_MODULE_8__["default"])();
	Object(_files_slider__WEBPACK_IMPORTED_MODULE_2__["slider"])();
	Object(_files_timer__WEBPACK_IMPORTED_MODULE_3__["default"])();
	Object(_files_menuAlign__WEBPACK_IMPORTED_MODULE_4__["default"]) ();
	// swiper();
	Object(_files_dynamicAdapt__WEBPACK_IMPORTED_MODULE_5__["default"])(1);
	Object(_files_dynamicAdapt__WEBPACK_IMPORTED_MODULE_5__["default"])(2);
	Object(_files_dynamicAdapt__WEBPACK_IMPORTED_MODULE_5__["default"])(3);
	// modals('.btn-consultation', '#consultation', '.overlay', '#consultation .modal__close', '.pageup');
	// modals('.btn-order', '#order', '.overlay', '#order .modal__close', '.pageup');
	// catalog();
	// align('.catalog-item__subtitle');
	// forms();
	// maskForNumberPhone('[name = phone]');
	// smoothScrolling('.link');
	// footer();


	// =======================================For Google Maps======================================================
	
	
	// var isMobile = /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(navigator.userAgent),
		// scriptMap = document.createElement('script'),
		// mainBody = document.querySelector('body');
	
	// if(!isMobile){
	// 	scriptMap.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyD3QtL2IP05dPUR8aqsAIcooTjiyO8ay3w';
	// 	mainBody.appendChild(scriptMap);
	// 	scriptMap.onload = function(){
	// 		initMap();
	// 	};	
	// }

/***/ })

/******/ });
//# sourceMappingURL=script.js.map