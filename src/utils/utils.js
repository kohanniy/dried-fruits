/* eslint-disable prefer-rest-params */
import anime from 'animejs/lib/anime.es';

export const scrollTo = (position) => {
  window.scrollTo({ top: position, behavior: 'smooth' });
};

export const createWrapperForWordsInIntroTitle = (slider) => {
  const titles = slider.wrapperEl.querySelectorAll('.intro__title');
  titles.forEach((title) => {
    const introTitle = title;
    introTitle.innerHTML = introTitle.textContent.replace(/\S+/g, '<span class="intro__word">$&</span>');
  });
};

export function hideIntroSlideElements() {
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
      { translateZ: '-300px' },
      { translateZ: 0 },
    ],
    easing: 'linear',
    duration: 1000,
  });
}

export function showIntroSlideElements() {
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
        { translateX: '-500px', skewX: '80deg', opacity: 0 },
        { translateX: 0, skewX: 0, opacity: 1 },
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
}

export const convertSecToMin = (time) => {
  const roundedTime = Math.floor(time);
  let min = Math.floor(time / 60);
  let sec = Math.floor(roundedTime - min * 60);
  if (min < 10) {
    min = `0${min}`;
  }
  if (sec < 10) {
    sec = `0${sec}`;
  }

  return `${min}:${sec}`;
};

// export function throttle(func, ms) {
//   let isThrottled = false;
//   let savedArgs;
//   let savedThis;

//   function wrapper() {
//     if (isThrottled) {
//       savedArgs = arguments;
//       savedThis = this;
//       return;
//     }

//     func.apply(this, arguments);
//     isThrottled = true;
//     setTimeout(() => {
//       isThrottled = false;
//       if (savedArgs) {
//         wrapper.apply(savedThis, savedArgs);
//         savedArgs = null;
//         savedThis = null;
//       }
//     }, ms);
//   }

//   return wrapper;
// }
