const profileName = document.querySelector('.profile__name');
const profileOccupation = document.querySelector('.profile__occupation');
const editButton = document.querySelector('.edit-button');
const popup = document.querySelector('.popup');
const form = document.querySelector('.popup__form');
const popupName = document.querySelector('.popup__name');
const popupOccupation = document.querySelector('.popup__occupation');
const saveButton = document.querySelector('.save-button');
const closeButton = document.querySelector('.close-button');

function openPopup () {
  popup.classList.toggle('popup_opened');

  if (profileName) {
    popupName.value = profileName.textContent;
  } else {
    popupName.value;
  }

  if (profileOccupation) {
    popupOccupation.value = profileOccupation.textContent;
  } else {
    popupOccupation.value;
  }
}

function submitForm (event) {
  event.preventDefault();

  profileName.textContent = popupName.value;
  profileOccupation.textContent = popupOccupation.value;

  closePopup ();
}

function closePopup () {
  popup.classList.toggle('popup_opened');
}

editButton.addEventListener('click', openPopup);

closeButton.addEventListener('click', closePopup);

form.addEventListener('submit', submitForm);
