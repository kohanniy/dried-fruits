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

export const introSliderData = {
  effect: 'cube',
  direction: 'horizontal',
  speed: 1000,
  watchOverflow: true,
  centerSlides: true,
  loop: true,
  roundLengths: true,
  loopAdditionalSlides: 1,
  allowTouchMove: false,
  cubeEffect: {
    shadow: false,
    slideShadows: false,
  },
  navigation: {
    nextEl: '.intro__button_prev',
    prevEl: '.intro__button_next',
  },
  autoplay: {
    disableOnInteraction: false,
    delay: 5000,
  },
  a11y: {
    firstSlideMessage: 'Первый слайд',
    lastSlideMessage: 'Последний слайд',
    paginationBulletMessage: 'Перейти к {{index}} слайду',
  },
  breakpoints: {
    575: {
      direction: 'vertical',
      autoplay: {
        delay: 7000,
        reverseDirection: true,
      },
    },
  },
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

export const videoPlayerSelectors = {
  container: '.video',
  player: '.video__player',
  controls: '.video__controls',
  playBtn: '.controls__action_type_play',
  pauseBtn: '.controls__action_type_pause',
  forwardBtn: '.controls__action_type_fast-forward',
  rewindBtn: '.controls__action_type_rewind',
  muteBtn: '.controls__mute',
  progress: '.controls__progress',
  progressBar: '.controls__progress-bar',
  volume: '.controls__volume',
  duration: '.controls__duration',
  overlay: '.video__overlay',
  mainPlayBtn: '.video__play-icon-wrap',
};
