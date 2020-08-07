//Imports

import './index.css';
import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import API from '../components/API.js';

//API

const api = new API({
  baseURL: "https://around.nomoreparties.co/v1/group-3",
  headers: {
    authorization: "bfb84dd3-54e8-4642-a5bf-7fe819e5fd4b",
    "Content-Type": "application/json"
  }
});

// console.log(api.getUserInfo());
// api.getUserInfo().then(res => {
//   console.log(res.name, res.about)
// });

//Form Validation

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

api.getUserInfo()
.then(res => {
  profile.setUserInfo(res.name, res.about)
});

//Edit Profile Popup

const editProfilePopupSelector = '.popup_type_edit-profile';

const popupName = document.querySelector('.popup__input_type_name').value;
const popupOccupation = document.querySelector('.popup__input_type_occupation').value;

//Photo Grid

const imagePopupSelector = '.popup_type_image';
const cardTemplateSelector = '.card-template';
const photoGridListSelector = '.photo-grid__list';

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

const addCardPopupSelector = '.popup_type_add-card';

// Buttons
const editButton = document.querySelector('.edit-button');
const addButton = document.querySelector('.add-button');

// Card Rendering and Image Popup Functionality

const imagePopup = new PopupWithImage(imagePopupSelector);

imagePopup.setEventListeners();

const handleCardClick = (data) => {
  imagePopup.open(data);
}

const handleDeleteCardClick = (cardID) => {
  API.removeCard(cardID);
}

const renderCard = (item) => {
  const card = new Card(item, cardTemplateSelector, handleCardClick);
  photoGridList.addItem(card.createCard(item));
};

const photoGridList = new Section({items: initialCards, renderer: renderCard}, photoGridListSelector);

photoGridList.render();


// Edit Profile Form Functionality

const profile = new UserInfo({profileName, profileOccupation})

function submitEditProfileForm({userName, userOccupation}) {
  profile.setUserInfo(userName, userOccupation);
};

editButton.addEventListener('click', () => {
  editProfilePopup.open();
});

const editProfilePopup = new PopupWithForm(submitEditProfileForm, editProfilePopupSelector);

editProfilePopup.setEventListeners();

// Add Card Form Functionality

function submitAddCardForm(data) {
  renderCard(data);
};

addButton.addEventListener('click', () => {
  addCardPopup.open();
});

const addCardPopup = new PopupWithForm(submitAddCardForm, addCardPopupSelector);

addCardPopup.setEventListeners();
