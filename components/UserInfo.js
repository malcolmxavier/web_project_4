class UserInfo {
  constructor({popupName, popupOccupation}) {
    this._profileName = popupName.value;
    this._profileOccupation = popupOccupation.value;
  }

  getUserInfo() {
    this._profile = {name: this._profileName, occupation: this._profileOccupation};
  };

  setUserInfo() {
    document.querySelector('.profile__name').textContent = this._profileName;
    document.querySelector('.profile__occupation').textContent = this._profileOccupation;
  };
}

export default UserInfo;
