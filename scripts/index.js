let modalWindow = document.querySelector('.popup');
let modalWindowCloseBtn = modalWindow.querySelector('.popup__close-button');
let profileEditBtn = document.querySelector('.profile__edit-button');
let modalWindowName = document.querySelector('.popup__input_type_name');
let modalWindowDescription = document.querySelector('.popup__input_type_description');
let profileName = document.querySelector('.profile__title');
let profileDescription = document.querySelector('.profile__subtitle');

function openModalWindow() {
  modalWindowName.value = profileName.textContent;
  modalWindowDescription.value = profileDescription.textContent;
  modalWindow.classList.toggle('popup_is-opened');
}

function closeModalWindow() {
  modalWindow.classList.remove('popup_is-opened');
}


profileEditBtn.addEventListener('click', openModalWindow);
modalWindowCloseBtn.addEventListener('click', closeModalWindow);
