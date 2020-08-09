class Card {
  constructor (data, cardTemplateSelector, handleCardClick, handleDeleteCardClick) {
    this._label = data.name;
    this._link = data.link;
    this._cardID = data._id;
    console.log(data);
    // this._likesCount = data.likes.length;

    this._cardTemplateSelector = cardTemplateSelector;

    this._handleCardClick = handleCardClick;
    this._handleDeleteCardClick = handleDeleteCardClick;
  };

  getCardID() {
    return this._cardID;
  }

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
    this._cardLikeButton = this._cardElements.querySelector('.like-button');

    this._cardTrashButton.addEventListener('click', () => {
      // console.log(this._cardID);
      this._handleDeleteCardClick(this._cardID);
      // this._cardElements.remove();
      // this._cardElements = null;
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
    this._cardElements.querySelector('.photo-grid__likes-count').textContent = this._likesCount;

    this._addEventListeners();

    return cardElements;
  };
};

export default Card;
