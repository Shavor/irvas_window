import './slider';

import modals from './moduls/modals';
import tabs from './moduls/tabs';
import forms from './moduls/forms';
import timer from './moduls/timer';
import changeModalState from './moduls/modalState';
import images from './moduls/images';


window.addEventListener('DOMContentLoaded', () => {
	'use strict'

	let dedLine = '2023-11-04';
	let modalState = {};
	modals();
	tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'slick-active');
	tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
	tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
	forms(modalState);
	timer('.container1', dedLine);
	changeModalState(modalState);
	images()
})