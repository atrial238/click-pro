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
export default alignHeigthCard ;