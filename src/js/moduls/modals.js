const modals = () => {
	function bindModal (btnSelector, modalSelector, closeSelector, closeClickOverlay = true) {
		const btns = document.querySelectorAll(btnSelector),
			  modal = document.querySelector(modalSelector),
			  close = document.querySelector(closeSelector),
			  windows = document.querySelectorAll('[data-modal]'),
			  scroll = calcScroll();
			  console.log(scroll);

		function hidden(triger) {
			triger.style.display = 'none';
			document.body.style.overflow = '';
		};

		function show(triger) {
			triger.style.display = 'block';
			document.body.style.overflow = 'hidden';
		};
		btns.forEach(btn => {
			btn.addEventListener('click', (e) => {
				if(e.target) {
					e.preventDefault();
				};

				windows.forEach(window => {
					window.style.display = 'none';
				})

				modal.style.display = 'block';
				document.body.style.overflow = 'hidden';
				document.body.style.marginRight = `${scroll}px`;
			});
		});

		modal.addEventListener('click', (e) => {
			if(e.target == modal && closeClickOverlay) {
				hidden(modal);

				windows.forEach(window => {
					window.style.display = 'none';
				});
				document.body.style.marginRight = '0px';

			};
		})

		close.addEventListener('click', () => {
			modal.style.display = 'none';
			document.body.style.overflow = '';
			document.body.style.marginRight = '0px';


			windows.forEach(window => {
				window.style.display = 'none';
			});
		});
	};

	function showModals (selector, time) {
		setTimeout(() => {
			document.querySelector(selector).style.display = 'block';
			document.body.style.overflow = 'hidden';
		}, time);
	};

	function calcScroll () {
		let div = document.createElement('div');
		div.style.width = '50px';
		div.style.height = '50px';
		div.style.overflowY = 'scroll';
		div.style.visibility = 'hidden';

		document.body.appendChild(div);
		let scrollWidth = div.offsetWidth - div.clientWidth;
		div.remove();
		return scrollWidth;
	}


	bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
	bindModal('.phone_link', '.popup', '.popup .popup_close');
	bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
	bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
	bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
	// showModals('.popup', 60000)
}

export default modals;