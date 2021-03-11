export default class Search {
  constructor(searchSelectors, scrollTo) {
    this._page = document.querySelector(searchSelectors.page);
    this._form = this._page.querySelector(searchSelectors.form);
    this._input = this._form.querySelector(searchSelectors.input);
    this._noMatch = this._form.querySelector(searchSelectors.noMatch);
    this._clearButton = this._form.querySelector(searchSelectors.clear);
    this._scrollTo = scrollTo;
    this._offsetTop = 50;
    this._content = new Mark(this._page);
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
    this._input.setAttribute('placeholder', 'Поиск')
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


// function performMark() {

//   // Read the keyword
//   var keyword = searchInput.value;

//   // Remove previous marked elements and mark
//   // the new keyword inside the context
//   content.unmark({
//   	done: function(){
//     	content.mark(keyword, {
//         separateWordSearch: false,
//         each: (node) => {
//           if (node) {
//             const position = node.getBoundingClientRect().top + window.pageYOffset - offsetTop;
//             window.scrollTo({ top: position, behavior: 'smooth' });
//           }
//         },
//         noMatch: () => {
//           noMatchEl.classList.remove('hide');
//           searchInput.setAttribute('placeholder', '');
//           searchInput.value = '';
//         },
//       });
//     }
//   });
// };

// // Listen to input and option changes
// // searchInput.addEventListener('change', performMark);
// form.addEventListener('submit', (evt) => {
//   evt.preventDefault();
//   performMark();
// });

// searchInput.addEventListener('focus', () => {
//   noMatchEl.classList.add('hide');
//   searchInput.setAttribute('placeholder', 'Поиск')
// });

// clearButton.addEventListener('click', (evt) => {
//   evt.preventDefault();
//   content.unmark();
//   searchInput.value = '';
//   searchInput.focus();
// });
