class API {
  constructor({baseURL, headers}) {
    this._baseURL = baseURL;
    this._headers = headers;
  }

  // GET https://around.nomoreparties.co/v1/groupId/users/me
  getUserInfo() {
    return fetch(this._baseURL + '/users/me', {
      headers: this._headers
    })
    .then(res => res.ok ? res.json() : Promise.reject(res.status + ' Error: ' + res.statusText))
    .catch(err => console.log(err))
  };

  // PATCH https://around.nomoreparties.co/v1/groupId/users/me
  setUserInfo(name, about) {
    return fetch(this._baseURL + '/users/me', {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify({
        name,
        about
      })
    })
    .then(res => res.ok ? res.json() : Promise.reject(res.status + ' Error: ' + res.statusText))
    .catch(err => console.log(err))
  };

  // PATCH https://around.nomoreparties.co/v1/groupId/users/me/avatar
  setUserAvatar() {
    return fetch(this._baseURL + '/users/me/avatar', {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify({
        avatar
      })
    })
    .then(res => res.ok ? res.json() : Promise.reject(res.status + ' Error: ' + res.statusText))
    .catch(err => console.log(err))
  };

  getAppInfo() {

  };

  // GET https://around.nomoreparties.co/v1/groupId/cards
  getCardList() {
    return fetch(this._baseURL + '/cards', {
      headers: this._headers
    })
    .then(res => res.ok ? res.json() : Promise.reject(res.status + ' Error: ' + res.statusText))
    .catch(err => console.log(err))
  };

  // POST https://around.nomoreparties.co/v1/groupId/cards
  addCard({name, link}) {
    return fetch(this._baseURL + '/cards', {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify({
        name,
        link
      })
    })
    .then(res => res.ok ? res.json() : Promise.reject(res.status + ' Error: ' + res.statusText))
    .catch(err => console.log(err))
  };

  // DELETE https://around.nomoreparties.co/v1/groupId/cards/cardId
  removeCard(cardID) {
    return fetch(this._baseURL + '/cards/' + cardID, {
      headers: this._headers,
      method: "DELETE"
    })
    .then(res => res.ok ? res.json() : Promise.reject(res.status + ' Error: ' + res.statusText))
    .catch(err => console.log(err))
  };

  // PUT https://around.nomoreparties.co/v1/groupId/cards/likes/cardId
  // DELETE https://around.nomoreparties.co/v1/groupId/cards/likes/cardId
  // changeCardLikeStatus(cardID) {
  //   return fetch(this._baseURL + '/cards/likes/' + cardID, {
  //     headers: this._headers,
  //     method: "PUT",
  //   })
  //   .then(res => res.ok ? res.json() : Promise.reject(res.status + ' Error: ' + res.statusText))
  //   .catch(err => console.log(err))

  //   return fetch(this._baseURL + '/cards/likes/' + cardID, {
  //     headers: this._headers,
  //     method: "DELETE",
  //   })
  //   .then(res => res.ok ? res.json() : Promise.reject(res.status + ' Error: ' + res.statusText))
  //   .catch(err => console.log(err))
  // };
}

export default API;
