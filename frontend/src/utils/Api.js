
class Api {
  constructor(options) {
    this._url = options.baseUrl;
  }

  get _headers() {
    return {
      Authorization:  `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json',      
    }
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: this._headers,
      credentials: 'include',
    }).then(this._handleResponse);
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      method: "GET",
      headers: this._headers,
      credentials: 'include',
    }).then(this._handleResponse);
  }

  updateUserInfo(userData) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        name: userData.name,
        about: userData.about,
      }),
    }).then(this._handleResponse);
  }

  addUserCard(cardData) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        name: cardData.name,
        link: cardData.link,
      }),
    }).then(this._handleResponse);
  }

  deleteUserCard(id) {
    return fetch(`${this._url}/cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
      credentials: 'include',
    }).then(this._handleResponse);
  }

  likeCard(id) {
    return fetch(`${this._url}/cards/${id}/likes`, {
      method: "PUT",
      headers: this._headers,
      credentials: 'include',
    }).then(this._handleResponse);
  }

  removeLikeCard(id) {
    return fetch(`${this._url}/cards/${id}/likes`, {
      method: "DELETE",
      headers: this._headers,
      credentials: 'include',
    }).then(this._handleResponse);
  }

  updateUserAvatar(userData) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        avatar: userData.avatar,
      }),
    }).then(this._handleResponse);
  }

  changeLikeCardStatus(id, isLiked) {
    if (isLiked) {
      return this.removeLikeCard(id);
    } else {
      return this.likeCard(id);
    }
  }

  getInitialData() {
    return Promise.all([this.getInitialCards(), this.getUserInfo()]);
  }
}

const api = new Api({
  baseUrl: 'https://api.sviter.nomoredomains.sbs',
});

export default api;
