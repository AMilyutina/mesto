let modalWindow = document.querySelector('.popup');
let AddModalWindow = document.querySelector('.popup-add');
let modalWindowCloseBtn = modalWindow.querySelector('.popup__close-button');
let AddModalWindowCloseBtn = AddModalWindow.querySelector('.popup-add__close-button');
let profileEditBtn = document.querySelector('.profile__edit-button');
let profileAddBtn = document.querySelector('.profile__add-button');
let modalWindowName = document.querySelector('.popup__input_type_name');
let AddModalWindowName = document.querySelector('.popup-add__input_type_name');
let modalWindowDescription = document.querySelector('.popup__input_type_description');
let AddModalWindowDescription = document.querySelector('.popup-add__input_type_description');
let profileName = document.querySelector('.profile__title');
let profileDescription = document.querySelector('.profile__subtitle');
let formElement = modalWindow.querySelector('.popup__form');
const templateElement = document.querySelector('#element').content;
const cardsContainer = document.querySelector('.elements');
let elementInputName = document.querySelector('.popup-add__input_type_name');
let elementInputLink = document.querySelector('.popup-add__input_type_description');
let AddModalWindowForm = document.querySelector('.popup-add__form');
let elementPopup = document.querySelector('.element-popup');
let elementPopupImg = document.querySelector('.element-popup__image');
let elementPopupTitle = elementPopup.querySelector('.element-popup__title');
let elementPopupCloseBtn = elementPopup.querySelector('.element-popup__close-btn');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];



function renderCards(text, img) {
  const cardElement = templateElement.querySelector('.element').cloneNode(true);
  const cardTextElement = cardElement.querySelector('.element__title');
  const cardImage = cardElement.querySelector('.element__photo');

  cardTextElement.textContent = text;
  cardImage.src = img;


const cardDeleteBtn = cardElement.querySelector('.element__delete');
cardDeleteBtn.addEventListener('click', (event) =>{
  event.target.closest('.element').remove();
});

  cardsContainer.append(cardElement);
};

initialCards.forEach((item) => {
  renderCards(item.name, item.link);
});



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

 function formSubmitHandler (evt) {
  evt.preventDefault();
  let name = modalWindowName.value;
  let description = modalWindowDescription.value;
  profileName.textContent = name;
  profileDescription.textContent = description;
  closeModalWindow();
  };

formElement.addEventListener('submit', formSubmitHandler);



function openAddModalWindow() {
  AddModalWindow.classList.toggle('popup-add_is-opened');
}

function closeAddModalWindow() {
  AddModalWindow.classList.remove('popup-add_is-opened');
}


profileAddBtn.addEventListener('click', openAddModalWindow);
AddModalWindowCloseBtn.addEventListener('click', closeAddModalWindow);

 function AddformSubmitHandler (evt) {
  evt.preventDefault();
  let name = AddModalWindowName.value;
  let description = AddModalWindowName.value;
  profileName.textContent = name;
  profileDescription.textContent = description;
  closeAddModalWindow();
  };

formElement.addEventListener('submit', AddformSubmitHandler);


function elementPopupSubmit (evt) {
  evt.preventDefault();
  let elementName = elementInputName.value;
  let elementLink = elementInputLink.value;
  renderCards(elementName, elementLink);
  AddModalWindow.classList.remove('popup-add_is-opened')
};

AddModalWindowForm.addEventListener('submit', AddformSubmitHandler);

document.body.addEventListener('click', function (event){
if (event.target.classList.contains('element__like')){
  event.target.classList.toggle('element__like_is_active');
} else if (event.target.classList.contains('element__photo')){
  elementPopup.classList.toggle('element-popup__is-opened');
  elementPopupImg.src = event.target.src;
  let element = event.target.closest('.element');
  let elementTitle = element.querySelector('.element__title');

  elementPopupTitle.textContent = elementTitle.textContent;
}
});

 function closeElementPopup() {
  elementPopup.classList.remove('element-popup__is-opened');
 }

 elementPopupCloseBtn.addEventListener('click', closeElementPopup);
