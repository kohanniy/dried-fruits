export default class Search {
  constructor(searchSelectors, searchArea, scrollTo) {
    this._form = document.querySelector(searchSelectors.form);
    this._input = this._form.querySelector(searchSelectors.input);
    this._noMatch = this._form.querySelector(searchSelectors.noMatch);
    this._clearButton = this._form.querySelector(searchSelectors.clear);
    this._scrollTo = scrollTo;
    this._offsetTop = 50;
    this._content = searchArea;
  }

  jumpTo(node) {
    const position = node.getBoundingClientRect().top + window.pageYOffset - this._offsetTop;
    this._scrollTo(position);
  }

  showResultNoMatch() {
    this._noMatch.classList.remove('hide');
    this._input.setAttribute('placeholder', '');
    this._input.value = '';
  }

  hideResultNoMatch() {
    this._noMatch.classList.add('hide');
    this._input.setAttribute('placeholder', 'Поиск');
  }

  highlightTerm() {
    const term = this._input.value;
    this._content.mark(term, {
      separateWordSearch: false,
      each: (node) => {
        if (node) {
          this.jumpTo(node);
        }
      },
      noMatch: () => this.showResultNoMatch(),
    });
  }

  update() {
    this._content.unmark({
      done: () => this.highlightTerm(),
    });
  }

  clear() {
    this._content.unmark();
    this._input.value = '';
    this._input.focus();
  }

  _setEventListeners() {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.update();
    });

    this._input.addEventListener('focus', () => {
      if (!this._noMatch.classList.contains('hide')) {
        this.hideResultNoMatch();
      }
    });

    this._clearButton.addEventListener('click', (evt) => {
      evt.preventDefault();
      this.clear();
    });
  }

  enable() {
    this._setEventListeners();
  }
}
