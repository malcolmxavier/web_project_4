class Card {
  constructor (data, userID, cardTemplateSelector, handleCardClick, handleDeleteCardClick, handleAddCardLike, handleRemoveCardLike) {
    this._label = data.name;
    this._link = data.link;
    this._ownerID = data.owner._id;
    this._cardID = data._id;
    this._likesCount = data.likes.length;

    this._userID = userID;

    this._cardTemplateSelector = cardTemplateSelector;

    this._handleCardClick = handleCardClick;
    this._handleDeleteCardClick = handleDeleteCardClick;
    this._handleAddCardLike = handleAddCardLike;
    this._handleRemoveCardLike = handleRemoveCardLike;

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
    this._cardLikeButton = this._cardElements.querySelector('.like-button');

    if (this._ownerID !== this._userID) {
      this._cardTrashButton.remove();
      this._cardTrashButton = null;
    } else {
      this._cardTrashButton.addEventListener('click', () => {
        this._handleDeleteCardClick(this._cardID, this._cardElements);
      });
    }

    this._cardLikeButton.addEventListener('click', () => {
      if (!this._cardLikeButton.classList.contains('like-button_clicked')) {
        this._handleAddCardLike(this._cardID);
        this._toggleLike(this._cardLikeButton);
      } else{
        this._handleRemoveCardLike(this._cardID);
        this._toggleLike(this._cardLikeButton);
      }
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

    return this._cardElements;
  };
};

export default Card;
