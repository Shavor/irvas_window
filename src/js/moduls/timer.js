import { setInterval } from 'core-js';

const timer = (id, dedLine) => {
	const $ = document.querySelector.bind(document);

	const getClock = (endTime) => {
		let date, hours, mins, sec;
		const dateNow = new Date();

		const t = Date.parse(endTime) - Date.parse(dateNow); //ms

		if ( t <= 0 ) {
			date = 0, hours = 0, mins = 0, sec = 0;
		} else {
			date = Math.floor(t/(1000 * 60 * 60 * 24));
			hours = Math.floor((t/(1000 * 60 * 60)) % 24 );
			mins = Math.floor((t/1000/60) % 60 );
			sec = Math.floor((t/1000) % 60 );

		}

		return {
			'total': t,
			'date': date,
			'hours': hours,
			'mins': mins,
			'sec': sec,
		};
	};

	function zeroNum (num) {
		return num >= 0 && num < 10 ? `0${num}` : num;
	}

	function setClock(selector, endTime) {
		const timer = $(selector),
			  date = timer.querySelector('#days'),
			  hours = timer.querySelector('#hours'),
			  mins = timer.querySelector('#minutes'),
			  sec = timer.querySelector('#seconds'),
			  timeInterval = setInterval(updateClock, 1000);

		updateClock();
		function updateClock(){
			const t = getClock(endTime);
			date.textContent = zeroNum(t.date);
			hours.textContent = zeroNum(t.hours);
			mins.textContent = zeroNum(t.mins);
			sec.textContent = zeroNum(t.sec);

			if (t.total <= 0) {
				clearInterval(timeInterval);
			};
		}
	};

	setClock(id, dedLine)
};

export default timer;