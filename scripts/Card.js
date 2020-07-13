//Image Popup

const image = document.querySelector('.popup__image');
const caption = document.querySelector('.popup__caption');
const imagePopup = document.querySelector('.popup_type_image');
const imagePopupCloseButton = imagePopup.querySelector('.close-button');

//Functions

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

  if (popup.classList.contains('.popup_type_image')) {
    image.src = this._link;
    image.alt = this._label;
    caption.textContent = this._label;
  }
};

imagePopupCloseButton.addEventListener('click', () => {
  closePopup(imagePopup);
});

window.addEventListener('click', (evt) => {
  if (evt.target == imagePopup) {
    closePopup(imagePopup);
  }
});

//Class

class Card {
  constructor (data, cardTemplateSelector) {
    this._label = data.label;
    this._link = data.link;

    this._cardTemplateSelector = cardTemplateSelector;
  };

  _toggleLike(likeButton) {
    likeButton.classList.toggle('like-button_clicked');
  };

  _getCardTemplate() {
    const cardTemplate = document.querySelector(this._cardTemplateSelector).content.querySelector('.photo-grid__item').cloneNode(true);

    return cardTemplate;
  };

  _addEventListeners() {
    this._cardImage = this._cardElements.querySelector('.photo-grid__image');
    this._cardTrashButton = this._cardElements.querySelector('.trash-button');
    this._cardLabel= this._cardElements.querySelector('.photo-grid__label');
    this._cardLikeButton = this._cardElements.querySelector('.like-button');

    this._cardImage.addEventListener('click', () => {
      openPopup(imagePopup);
    });

    this._cardTrashButton.addEventListener('click', (evt) => {
      evt.target.closest('.photo-grid__item').remove();
    });

    this._cardLikeButton.addEventListener('click', () => {
      this._toggleLike(this._cardLikeButton);
    });
  };

  createCard() {
    const cardElements = this._getCardTemplate();

    this._cardElements = cardElements;

    this._cardElements.querySelector('.photo-grid__image').style.backgroundImage = `url(${this._link})`;
    this._cardElements.querySelector('.photo-grid__label').textContent = this._label;

    this._addEventListeners();

    return cardElements;
  };
};

export default Card;
