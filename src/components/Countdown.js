export default class Countdown {
  constructor(selectors) {
    this.countdownWrap = document.querySelector(selectors.wrapper);
    this.countdown = this.countdownWrap.querySelector(selectors.countdown);
    this.countdownDays = this.countdown.querySelector(selectors.days);
    this.countdownHours = this.countdown.querySelector(selectors.hours);
    this.countdownMinutes = this.countdown.querySelector(selectors.minutes);
    this.countdownSeconds = this.countdown.querySelector(selectors.seconds);
    this.orderButton = document.querySelector(selectors.button);
    this.year = this.countdown.dataset.year;
    this.month = this.countdown.dataset.month;
    this.day = this.countdown.dataset.day;
    this.hour = this.countdown.dataset.hour;
    this.minute = this.countdown.dataset.minute;
  }

  disableOrderButton() {
    this.orderButton.classList.add('timer__order-button_disabled');
    this.orderButton.setAttribute('disabled', 'disabled');
  }

  enableOrderButton() {
    this.orderButton.classList.remove('timer__order-button_disabled');
    this.orderButton.removeAttribute('disabled');
  }

  getCountdownStart() {
    const endDate = new Date(this.year, this.month - 1, this.day, this.hour, this.minute).getTime();
    const nowDate = new Date().getTime();
    this.countdownStart = endDate - nowDate;
    return this.countdownStart;
  }

  renderElementWhenCountdownEnd() {
    this.countdownWrap.innerHTML = `
      <p class="timer__description">Акция закончилась</p>
    `;
  }

  renderCountdown(distance) {
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (days < 10) days = `0${days}`;
    if (hours < 10) hours = `0${hours}`;
    if (minutes < 10) minutes = `0${minutes}`;
    if (seconds < 10) seconds = `0${seconds}`;

    this.countdownDays.textContent = days;
    this.countdownHours.textContent = hours;
    this.countdownMinutes.textContent = minutes;
    this.countdownSeconds.textContent = seconds;
  }

  enable() {
    const interval = setInterval(() => {
      this.renderCountdown(this.getCountdownStart());
      this.enableOrderButton();
      if (this.getCountdownStart() < 0) {
        clearInterval(interval);
        this.renderElementWhenCountdownEnd();
        this.disableOrderButton();
      }
    }, 1000);

    return interval;
  }
}
