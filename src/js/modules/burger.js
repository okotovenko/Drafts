//-----------------
const screenWidth = window.screen.width;

let headerIconsBottom = document.querySelector('.header__icons-bottom > a');
headerIconsBottom.addEventListener('click', function () {
	if (screenWidth < 426) {
		headerContainer.classList.remove('active');
		body.classList.toggle('unlock');
	}
});

//-----------------
let home = document.querySelector('#home');
home.addEventListener('click', function () {
	short.classList.remove('active');
})

//-----------------
let short = document.querySelector('.short');
let navBurger = document.querySelector('.nav__burger');
let headerContainer = document.querySelector('.header__container');
let body = document.querySelector('body');

navBurger.addEventListener('click', function () {
	body.classList.toggle('unlock');

	if (screenWidth > 426) {
		short.classList.toggle('active');
	}

	if (screenWidth < 426) {
		headerContainer.classList.toggle('active');
	}
})

//---------------Підйом догори------------
navBurger.addEventListener('click', backToTop);

export function backToTop() {
	if (window.pageYOffset > 0) {
		window.scrollBy(0, -20);
		setTimeout(backToTop, 0);
	}
}




