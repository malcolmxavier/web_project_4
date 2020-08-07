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
const editButton = document.querySelector('.edit-button');
const editProfilePopupSelector = '.popup_type_edit-profile';

api.getUserInfo()
.then(res => {
  profile.setUserInfo(res.name, res.about)
});

const profile = new UserInfo({profileName, profileOccupation})

function submitEditProfileForm({userName, userOccupation}) {
  profile.setUserInfo(userName, userOccupation);
  api.setUserInfo(userName, userOccupation);
};

const editProfilePopup = new PopupWithForm(submitEditProfileForm, editProfilePopupSelector);

editProfilePopup.setEventListeners();

editButton.addEventListener('click', () => {
  editProfilePopup.open();
});

//Cards

const imagePopupSelector = '.popup_type_image';
const cardTemplateSelector = '.card-template';
const photoGridListSelector = '.photo-grid__list';
const addButton = document.querySelector('.add-button');
const addCardPopupSelector = '.popup_type_add-card';

const handleCardClick = (data) => {
  imagePopup.open(data);
}

const handleDeleteCardClick = (cardID) => {
  api.removeCard(cardID);
}

api.getCardList()
.then(res => {
  const renderCard = (item) => {
    const card = new Card(item, cardTemplateSelector, handleCardClick, handleDeleteCardClick);
    photoGridList.addItem(card.createCard(item));
  };

  const photoGridList = new Section({items: res, renderer: renderCard}, photoGridListSelector);

  photoGridList.render();

  function submitAddCardForm(data) {
    api.addCard(data)
    .then(res => {
      renderCard(data);
    })
  };

  const addCardPopup = new PopupWithForm(submitAddCardForm, addCardPopupSelector);

  addButton.addEventListener('click', () => {
    addCardPopup.open();
  });

  addCardPopup.setEventListeners();
})



const imagePopup = new PopupWithImage(imagePopupSelector);

imagePopup.setEventListeners();
