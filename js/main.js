let me = document.querySelector('#me-img-wrap');

me.addEventListener('mouseenter', (event) => {
  me.classList.add('flipit');

  setTimeout(() => {
    me.classList.remove('flipit');
  }, 600)
})

let meMobile = document.querySelector('#me-img-wrap-mobile');

meMobile.addEventListener('mouseenter', (event) => {
  meMobile.classList.add('flipit');

  setTimeout(() => {
    meMobile.classList.remove('flipit');
  }, 600)
})

let letters = document.querySelectorAll('.letter');

letters.forEach((letter) => {
  letter.addEventListener('mouseenter', (event) => {
    letter.classList.add('flipit');

    setTimeout(() => {
      letter.classList.remove('flipit');
    }, 600)
  })
})

