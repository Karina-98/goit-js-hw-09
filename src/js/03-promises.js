import Notiflix from "notiflix";


const form = document.querySelector('.form');



form.addEventListener('submit', (e) => { 
  e.preventDefault();
  
   let delay = parseInt(e.target.elements.delay.value);
    const step = parseInt(e.target.elements.step.value);
    const amount = parseInt(e.target.elements.amount.value);
  
  
  
  for (let i = 1; i <= amount; i+= 1) {
    
    createPromise(i, delay)
      .then(({ position, delay }) => {
    // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
  })
  .catch(({ position, delay }) => {
  //   console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay} ms`
    );
    
  })
    delay += step;
  }
})

function createPromise(position, delay) {
    const shouldResolve = Math.random() > 0.3;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldResolve) {
          resolve({ position, delay })
        } else {
          reject({ position, delay })
        }
      }, delay);
    });
  };
