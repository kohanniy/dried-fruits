import './index.css';
import 'swiper/swiper-bundle.css';
import anime from 'animejs/lib/anime.es';
import Mark from 'mark.js';
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

import {
  mainNavSelectors,
  searchSelectors,
  productsSliderData,
  countdownSelectors,
} from '../utils/constants';

import {
  scrollTo,
  createWrapperForWordsInIntroTitle,
} from '../utils/utils';

Swiper.use([Navigation, Pagination, A11y, Autoplay, EffectCube]);

const handleLinkClick = () => {
  console.log('ghbdtn');
};

const searchArea = new Mark(document.querySelector('.page'));
const mainNav = new MainNav(mainNavSelectors, handleLinkClick);
const search = new Search(searchSelectors, searchArea, scrollTo);
const countdown = new Countdown(countdownSelectors);
const productsSlider = new Swiper('.products__slider', productsSliderData);
const introSlider = new Swiper('.intro__slider', {
  effect: 'cube',
  direction: 'horizontal',
  speed: 1200,
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
});

introSlider.on('slideChangeTransitionStart', function () {
  this.prevSlide = this.slides[this.previousIndex];
  this.activeSlide = this.slides[this.activeIndex];
  this.prevLogo = this.prevSlide.querySelector('.intro__logo');
  this.prevTitleWords = this.prevSlide.querySelectorAll('.intro__word');
  this.prevText = this.prevSlide.querySelector('.intro__text');
  this.prevButton = this.prevSlide.querySelector('.intro__order-button');
  this.activeLogo = this.activeSlide.querySelector('.intro__logo');
  this.activeTitleWords = this.activeSlide.querySelectorAll('.intro__word');
  this.activeText = this.activeSlide.querySelector('.intro__text');
  this.activeButton = this.activeSlide.querySelector('.intro__order-button');

  anime({
    targets: [
      this.prevLogo,
      this.prevTitleWords,
      this.prevText,
      this.prevButton,
      this.activeLogo,
      this.activeTitleWords,
      this.activeText,
      this.activeButton,
    ],
    duration: 10,
    easing: 'linear',
    opacity: 0,
  });
  anime({
    targets: this.el,
    keyframes: [
      { scale: 0.8 },
      { scale: 1 },
    ],
    easing: 'linear',
    duration: 1200,
  });
});

introSlider.on('slideChangeTransitionEnd', function () {
  const tl = anime.timeline({
    easing: 'linear',
  });
  tl
    .add({
      targets: this.activeLogo,
      opacity: 1,
      duration: 50,
    })
    .add({
      targets: this.activeTitleWords,
      keyframes: [
        { translateX: '-500px', opacity: 0 },
        { translateX: 0, opacity: 1 },
      ],
      easing: 'linear',
      delay: anime.stagger(250, { direction: 'reverse' }),
    }, '-=25')
    .add({
      targets: this.activeText,
      translateY: ['100%', 0],
      opacity: [0, 1],
      duration: 250,
    }, '-=600')
    .add({
      targets: this.activeButton,
      translateY: ['100%', 0],
      opacity: [0, 1],
      duration: 250,
    });
});

mainNav.enable();
search.enable();
countdown.enable();
createWrapperForWordsInIntroTitle(introSlider);
