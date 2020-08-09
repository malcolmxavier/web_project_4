import Popup from './Popup.js';

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = document.querySelector('.popup__image');
    this._caption = document.querySelector('.popup__caption');
  }

  open(data) {
    this._image.src = data.link;
    this._image.alt = data.label; //name
    this._caption.textContent = data.label;

    super.open();
  };
}

export default PopupWithImage;
