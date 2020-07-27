import Popup from './Popup.js';

class PopupWithForm extends Popup {
  constructor(submitForm, popupSelector) {
    this.submitForm = submitForm;
    this._popupSelector = popupSelector;
    this._profileName = document.querySelector('.profile__name');
    this._profileOccupation = document.querySelector('.profile__occupation');
    this._popupName = document.querySelector('.popup__input_type_name');
    this._popupOccupation = document.querySelector('.popup__input_type_occupation');
    super(popupSelector);
  }

  close() {
    this._popup.reset();

    super.close();
  };

  open() {
    if (this._popup.classList.contains('.popup_type_edit-profile')) {
      if (this._profileName) {
        this._popupName.value = this._profileName.textContent;
      }

      if (this._profileOccupation) {
       this._popupOccupation.value = this._profileOccupation.textContent;
      }
    }

    super.open();
  }

  _getInputValues() {
    const inputValues = document.querySelector(this._popupSelector).content.cloneNode(true);

    return inputValues;
  };

  setEventListeners() {
    this._popup.addEventListener('submit', submitForm);

    super.setEventListeners();
  };
}

export default PopupWithForm;
