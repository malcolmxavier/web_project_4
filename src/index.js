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

const editAvatarForm = document.querySelector('.popup__form_type_edit-avatar');
const editProfileForm = document.querySelector('.popup__form_type_edit-profile');
const addCardForm = document.querySelector('.popup__form_type_add-card');

const editAvatarValidation = new FormValidator(defaultSettings, editAvatarForm);
const editProfileValidation = new FormValidator(defaultSettings, editProfileForm);
const addCardValidation = new FormValidator(defaultSettings, addCardForm);

editAvatarValidation.enableValidation();
editProfileValidation.enableValidation();
addCardValidation.enableValidation();

//Profile

const profileAvatar = document.querySelector('.avatar_profile');
const editAvatarButton = document.querySelector('.edit-button_avatar');
const editAvatarPopupSelector = '.popup_type_edit-avatar';
const profileName = document.querySelector('.profile__name');
const profileOccupation = document.querySelector('.profile__occupation');
const editProfileButton = document.querySelector('.edit-button_profile');
const editProfilePopupSelector = '.popup_type_edit-profile';

api.getUserInfo()
.then(res => {
  profileAvatar.src = res.avatar;
  profile.setUserInfo(res.name, res.about);
});

function submitEditAvatarForm({avatar}) {
  profileAvatar.src = avatar;
  api.setUserAvatar(avatar);
}

const editAvatarPopup = new PopupWithForm(submitEditAvatarForm, editAvatarPopupSelector);

editAvatarPopup.setEventListeners();

editAvatarButton.addEventListener('click', () => {
  editAvatarPopup.open();
})

const profile = new UserInfo({profileName, profileOccupation});

function submitEditProfileForm({userName, userOccupation}) {
  profile.setUserInfo(userName, userOccupation);
  api.setUserInfo(userName, userOccupation)
  // .then(button.className = 'popup__button saving-button');
};

const editProfilePopup = new PopupWithForm(submitEditProfileForm, editProfilePopupSelector);

editProfilePopup.setEventListeners();

editProfileButton.addEventListener('click', () => {
  editProfilePopup.open();
});

//Cards

const deleteCardPoupSelector = '.popup_type_delete-card';
const imagePopupSelector = '.popup_type_image';
const cardTemplateSelector = '.card-template';
const photoGridListSelector = '.photo-grid__list';
const addButton = document.querySelector('.add-button');
const addCardPopupSelector = '.popup_type_add-card';

api.getUserInfo()
.then(res => {
  const userID = res._id;
  api.getCardList()
  .then(result => {
    const renderCard = (item) => {
      const imagePopup = new PopupWithImage(imagePopupSelector);

      imagePopup.setEventListeners();

      function submitDeleteCardForm() {
        api.removeCard(deleteCardPopup._cardID)
        deleteCardPopup._cardElements.remove();
        deleteCardPopup._cardElements = null;
      }

      const deleteCardPopup = new PopupWithForm(submitDeleteCardForm, deleteCardPoupSelector);

      deleteCardPopup.setEventListeners();

      const handleCardClick = (cardData) => {
        imagePopup.open(cardData);
      }

      const handleDeleteCardClick = (cardID, cardElements) => {
        deleteCardPopup.open();
        deleteCardPopup._cardID = cardID;
        deleteCardPopup._cardElements = cardElements;
      }

      const handleAddCardLike = (cardID) => {
        api.addCardLike(cardID);
      }

      const handleRemoveCardLike = (cardID) => {
        api.removeCardLike(cardID);
      }

      const card = new Card(item, userID, cardTemplateSelector, handleCardClick, handleDeleteCardClick, handleAddCardLike, handleRemoveCardLike);

      photoGridList.addItem(card.createCard(item));
    };

    const photoGridList = new Section({items: result, renderer: renderCard}, photoGridListSelector);

    photoGridList.render();

    function submitAddCardForm(data) {
      api.addCard(data)
      .then(newCard => {
        renderCard(newCard);
      })
    };

    const addCardPopup = new PopupWithForm(submitAddCardForm, addCardPopupSelector);

    addButton.addEventListener('click', () => {
      addCardPopup.open();
    });

    addCardPopup.setEventListeners();
  })
})
