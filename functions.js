let slideIndex = 0;
showSlide(slideIndex);
var myTimeout;

function plusSlide() {
    showSlide(slideIndex);
}

function negSlide(){
    showSlide(slideIndex -=2);
}

/*function showSlides(){
    setInterval(showSlide(), 2000);
}*/

function showSlide(){
    clearTimeout(myTimeout);

    slideIndex++;
    let i;
    let slides = document.getElementsByClassName("mySlides");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    if (slideIndex > slides.length){slideIndex = 1};
    if (slideIndex < 1){slideIndex = slides.length};

    slides[slideIndex-1].style.display = "block";

    myTimeout = setTimeout(showSlide,5000);
}