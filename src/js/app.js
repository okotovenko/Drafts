"use strict"

// Перевірка підтримки webр, додавання класу webр або no-webp для html
import * as webpFunctions from "./modules/webpFunctions.js";
webpFunctions.isWebp();

// Лічильник збільшення чисел від 0 до 'html'в елементі з "data-digits-counter"
// import * as windowLoad from "./modules/couterAtScroll.js";
// windowLoad();

// Кнопка "Вгору"
// import * as buttonUp from "./modules/buttonUp.js";
// trackScroll();
// backToTop();

// "Aкордеон"
// import * as AcordeonWindowSize from "./modules/JQAcordeon.js";
// AcordeonWindowSize();

// "Бургер, анімація випадаючого меню та стрілки"
import * as active from "./modules/burger.js";
active();

// Анімація "графіку"
//import * as animateLine from "./modules/animateLine.js";
//animateLine();

// Код слайдеру "SLICK"
import * as slick from "./modules/slick.js";
slick();

// Налаштування слайдеру "SLICK"
import * as slickSettings from "./modules/slickSettings.js";
slickSettings();

// Налаштування для браузерів мобільних пристроїв (наприклад, 
//Chrome на висоті 100vh вираховує свої меню. Даний скріпт 
//вираховує висоту, враховуючи це)
import * as foolScrennBlockForMobile from "./modules/foolScrennBlockForMobile.js";
foolScrennBlockForMobile();








