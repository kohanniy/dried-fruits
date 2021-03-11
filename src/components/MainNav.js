export default class MainNav {
  constructor(selectors, handleLinkClick) {
    this._header = document.querySelector(selectors.header);
    this._navigation = this._header.querySelector(selectors.navigation);
    this._openButton = this._header.querySelector(selectors.open);
    this._closeButton = this._navigation.querySelector(selectors.close);
    this._handleLinkClick = handleLinkClick;
    this._show = this._show.bind(this);
    this._hide = this._hide.bind(this);
  }

  _show() {
    this._header.classList.add('opened');
  }

  _hide() {
    this._header.classList.remove('opened');
  }

  // _goToSection(el) {
  //   const target = document.querySelector(el.hash);
  //   const position = target.getBoundingClientRect().top + window.pageYOffset;
  //   this._handleLinkClick(position);
  // }

  _setEventListeners() {
    this._openButton.addEventListener('click', this._show);
    this._closeButton.addEventListener('click', this._hide);

    // this._navigation.addEventListener('click', (evt) => {
    //   if (evt.target.classList.contains('main-nav__link')) {
    //     evt.preventDefault();
    //     this._goToSection(evt.target);
    //     this._hide();
    //   }
    // });
  }

  enable() {
    this._setEventListeners();
  }
}
