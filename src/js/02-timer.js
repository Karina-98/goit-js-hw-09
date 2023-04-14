const flatpickr = require("flatpickr");

// es modules are recommended, if available, especially for typescript
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const inputText = document.getElementById('datetime - picker');
const btn = document.getElementsByName('button')

// flatpickr(inputText, options)

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};
const data = new Date();
console.log(defaultDate);

// onclose(selectedDates) {
// if (selectedDates )
// }
