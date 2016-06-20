var currentSlide = 0;
var slides = document.querySelectorAll('#slides .slide');
var switcher = document.getElementById('switcher');

switcher.addEventListener('click', nextSlide);

function nextSlide(){
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}