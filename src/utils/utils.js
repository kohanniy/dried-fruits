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
