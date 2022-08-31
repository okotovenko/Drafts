// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

const screenWidth = window.screen.width;

let headerIconsBottom = document.querySelector('.header__icons-bottom > a');
headerIconsBottom.addEventListener('click', function () {
	if (screenWidth < 426) {
		headerContainer.classList.remove('active');
	}
});

let home = document.querySelector('#home');
home.addEventListener('click', function () {
	short.classList.remove('active');
})


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




