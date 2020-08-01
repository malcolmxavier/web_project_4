class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closeButton = this._popup.querySelector('.close-button');
  }

  close() {
    this._popup.classList.remove('popup_opened');
  };

  _handleEscClose(evt) {
    const ESC_KEY = 27;

    if (evt.which === ESC_KEY) {
      this.close();
      document.removeEventListener('keydown', this._handleEscClose);
    }
  };

  open() {
    this._popup.classList.add('popup_opened');

    document.addEventListener('keydown', this._handleEscClose);
  };

  setEventListeners() {
    this._closeButton.addEventListener('click', () => {
      this.close();
    });

    this._popup.addEventListener('click', (e) => {
      if(!e.target.closest('.popup__container')) {
        this.close();
      };
    });
  };
}

export default Popup;
