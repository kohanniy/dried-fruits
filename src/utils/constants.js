export const mainNavSelectors = {
  header: '.header',
  navigation: '.header__main-nav',
  open: '.toggle-menu',
  close: '.main-nav__close-btn',
};

export const searchSelectors = {
  form: '.search',
  input: '.search__input',
  noMatch: '.search__no-match',
  clear: '.search__clear',
};

export const productsSliderData = {
  slidesPerView: 2.3,
  spaceBetween: 15,
  navigation: {
    disabledClass: 'products__button_disabled',
    nextEl: '.products__button_next',
    prevEl: '.products__button_prev',
  },
  a11y: {
    firstSlideMessage: 'Первый слайд',
    lastSlideMessage: 'Последний слайд',
    paginationBulletMessage: 'Перейти к {{index}} слайду',
  },
  breakpoints: {
    575: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
};

export const countdownSelectors = {
  wrapper: '.timer__zone_countdown',
  countdown: '.timer__countdown',
  days: '.js-days',
  hours: '.js-hours',
  minutes: '.js-minutes',
  seconds: '.js-seconds',
  button: '.timer__order-button',
};
