let modalWindow = document.querySelector('.popup');
let modalWindowCloseBtn = modalWindow.querySelector('.popup__close-button');
let profileEditBtn = document.querySelector('.profile__edit-button')
let pageOverlay = document.querySelector('.page')
let modalWindowName = document.querySelector('.popup__name')
let modalWindowDescription = document.querySelector('.popup__description')
let profileName = document.querySelector('.profile__title')
let profileDescription = document.querySelector('.profile__subtitle')

function openModalWindow() {
  modalWindowName.value = profileName.textContent;
  modalWindowDescription.value = profileDescription.textContent;
  modalWindow.classList.toggle('popup_is-opened');
}


function togglePageOverlay() {
  pageOverlay.classList.toggle('page_overlay');
}


profileEditBtn.addEventListener('click', openModalWindow);
modalWindowCloseBtn.addEventListener('click', openModalWindow);
profileEditBtn.addEventListener('click', togglePageOverlay);
modalWindowCloseBtn.addEventListener('click', togglePageOverlay);
