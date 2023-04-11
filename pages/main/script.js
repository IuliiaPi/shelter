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
const petsPopupContainer = document.querySelector('.popup__container');
const petsPopupContent = document.querySelector('.popup__content');

const popupImg = document.querySelector('.popup__img');
const popupName = document.querySelector('.popup__name');
const popupType = document.querySelector('.popup__type');
const popupBreed = document.querySelector('.popup__breed');
const popupDescription = document.querySelector('.popup__description');
// popupName.textContent = "Jennifer";

async function getCard() {
    let pets = 'pets.json';
    const res = await fetch(pets);
    const data = await res.json();
    // console.log(data);
    
    popupImg.textContent = `${data.img}`;
    popupName.textContent = `${data.name}`;
    popupType.textContent = `${data.type}`;
    popupBreed.textContent = `${data.breed}`;
    popupDescription.textContent = `${data.description}`;
}
// getCard();

// if (cards) {
//     cards.forEach(card => {
//         card.addEventListener("click", getCard);
//     });
// }

if (cards) {
    cards.forEach(card => {
        card.addEventListener("click", onCardClick);
    });
}

function onCardClick(e) {
    document.body.classList.toggle('_lock');
    petsPopup.classList.add('_active', 'display-popup');

}

popupBtn.addEventListener("click", closePopup);

petsPopup.addEventListener('click', function (event) {
    const isOutSide = !event.target.closest('.popup__content');
    if (isOutSide) {
        closePopup();
    }
});

// petsPopupContent.addEventListener('click', (e) => {
//     document.body.classList.toggle('_lock');
//     petsPopup.classList.add('_active');
// });

// document.addEventListener('click', (e) => {
//     const click = e.composedPath().includes(petsPopupContent);
// if (!click) {
// document.body.classList.toggle('_lock');
// petsPopupContent.classList.add('_active');
// petsPopup.classList.add('_active');
// petsPopup.addEventListener("click", closePopup);
// }
// });


// const petsPopupContentID = document.querySelector('#popup__content');

// document.addEventListener('click', (e) => {
// if(e.target.closers('.popup__content')) return
// // petsPopup.classList.remove('_active');
// petsPopupContent.classList.remove('_active');
// });


// const petsPopupContentID = document.querySelector('#popup__content');

// document.addEventListener('click', (e) => {
// if(e.target.id !== 'popup__content'){
// petsPopup.classList.remove('_active');}
// });


// const popupQuerySelector = "#popup";
// const popupEl = document.querySelector(popupQuerySelector);
// document.addEventListener("click", (e) => {
//     // Check if the filter list parent element exist
//     const isClosest = e.target.closest(popupQuerySelector);

//     // If `isClosest` equals falsy & popup has the class `show`
//     // then hide the popup
//     if (!isClosest && popupEl.classList.contains("_active")) {
//       popupEl.classList.remove("_active");
//     }
//   });

function closePopup(e) {
    if (petsPopup.classList.contains('_active')) {
        document.body.classList.remove('_lock');
        petsPopup.classList.remove('_active');
        // petsPopup.classList.add('display-popup-close');
    }
}




// carousel

const BTN_LEFT = document.querySelector("#btn-left");
const BTN_RIGHT = document.querySelector("#btn-right");
const CAROUSEL = document.querySelector("#carousel");
const ITEM_LEFT = document.querySelector("#item-left");
const ITEM_RIGHT = document.querySelector("#item-right");

const createCardTemplate = () => {
    const card = document.createElement("div");
    card.classList.add("card");
    return card;
}

const moveLeft = () => {
    CAROUSEL.classList.add("transition-left");
    BTN_LEFT.removeEventListener("click", moveLeft); // can not click
    BTN_RIGHT.removeEventListener("click", moveRight); // can not click
};

const moveRight = () => {
    CAROUSEL.classList.add("transition-right");
    BTN_LEFT.removeEventListener("click", moveLeft); // can not click
    BTN_RIGHT.removeEventListener("click", moveRight);  // can not click
};

BTN_LEFT.addEventListener("click", moveLeft);
BTN_RIGHT.addEventListener("click", moveRight);

// BTN_LEFT.addEventListener("click", () => {
//     // alert(BTN_LEFT);
//     CAROUSEL.classList.add("transition-left");  
// });

CAROUSEL.addEventListener("animationend", (animationEvent) => {
    let changedItem;
    if (animationEvent.animationName === "move-left") {
        CAROUSEL.classList.remove("transition-left");
        // const leftItems = document.querySelector("#item-left").innerHTML;
        // document.querySelector("#item-active").innerHTML = leftItems;
        changedItem = ITEM_LEFT;
        document.querySelector("#item-active").innerHTML = ITEM_LEFT.innerHTML;

    } else {
        CAROUSEL.classList.remove("transition-right");
        changedItem = ITEM_RIGHT;
        CAROUSEL.classList.remove("transition-left");
        document.querySelector("#item-active").innerHTML = ITEM_RIGHT.innerHTML;
    }

    changedItem.innerHTML = "";
    for (let i = 0; i < 3; i++) {
        const card = createCardTemplate();
        // card.innerText = Math.random() * 8;
        card.innerHTML = Math.random() * 8;
        // if
        changedItem.appendChild(card);
    }

    BTN_LEFT.addEventListener("click", moveLeft);
    BTN_RIGHT.addEventListener("click", moveRight);
});



// BTN_RIGHT.addEventListener("click", () => {
//     CAROUSEL.classList.add("transition-right")  
// });