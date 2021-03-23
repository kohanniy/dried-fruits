export default class VideoPlayer {
  constructor(selectors, convertSecToMin) {
    this.container = document.querySelector(selectors.container);
    this.player = this.container.querySelector(selectors.player);
    this.controls = this.container.querySelector(selectors.controls);
    this.playBtn = this.container.querySelector(selectors.playBtn);
    this.pauseBtn = this.container.querySelector(selectors.pauseBtn);
    this.forwardBtn = this.container.querySelector(selectors.forwardBtn);
    this.rewindBtn = this.container.querySelector(selectors.rewindBtn);
    this.progress = this.container.querySelector(selectors.progress);
    this.progressBar = this.container.querySelector(selectors.progressBar);
    this.muteBtn = this.container.querySelector(selectors.muteBtn);
    this.volume = this.container.querySelector(selectors.volume);
    this.overlay = this.container.querySelector(selectors.overlay);
    this.mainPlayBtn = this.overlay.querySelector(selectors.mainPlayBtn);
    this.duration = this.container.querySelector(selectors.duration);
    this.convertSecToMin = convertSecToMin;
    this.setProgressBarAndDuration = this.setProgressBarAndDuration.bind(this);
    this.handlePlayerClick = this.handlePlayerClick.bind(this);
  }

  play() {
    this.player.play();
  }

  pause() {
    this.player.pause();
  }

  hideOverlay() {
    this.overlay.classList.add('video__overlay_hidden');
  }

  showCustomControls() {
    this.controls.classList.add('controls_active');
  }

  hideCustomControls() {
    if (this.controls.classList.contains('controls_active')) {
      this.controls.classList.remove('controls_active');
    }
  }

  rewind(number) {
    this.progress.value += number;
    this.player.currentTime += number;
  }

  setBackgroundVolume() {
    this.volume.style.background = `linear-gradient(to right, #dbdcdc 0%, #dbdcdc ${this.volume.value}%, #000 ${this.volume.value}%, #000 100%)`;
  }

  muteSound() {
    this.muteBtn.classList.remove('controls__mute_false');
    this.muteBtn.classList.add('controls__mute_true');
    this.volume.value = 0;
    this.player.muted = true;
  }

  unmuteSound() {
    this.muteBtn.classList.add('controls__mute_false');
    this.muteBtn.classList.remove('controls__mute_true');
    this.volume.value = this.player.volume * 100;
    this.player.muted = false;
  }

  setProgressBarAndDuration() {
    this.progress.value = this.player.currentTime;
    this.progressBar.style.width = `${Math.floor((this.player.currentTime / this.player.duration) * 100)}%`;
    this.duration.textContent = `${this.convertSecToMin(this.player.currentTime)}/${this.convertSecToMin(this.player.duration)}`;
  }

  setVolume() {
    const volumeScale = this.volume.value / 100;
    this.player.volume = volumeScale;
  }

  resetCurrentTime() {
    this.player.currentTime = 0;
  }

  handleProgressClick(evt) {
    const progressOffsetLeft = this.progress.offsetLeft;
    const parrentProgressOffsetLeft = this.progress.offsetParent.offsetLeft;
    const containerOffsetLeft = this.container.offsetLeft;
    const offsetLeftSum = progressOffsetLeft + parrentProgressOffsetLeft + containerOffsetLeft;
    const pos = (evt.pageX - offsetLeftSum) / this.progress.offsetWidth;
    this.player.currentTime = pos * this.player.duration;
  }

  handlePlayerClick() {
    if (this.player.paused || this.player.ended) {
      this.play();
    } else {
      this.pause();
    }
  }

  setEventListeners() {
    this.mainPlayBtn.addEventListener('click', () => {
      this.play();
      this.hideOverlay();
      this.showCustomControls();
    });

    this.playBtn.addEventListener('click', () => {
      if (this.player.paused || this.player.ended) {
        this.play();
      }
    });

    this.pauseBtn.addEventListener('click', () => {
      if (!this.player.paused) {
        this.pause();
      }
    });

    this.forwardBtn.addEventListener('click', () => {
      this.rewind(15);
    });

    this.rewindBtn.addEventListener('click', () => {
      this.rewind(-15);
    });

    this.muteBtn.addEventListener('click', () => {
      if (this.muteBtn.classList.contains('controls__mute_false')) {
        this.muteSound();
        this.setBackgroundVolume();
      } else {
        this.unmuteSound();
        this.setBackgroundVolume();
      }
    });

    this.volume.addEventListener('input', () => {
      this.setVolume();
      this.setBackgroundVolume();
      if (this.player.volume === 0) {
        this.muteSound();
      } else {
        this.unmuteSound();
      }
    });

    this.player.addEventListener('click', this.handlePlayerClick);

    this.player.addEventListener('timeupdate', this.setProgressBarAndDuration);

    this.player.addEventListener('ended', this.resetCurrentTime);

    this.progress.addEventListener('click', (evt) => {
      this.handleProgressClick(evt);
    });
  }
}
