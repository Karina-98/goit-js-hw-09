import Notiflix from "notiflix";

const delay = document.querySelector('input[name="delay"]');
const step = document.querySelector('input[name="step"]');
const amount = document.querySelector('input[name="amount"]');
const btn = document.querySelector('button[type="submit"]');
const form = document.querySelector('.form');



form.addEventListener('submit', (e) => { 
  e.preventDefault();
  
   let parsDelay = parseInt(e.target.elements.delay.value);
    const parsStep = parseInt(e.target.elements.step.value);
    const parsAmount = parseInt(e.target.elements.amount.value);
  
  
  for (let i = 1; i <= amount.value; i++) {
    
    createPromise(i, parsDelay).then(({ position, delay}) => {
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
  });
    parsDelay += parsStep; 
  }
});

function createPromise(position, delay) { 

  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
  },delay)
};

