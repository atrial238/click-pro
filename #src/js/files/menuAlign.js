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
export default menuAlign;