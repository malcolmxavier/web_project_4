const profileName = document.querySelector('.profile__name');
const profileOccupation = document.querySelector('.profile__occupation');
const editButton = document.querySelector('.edit-button');
const editProfilePopup = document.querySelector('.popup_type_edit-profile');
const profileForm = document.querySelector('.popup__form_type_edit-profile');
const popupName = document.querySelector('.popup__input_type_name');
const popupOccupation = document.querySelector('.popup__input_type_occupation');
const editProfileCloseButton = editProfilePopup.querySelector('.close-button');
const addButton =document.querySelector('.add-button');
const photoGridList = document.querySelector('.photo-grid__list');
const initialCards = [
  {
    name: 'Overhead Dock',
    link: './images/overhead-dock.jpg'
  },
  {
    name: 'Island From Land',
    link: './images/island-from-land.jpg'
  },
  {
    name: 'Green and White Dock',
    link: './images/green-and-white-dock.jpg'
  },
  {
    name: 'Lifeguard Station',
    link: './images/lifeguard-station.jpg'
  },
  {
    name: 'Circular Gates',
    link: './images/circular-gates.jpg'
  },
  {
    name: 'Golden Gate Bridge',
    link: './images/golden-gate-bridge.jpg'
  }
];
const cardTemplate = document.querySelector('.card-template').content.querySelector('.photo-grid__item');
const cardForm = document.querySelector('.popup__form_type_add-card');

function togglePopup (popup) {
  popup.classList.toggle('popup_opened');

  if (popup.classList.contains('.popup_type_edit-profile')) {
    if (profileName) {
      popupName.value = profileName.textContent;
    }

    if (profileOccupation) {
      popupOccupation.value = profileOccupation.textContent;
    }
  }
};

const createCard = (data) => {
  const cardElements = cardTemplate.cloneNode(true);
  const cardImage = cardElements.querySelector('.photo-grid__image');
  const trashButton = cardElements.querySelector('.trash-button');
  const cardLabel= cardElements.querySelector('.photo-grid__label');
  const likeButton = cardElements.querySelector('.like-button');

  cardImage.style.backgroundImage = `url(${data.link})`
  cardLabel.textContent = data.name;

  cardImage.addEventListener('click', () => {
    togglePopup(imagePopup);
  })

  trashButton.addEventListener('click', (e) => {
    e.target.closest('.photo-grid__item').remove();
  })

  likeButton.addEventListener('click', () => {

  })

  return cardElements;
};
const renderCard = (data) => {
  photoGridList.prepend(createCard(data));
};
const addCardPopup = document.querySelector('.popup_type_add-card');
const addCardCloseButton = addCardPopup.querySelector('.close-button');
const imagePopup = document.querySelector('.popup_type_image');
const imageCloseButton = imagePopup.querySelector('.close-button');

initialCards.forEach((data) => {
  renderCard(data);
});

function submitProfileForm (evt) {
  evt.preventDefault ();

  profileName.textContent = popupName.value;
  profileOccupation.textContent = popupOccupation.value;

  togglePopup ();
}

editButton.addEventListener('click', () => {
  togglePopup(editProfilePopup);
});

editProfileCloseButton.addEventListener('click', () => {
  togglePopup(editProfilePopup);
});

profileForm.addEventListener('submit', submitProfileForm);

addButton.addEventListener('click', () => {
  togglePopup(addCardPopup);
});

addCardCloseButton.addEventListener('click', () => {
  togglePopup(addCardPopup);
});

cardForm.addEventListener('submit', renderCard);

imageCloseButton.addEventListener('click', () => {
  togglePopup(imagePopup);
});
