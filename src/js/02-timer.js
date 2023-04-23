const flatpickr = require("flatpickr");

// es modules are recommended, if available, especially for typescript
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';


const inputText = document.querySelector('input#datetime-picker');
const btn = document.querySelector('button[data-start]');
const day = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');



btn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getDate() < options.defaultDate) {
      btn.removeAttribute('disabled');
    } else {
      btn.disabled = true;
       Notiflix.Notify.failure("Please choose a date in the future");
    }
 
  }
};



function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}



function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

const data = new Date().getDate();



btn.addEventListener('click', () => {
  btn.disabled = true;
  let interval = setInterval(() => { 
    let currentTime = new Date().getTime();
    let choosedate = fl.selectedDates[0] - currentTime;
    let timer = convertMs(choosedate);

    day.textContent = addLeadingZero(timer.days);
    hours.textContent = addLeadingZero(timer.hours);
    minutes.textContent = addLeadingZero(timer.minutes);
    seconds.textContent = addLeadingZero(timer.seconds);

  })

  // if (msToCount < 1000) {
  //     clearInterval(interval);
  //   }
  }, 1000 );

const fl = flatpickr(inputText, options);