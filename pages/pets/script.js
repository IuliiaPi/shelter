// menu burger

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const shadow = document.querySelector('.shadow');

if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        shadow.classList.toggle("shadow_active");
    });
}

const menuLinks = document.querySelectorAll('.menu__link');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });
}

shadow.addEventListener("click", onMenuLinkClick);

function onMenuLinkClick(e) {
    if (iconMenu.classList.contains('_active')) {
        document.body.classList.remove('_lock');
        iconMenu.classList.remove('_active');
        menuBody.classList.remove('_active');
        shadow.classList.toggle("shadow_active");
    }
}

document.addEventListener('click', (e) => {
    const click = e.composedPath().includes(menuLinks);
    if (!click) {
        menuBody.addEventListener("click", onMenuLinkClick);
    }
});

//  popup

const cards = document.querySelectorAll('.card');
const petsPopup = document.querySelector('.popup');
const popupBtn = document.querySelector('.popup__btn');

if (cards) {
    cards.forEach(card => {
        card.addEventListener("click", onCardClick);
    });
}

function onCardClick(e) {
        document.body.classList.toggle('_lock');
        petsPopup.classList.add('_active');
    }

popupBtn.addEventListener("click", closePopup);

function closePopup(e) {
    if (petsPopup.classList.contains('_active')) {
        document.body.classList.remove('_lock');
        petsPopup.classList.remove('_active');
    }
}