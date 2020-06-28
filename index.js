//Profile

const profileName = document.querySelector('.profile__name');
const profileOccupation = document.querySelector('.profile__occupation');
const editProfilePopup = document.querySelector('.popup_type_edit-profile');
const profileForm = document.querySelector('.popup__form_type_edit-profile');

//Profile Popup

const popupName = document.querySelector('.popup__input_type_name');
const popupOccupation = document.querySelector('.popup__input_type_occupation');
const editProfileCloseButton = editProfilePopup.querySelector('.close-button');

//Photo Grid
const photoGridList = document.querySelector('.photo-grid__list');
const initialCards = [
  {
    label: 'Overhead Dock',
    link: './images/overhead-dock.jpg'
  },
  {
    label: 'Island From Land',
    link: './images/island-from-land.jpg'
  },
  {
    label: 'Green and White Dock',
    link: './images/green-and-white-dock.jpg'
  },
  {
    label: 'Lifeguard Station',
    link: './images/lifeguard-station.jpg'
  },
  {
    label: 'Circular Gates',
    link: './images/circular-gates.jpg'
  },
  {
    label: 'Golden Gate Bridge',
    link: './images/golden-gate-bridge.jpg'
  }
];
const cardTemplate = document.querySelector('.card-template').content.querySelector('.photo-grid__item');
const cardForm = document.querySelector('.popup__form_type_add-card');

//Add Card Popup

const addCardPopup = document.querySelector('.popup_type_add-card');
const addCardCloseButton = addCardPopup.querySelector('.close-button');

//Image Popup

const imagePopup = document.querySelector('.popup_type_image');
const image = document.querySelector('.popup__image');
const caption = document.querySelector('.popup__caption');
const imageCloseButton = imagePopup.querySelector('.close-button');

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
}

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
}

function toggleLike(likeButton) {
  likeButton.classList.toggle('like-button_clicked');
};

const createCard = (data) => {
  const cardElements = cardTemplate.cloneNode(true);
  const cardImage = cardElements.querySelector('.photo-grid__image');
  const cardTrashButton = cardElements.querySelector('.trash-button');
  const cardLabel= cardElements.querySelector('.photo-grid__label');
  const cardLikeButton = cardElements.querySelector('.like-button');

  cardImage.style.backgroundImage = `url(${data.link})`;
  cardLabel.textContent = data.label;

  cardTrashButton.addEventListener('click', (evt) => {
    evt.target.closest('.photo-grid__item').remove();
  });

  cardImage.addEventListener('click', () => {
    image.src = `${data.link}`;
    image.alt = cardLabel.textContent;
    caption.textContent = cardLabel.textContent;
    openPopup(imagePopup);
  });

  cardLikeButton.addEventListener('click', () => {
    toggleLike(cardLikeButton);
  });

  return cardElements;
};

const renderCard = (data) => {
  photoGridList.prepend(createCard(data));
};

initialCards.forEach((data) => {
  renderCard(data);
});

function submitProfileForm(evt) {
  evt.preventDefault();

  profileName.textContent = popupName.value;
  profileOccupation.textContent = popupOccupation.value;

  closePopup(editProfilePopup);
};

function submitCardForm(evt) {
  evt.preventDefault();

  const data = {
    label: cardForm.querySelector('.popup__input_type_label').value,
    link: cardForm.querySelector('.popup__input_type_url').value
  };

  renderCard(data);

  closePopup(addCardPopup);
};

editButton.addEventListener('click', () => {
  openPopup(editProfilePopup);
});

editProfileCloseButton.addEventListener('click', () => {
  closePopup(editProfilePopup);
});

profileForm.addEventListener('submit', submitProfileForm);

addButton.addEventListener('click', () => {
  openPopup(addCardPopup);
});

addCardCloseButton.addEventListener('click', () => {
  closePopup(addCardPopup);
});

cardForm.addEventListener('submit', submitCardForm);

imageCloseButton.addEventListener('click', () => {
  closePopup(imagePopup);
});

window.addEventListener('click', (evt) => {
  if (evt.target == editProfilePopup) {
    closePopup(editProfilePopup);
  } else if (evt.target == addCardPopup) {
    closePopup(addCardPopup);
  } else if (evt.target == imagePopup) {
    closePopup (imagePopup);
  }
});
