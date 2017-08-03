var h1 = document.querySelector('h1');
var h2 = document.querySelector('h2');
var arrow = document.querySelector('#arrow-top');
var contactWrapTop = document.querySelector('#contact-wrap-top');

// intro animation up front
document.addEventListener('DOMContentLoaded', function() {

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

  for (var i = 0; i < letters.length; i++) {
    letters[i].addEventListener('mouseenter', function(event) {
      letters[i].classList.add('flip-letter');

      setTimeout(function() {
        letters[i].classList.remove('flip-letter');
      }, 600)
    })
  }

})


var myScrollFunc = function() {
  var y = window.scrollY;

  if (y >= 75) {
    contactWrapTop.classList.add('fade-out');
  } 

  if (y <= 75) {
    contactWrapTop.classList.remove('fade-out');
  }

  var showNavPos = document.querySelector('#contact').offsetTop;
  var projectPos = document.querySelector('#work').offsetTop;
  var skillPos = document.querySelector('#info').offsetTop;
  var aboutPos = document.querySelector('#about').offsetTop;

  if (y >= showNavPos) {
    document.querySelector('nav').classList.add('nav-display');
  }

  if (y <= showNavPos) {
    document.querySelector('nav').classList.remove('nav-display');
    document.querySelector('#nav1').classList.remove('nav-active');
  }

  if (y >= (projectPos - 50)) {
    document.querySelector('#nav1').classList.add('nav-active');
    document.querySelector('#nav2').classList.remove('nav-active');
    document.querySelector('#nav3').classList.remove('nav-active');
  }

  if (y >= (skillPos - 50)) {
    document.querySelector('#nav1').classList.remove('nav-active');
    document.querySelector('#nav2').classList.add('nav-active');
    document.querySelector('#nav3').classList.remove('nav-active');
  }

  if (y >= (aboutPos - 50)) {
    document.querySelector('#nav1').classList.remove('nav-active');
    document.querySelector('#nav2').classList.remove('nav-active');
    document.querySelector('#nav3').classList.add('nav-active');
  }

};

window.addEventListener('scroll', myScrollFunc);

