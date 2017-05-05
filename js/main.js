var h1 = document.querySelector('h1');
var h2 = document.querySelector('h2');
var arrow = document.querySelector('#arrow-top');
var contactWrapTop = document.querySelector('#contact-wrap-top');

// intro animation up front
setTimeout(function() {
  h1.classList.add('h1-motion');

    setTimeout(function() {
      h2.classList.add('h2-motion');

        setTimeout(function() {
          arrow.classList.add('blink');
          contactWrapTop.classList.add('fade-in');

        }, 500)

    }, 300)

}, 1500)


// letter rotation on mouse over
var letters = document.querySelectorAll('.letter');

letters.forEach(function(letter) {
  letter.addEventListener('mouseenter', function(event) {
    letter.classList.add('flip-letter');

    setTimeout(function() {
      letter.classList.remove('flip-letter');
    }, 600)
  })
})


var myScrollFunc = function() {
  var y = window.scrollY;

  if (y >= 75) {
    contactWrapTop.classList.add('fade-out');
  } 

  if (y <= 75) {
    contactWrapTop.classList.remove('fade-out');
  }

  var workPos = document.querySelector('#contact').offsetTop;
  console.log(workPos)
  console.log(y)

  if (y >= workPos) {
    document.querySelector('nav').classList.add('nav-display');
  }

  if (y <= workPos) {
    document.querySelector('nav').classList.remove('nav-display');
  }

};

window.addEventListener('scroll', myScrollFunc);

