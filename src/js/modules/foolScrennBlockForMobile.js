//Для блока, який повинен мати FoolScreen-висоту, ставимо: height: calc(var(--vh, 1vh) * 100);

// Спочатку ми отримуємо висоту вікна перегляду і множимо її на 1%, щоб отримати значення для одиниці vh
let vh = window.innerHeight * 0.01;
// Потім ми встановлюємо значення користувацької властивості --vh у корінь документа
document.documentElement.style.setProperty('--vh', `${vh}px`);
