const btnStart = document.querySelector('type=button [data-start]');
const btnStop = document.querySelector('button [data-stop]');

btnStart.addEventListener('click', onClickStart);


btnStop.addEventListener('click', onClickStop);


function onClickStart() { 
    console.log('hello world')
}