class API {
  constructor({baseURL, headers}) {
    this._baseURL = baseURL;
    this._headers = headers;
  }

  getUserInfo() {
    return fetch(this._baseURL + '/users/me', {
      headers: this._headers
    })
    .then(res => res.ok ? res.json() : Promise.reject(res.status + ' Error: ' + res.statusText))
    .catch(err => console.log(err))
  };

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

  getCardList() {
    return fetch(this._baseURL + '/cards', {
      headers: this._headers
    })
    .then(res => res.ok ? res.json() : Promise.reject(res.status + ' Error: ' + res.statusText))
    .catch(err => console.log(err))
  };

  addCard({name, link}) {
    return fetch(this._baseURL + '/cards', {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify({
        name: name,
        link: link
      })
    })
    .then(res => res.ok ? res.json() : Promise.reject(res.status + ' Error: ' + res.statusText))
    .catch(err => console.log(err))
  };

  removeCard(_id) {
    return fetch(this._baseURL + '/cards/' + _id, {
      headers: this._headers,
      method: "DELETE"
    })
    .then(res => res.ok ? res.json() : Promise.reject(res.status + ' Error: ' + res.statusText))
    .catch(err => console.log(err))
  };

  addCardLike(_id) {
    return fetch(this._baseURL + '/cards/likes/' + _id, {
      headers: this._headers,
      method: "PUT",
    })
    .then(res => res.ok ? res.json() : Promise.reject(res.status + ' Error: ' + res.statusText))
    .catch(err => console.log(err))
  };

  removeCardLike(_id) {
    return fetch(this._baseURL + '/cards/likes/' + _id, {
      headers: this._headers,
      method: "DELETE",
    })
    .then(res => res.ok ? res.json() : Promise.reject(res.status + ' Error: ' + res.statusText))
    .catch(err => console.log(err))
  };
}

export default API;
