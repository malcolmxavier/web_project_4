const profileName = document.querySelector('.profile__name');
const profileOccupation = document.querySelector('.profile__occupation');
const editButton = document.querySelector('.edit-button');
const popup = document.querySelector('.popup');
const form = document.querySelector('.popup__form');
const popupName = document.querySelector('.popup__name');
const popupOccupation = document.querySelector('.popup__occupation');
const closeButton = document.querySelector('.close-button');

function updateProfile (profileName, profileOccupation) {
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

function togglePopup () {
  popup.classList.toggle('popup_opened');
  updateProfile (profileName, profileOccupation);
}

function submitForm (event) {
  event.preventDefault ();

  profileName.textContent = popupName.value;
  profileOccupation.textContent = popupOccupation.value;

  togglePopup ();
}

editButton.addEventListener('click', togglePopup);

closeButton.addEventListener('click', togglePopup);

form.addEventListener('submit', submitForm);
