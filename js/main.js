var h1 = document.querySelector('h1');
var h2 = document.querySelector('h2');
var arrow = document.querySelector('#arrow-top');
var contactWrap = document.querySelector('#contact-wrap');

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
var letters = document.querySelectorAll('.letter');

letters.forEach((letter) => {
  letter.addEventListener('mouseenter', (event) => {
    letter.classList.add('flip-letter');

    setTimeout(() => {
      letter.classList.remove('flip-letter');
    }, 600)
  })
})

