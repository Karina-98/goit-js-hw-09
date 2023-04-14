const btnStart = document.querySelector('[data-start = ""]');
const btnStop = document.querySelector('[ data-stop = ""]');

btnStart.addEventListener('click', onClickStart);


btnStop.addEventListener('click', onClickStop);


function onClickStart() {
    timeId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();

    }, 1000);

    btnStart.setAttribute('disabled', true);
    btnStop.removeAttribute('disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

function onClickStop() {
    btnStart.removeAttribute('disabled');
    btnStop.setAttribute('disabled', true);
    clearInterval(timeId);
        
        
}