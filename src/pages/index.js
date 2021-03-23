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

import {
  mainNavSelectors,
  searchSelectors,
  introSliderData,
  productsSliderData,
  countdownSelectors,
  videoPlayerSelectors,
} from '../utils/constants';

import {
  scrollTo,
  createWrapperForWordsInIntroTitle,
  hideIntroSlideElements,
  showIntroSlideElements,
  convertSecToMin,
} from '../utils/utils';

Swiper.use([Navigation, Pagination, A11y, Autoplay, EffectCube]);

const handleLinkClick = () => {
  console.log('ghbdtn');
};

const makingBg = document.querySelector('.js-scene-1');

const searchArea = new Mark(document.querySelector('.page'));
const mainNav = new MainNav(mainNavSelectors, handleLinkClick);
const search = new Search(searchSelectors, searchArea, scrollTo);
const countdown = new Countdown(countdownSelectors);
const videoPlayer = new VideoPlayer(videoPlayerSelectors, convertSecToMin);
const parallaxMakingBg = new Parallax(makingBg, { hoverOnly: true });
const productsSlider = new Swiper('.products__slider', productsSliderData);
const introSlider = new Swiper('.intro__slider', introSliderData);

introSlider.on('slideChangeTransitionStart', hideIntroSlideElements);

introSlider.on('slideChangeTransitionEnd', showIntroSlideElements);

mainNav.enable();
search.enable();
countdown.enable();
videoPlayer.setEventListeners();
videoPlayer.setBackgroundVolume();
createWrapperForWordsInIntroTitle(introSlider);
