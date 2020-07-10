class Card {
  constructor (data, cardTemplateSelector) {
    this._label = data.label;
    this._link = data.link;

    this._cardTemplateSelector = cardTemplateSelector;
  };

  _closePopup(popup) {
    popup.classList.remove('popup_opened');
  };

  _closePopupWithEscape(evt) {
    const ESC_KEY = 27;
    if (evt.which === ESC_KEY) {
      this._closePopup(this._imagePopup);
      document.removeEventListener('keydown', this._closePopupWithEscape);
    }
  };

  _openPopup(popup) {
    popup.classList.add('popup_opened');

    document.addEventListener('keydown', this._closePopupWithEscape);
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
    this._image = document.querySelector('.popup__image');
    this._caption = document.querySelector('.popup__caption');
    this._imagePopup = document.querySelector('.popup_type_image');
    this._imageCloseButton = this._imagePopup.querySelector('.close-button');

    this._cardImage.addEventListener('click', () => {
      this._image.src = `${this._link}`;
      this._image.alt = this._cardLabel.textContent;
      this._caption.textContent = this._cardLabel.textContent;
      this._openPopup(this._imagePopup);
    });

    this._cardTrashButton.addEventListener('click', (evt) => {
      evt.target.closest('.photo-grid__item').remove();
    });

    this._cardLikeButton.addEventListener('click', () => {
      this._toggleLike(this._cardLikeButton);
    });

    this._imageCloseButton.addEventListener('click', () => {
      this._closePopup(this._imagePopup);
    });

    window.addEventListener('click', (evt) => {
      if (evt.target == this._imagePopup) {
        this._closePopup(this._imagePopup);
      }
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
