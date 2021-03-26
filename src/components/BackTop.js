export default class BackTop {
  constructor(selector, handleUpButtonClick) {
    this._button = document.querySelector(selector);
    this._handleButtonClick = handleUpButtonClick;
  }

  show() {
    this._button.classList.add('back-top_show');
    this._setEventListeners();
  }

  hide() {
    this._button.classList.remove('back-top_show');
    this._removeEventListeners();
  }

  _setEventListeners() {
    this._button.addEventListener('click', this._handleButtonClick);
  }

  _removeEventListeners() {
    this._button.removeEventListener('click', this._handleButtonClick);
  }
}
