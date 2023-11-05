const changeModalState = (state) => {
	const windowForm = document.querySelectorAll('.balcon_icons_img'),
		  windowWidth = document.querySelectorAll('#width'),
		  windowHeigtn = document.querySelectorAll('#height'),
		  windowType = document.querySelectorAll('#view_type'),
		  windowProfile = document.querySelectorAll('.checkbox');

	const checkNumInputs = (elem) => {
		elem.forEach(item => {
			item.addEventListener('input', ()=> {
				item.value = item.value.replace(/\D/, '');
			});
		});
	};

	checkNumInputs(windowWidth);
	checkNumInputs(windowHeigtn);

	const bindActiveToElem = (event, elem, prop) => {
		elem.forEach((item, i) => {
			item.addEventListener(event, ()=>{
				switch (item.nodeName) {
					case 'SPAN':
						state[prop] = i;
					break;
					case 'INPUT':
						if(item.getAttribute('type') === 'checkbox'){
							i === 0 ? state[prop] = 'Cold' : state[prop] = 'Warm';
							elem.forEach((item, j) => {
								item.checked = false;
								i === j ? item.checked = true : item.checked = false;
							});
						} else {
							state[prop] = item.value;
						};
					break;
					case 'SELECT':
						state[prop] = item.value;
					break;
				};
				console.log(state);
			})
		})
	}

	bindActiveToElem('click', windowForm, 'form');
	bindActiveToElem('input', windowWidth, 'width');
	bindActiveToElem('input', windowHeigtn, 'heigtn');
	bindActiveToElem('change', windowProfile, 'profile');
	bindActiveToElem('change', windowType, 'profile');
	
};

export default changeModalState;