import Popup from './Popup.js';

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = document.querySelector('.popup__image');
    this._caption = document.querySelector('.popup__caption');
    this._link = document.querySelector('.popup__input_type_url').value;
    this._label = document.querySelector('.popup__input_type_label').value;
  }

  open() {
    this._image.src = this._link;
    this._image.alt = this._label;
    this._caption.textContent = this._label;

    super.open();
  };
}

export default PopupWithImage;
