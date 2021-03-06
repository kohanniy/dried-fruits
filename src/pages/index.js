import './index.css';
import 'swiper/swiper-bundle.css';

import Mark from 'mark.js';
import Parallax from 'parallax-js';
import {
  Swiper,
  Navigation,
  Pagination,
  A11y,
  Autoplay,
  EffectCube,
} from 'swiper';

import MainNav from '../components/MainNav';
import Search from '../components/Search';
import Countdown from '../components/Countdown';
import VideoPlayer from '../components/VideoPlayer';
import BackTop from '../components/BackTop';

import {
  mainNavSelectors,
  searchSelectors,
  introSliderData,
  productsSliderData,
  countdownSelectors,
  videoPlayerSelectors,
  reviewsSliderData,
} from '../utils/constants';

import {
  scrollTo,
  createWrapperForWordsInIntroTitle,
  hideIntroSlideElements,
  showIntroSlideElements,
  convertSecToMin,
  setEventListener,
  getElOffset,
} from '../utils/utils';

Swiper.use([Navigation, Pagination, A11y, Autoplay, EffectCube]);

const makingBg = document.querySelector('.js-scene-1');
const pageForm = document.querySelector('.order__form');
const addressLogo = document.querySelector('.address__logo');
const copyrightName = document.querySelector('.copyright__name');
const productsSection = document.querySelector('.products');

const searchArea = new Mark(document.querySelector('.page'));
const mainNav = new MainNav(mainNavSelectors, scrollTo);
const search = new Search(searchSelectors, searchArea, scrollTo);
const countdown = new Countdown(countdownSelectors);
const videoPlayer = new VideoPlayer(videoPlayerSelectors, convertSecToMin);
const parallaxMakingBg = new Parallax(makingBg, { hoverOnly: true });
const backTopButton = new BackTop('.back-top', () => {
  scrollTo(0);
});
const productsSlider = new Swiper('.products__slider', productsSliderData);
const introSlider = new Swiper('.intro__slider', introSliderData);
const reviewsSlider = new Swiper('.reviews__slider', reviewsSliderData);

mainNav.enable();
search.enable();
countdown.enable();
videoPlayer.setEventListeners();
videoPlayer.setBackgroundVolume();
createWrapperForWordsInIntroTitle(introSlider);
setEventListener(addressLogo, scrollTo);
setEventListener(copyrightName, scrollTo);

introSlider.on('slideChangeTransitionStart', hideIntroSlideElements);
introSlider.on('slideChangeTransitionEnd', showIntroSlideElements);

pageForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
});

window.addEventListener('scroll', () => {
  const pos = window.pageYOffset;
  const targetPos = getElOffset(productsSection);

  if (pos > targetPos) {
    backTopButton.show();
  } else {
    backTopButton.hide();
  }
});
