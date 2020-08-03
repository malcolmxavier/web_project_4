class UserInfo {
  constructor({profileName, profileOccupation}) {
    this._profileName = profileName;
    this._profileOccupation = profileOccupation;
  }

  getUserInfo() {
    this._profile = {name: this._profileName, occupation: this._profileOccupation};
  };

  setUserInfo(popupName, popupOccupation) {
    this._popupName = popupName.value;
    this._popupOccupation = popupOccupation.value;
    this._profileName.textContent = this._popupName;
    this._profileOccupation.textContent = this._popupOccupation;
  };
}

export default UserInfo;
