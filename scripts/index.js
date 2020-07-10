//Imports

import FormValidator from './FormValidator.js';
import Card from './Card.js';

// Form Validation

const defaultSettings = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
};

const editProfileForm = document.querySelector('.popup__form_type_edit-profile');
const addCardForm = document.querySelector('.popup__form_type_add-card');

const editProfileValidation = new FormValidator(defaultSettings, editProfileForm);
const addCardValidation = new FormValidator(defaultSettings, addCardForm);

editProfileValidation.enableValidation();
addCardValidation.enableValidation();

//Profile

const profileName = document.querySelector('.profile__name');
const profileOccupation = document.querySelector('.profile__occupation');

//Profile Popup

const editProfilePopup = document.querySelector('.popup_type_edit-profile');
const popupName = document.querySelector('.popup__input_type_name');
const popupOccupation = document.querySelector('.popup__input_type_occupation');
const editProfileCloseButton = editProfilePopup.querySelector('.close-button');

//Photo Grid

const photoGridList = document.querySelector('.photo-grid__list');
const cardTemplateSelector = '.card-template';
const initialCards = [
  {
    label: 'Overhead Dock',
    link: 'https://images.unsplash.com/photo-1531823920633-28bf6dee4e7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80'
  },
  {
    label: 'Island From Land',
    link: 'https://images.unsplash.com/photo-1505235901362-40f1b8b91573?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1957&q=80'
  },
  {
    label: 'Blue and White Dock',
    link: 'https://images.unsplash.com/photo-1503464093195-36b34a0869bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
  },
  {
    label: 'Lifeguard Station',
    link: 'https://images.unsplash.com/photo-1501240911044-638ddbf4e589?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80'
  },
  {
    label: 'Circular Gates',
    link: 'https://images.unsplash.com/photo-1527117499127-8169c886e66e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'
  },
  {
    label: 'Golden Gate Bridge',
    link: 'https://images.unsplash.com/photo-1551074698-a6b35d4ccc92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2801&q=80'
  }
];

//Add Card Popup

const addCardPopup = document.querySelector('.popup_type_add-card');
const addCardCloseButton = addCardPopup.querySelector('.close-button');

// Buttons
const editButton = document.querySelector('.edit-button');
const addButton = document.querySelector('.add-button');

// Functions

function closePopup(popup) {
  popup.classList.remove('popup_opened');
};

function closePopupWithEscape(evt) {
  const ESC_KEY = 27;
  if (evt.which === ESC_KEY) {
    closePopup(document.querySelector('.popup_opened'));
    document.removeEventListener('keydown', closePopupWithEscape);
  }
};

function openPopup(popup) {
  popup.classList.add('popup_opened');

  document.addEventListener('keydown', closePopupWithEscape);

  if (popup.classList.contains('.popup_type_edit-profile')) {
    if (profileName) {
      popupName.value = profileName.textContent;
    }

    if (profileOccupation) {
      popupOccupation.value = profileOccupation.textContent;
    }
  }
};

const renderCard = (data, cardTemplateSelector) => {
  const card = new Card(data, cardTemplateSelector);
  photoGridList.prepend(card.createCard());
};

initialCards.forEach((data) => {
  renderCard(data, cardTemplateSelector);
});

function submitEditProfileForm(evt) {
  evt.preventDefault();

  profileName.textContent = popupName.value;
  profileOccupation.textContent = popupOccupation.value;

  closePopup(editProfilePopup);
};

function submitAddCardForm(evt) {
  evt.preventDefault();

  const data = {
    label: addCardForm.querySelector('.popup__input_type_label').value,
    link: addCardForm.querySelector('.popup__input_type_url').value
  };

  renderCard(data, cardTemplateSelector);

  closePopup(addCardPopup);
};

editButton.addEventListener('click', () => {
  openPopup(editProfilePopup);
});

editProfileCloseButton.addEventListener('click', () => {
  closePopup(editProfilePopup);
});

editProfileForm.addEventListener('submit', submitEditProfileForm);

addButton.addEventListener('click', () => {
  openPopup(addCardPopup);
});

addCardCloseButton.addEventListener('click', () => {
  closePopup(addCardPopup);
});

addCardForm.addEventListener('submit', submitAddCardForm);

window.addEventListener('click', (evt) => {
  if (evt.target == editProfilePopup) {
    closePopup(editProfilePopup);
  } else if (evt.target == addCardPopup) {
    closePopup(addCardPopup);
  }
});
