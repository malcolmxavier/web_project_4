class UserInfo {
  constructor({profileName, profileOccupation}) {
    this._profileName = profileName;
    this._profileOccupation = profileOccupation;
  }

  getUserInfo() {
    this._profile = {name: this._profileName, occupation: this._profileOccupation};
  };

  setUserInfo(userName, userOccupation) {
    console.log(userName, userOccupation);
    console.log(this._profileName);
    console.log(this._profileOccupation);
    console.log(this._profileName.textContent);
    console.log(this._profileOccupation.textContent);
    this._userName = userName;
    this._userOccupation = userOccupation;
    this._profileName.textContent = this._userName;
    this._profileOccupation.textContent = this._userOccupation;
  };
}

export default UserInfo;
