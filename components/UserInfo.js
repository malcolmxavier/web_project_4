class UserInfo {
  constructor({profileName, profileOccupation}) {
    this._profileName = profileName;
    this._profileOccupation = profileOccupation;
  }

  getUserInfo() {
    return this;
  };

  setUserInfo() {
    const userInfo = this.getUserInfo();

    this._userInfo = userInfo;

    this._userInfo.querySelector('.profile__name').textContent = this._profileName;
    this._userInfo.querySelector('.profile__occupation').textContent = this._profileOccupation;
  };
}

export default UserInfo;
