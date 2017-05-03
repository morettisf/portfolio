let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2');
let arrow = document.querySelector('#arrow');
let contactWrap = document.querySelector('#contact-wrap');

// intro animation up front
setTimeout(() => {
  h1.classList.add('h1-motion');

    setTimeout(() => {
      h2.classList.add('h2-motion');

        setTimeout(() => {
          arrow.classList.add('blink');
          contactWrap.classList.add('contact-wrap-fade-in');

        }, 500)

    }, 300)

}, 1500)


// letter rotation on mouse over
let letters = document.querySelectorAll('.letter');

letters.forEach((letter) => {
  letter.addEventListener('mouseenter', (event) => {
    letter.classList.add('flip-letter');

    setTimeout(() => {
      letter.classList.remove('flip-letter');
    }, 600)
  })
})

