class Card {
  constructor (data, cardTemplateSelector, handleCardClick) {
    this._label = data.label;
    this._link = data.link;

    this._cardTemplateSelector = cardTemplateSelector;

    this._handleCardClick = handleCardClick;
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

    this._cardTrashButton.addEventListener('click', () => {
      this._cardElements.remove();
    });

    this._cardLikeButton.addEventListener('click', () => {
      this._toggleLike(this._cardLikeButton);
    });

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick({label: this._label, link: this._link})
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
