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
export default timer;