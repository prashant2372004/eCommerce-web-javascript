var currentSlide = 0;
var slides = document.querySelectorAll('.slider-slide');
var dots = document.querySelectorAll('.pagination-dot');
var timer;

function showSlide(n) {
  clearTimeout(timer);

  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active-slide');
  }

  for (var i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active-dot');
  }

  slides[n].classList.add('active-slide');
  dots[n].classList.add('active-dot');

  currentSlide = n;

  timer = setTimeout(function () {
    showSlide((currentSlide + 1) % slides.length);
  }, 5000);
}

for (var i = 0; i < dots.length; i++) {
  dots[i].addEventListener('click', function () {
    var dotIndex = Array.prototype.indexOf.call(dots, this);
    showSlide(dotIndex);
  });
}

showSlide(0);
