const forms = (state) => {
	const formAll = document.querySelectorAll('form'),
		  inputs = document.querySelectorAll('input'),
		  inputsPhone = document.querySelectorAll('input[name="user_phone"]');
	
	inputsPhone.forEach(item => {
		item.addEventListener('input', ()=> {
			item.value = item.value.replace(/\D/, '');
		});
	});

	const clearState = (obj) => {
		for(let key in obj) {
			delete obj[key];
		};
	};

	const message = {
		loading: 'Загрузка...',
		successe: 'Спасибо!! Скоро мы с Вами свяжемся',
		error: 'Что-то пошло не так'
	};

	const postData = async (url, data) => {
		document.querySelector('.status').textContent = message.loading;

		const rest = await fetch(url, {
			method: 'POST',
			body: data
		});

		return await rest.text();
	};

	const clearInput = () => {
		inputs.forEach(input => {
			input.value = '';
		})
	}

	formAll.forEach(form => {
		form.addEventListener('submit', (event) => {
			event.preventDefault();

			let statusMessage = document.createElement('div');
			statusMessage.classList.add('status');
			form.appendChild(statusMessage);

			const formData = new FormData(form);
			if(form.getAttribute('data-calc') === 'end') {
				for(let key in state) {
  					formData.append(key, state[key]);
				}
			}

			postData('assets/server.php', formData)
				.then(res => {
					console.log(res);
					statusMessage.textContent = message.successe;
					clearState(state);
				})
				.catch(()=> {
					statusMessage.textContent = message.successe;
				})
				.finally(()=> {
					clearInput();
					setTimeout(() => {
						statusMessage.remove();
					},4000)
				})
		})
	})

};

export default forms;
