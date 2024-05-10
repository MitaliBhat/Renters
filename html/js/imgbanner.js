// Image banner sliding function
window.onload = function() { plusSlides() };
var slideIndex = -1;
plusSlides();

function currentSlide(n) {
    plusSlides(slideIndex = n);
}

function plusSlides() {
    var i;
    var slides = document.getElementsByClassName("showSlide");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" activedot", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " activedot";
    setTimeout(plusSlides, 5000); // Change image every 5 seconds
}