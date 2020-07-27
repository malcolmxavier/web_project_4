class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  _handleEscClose(evt) {
    const ESC_KEY = 27;

    if (evt.which === ESC_KEY) {
      close(document.querySelector('.popup_opened'));
      document.removeEventListener('keydown', this._handleEscClose);
    }
  };

  open() {
    this._popup.classList.add('.popup_opened');

    document.addEventListener('keydown', this._handleEscClose);
  };

  close() {
    this._popup.classList.remove('.popup_opened');
  };


  setEventListeners() {
    this._popup.querySelector('.close-button').addEventListener('click', () => {
      close(this._popup);
    });

    window.addEventListener('click', () => {
      close(this._popup);
    });
  };
}

export default Popup;
