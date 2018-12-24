const LEN = 27;
const TIME = 3;
var slide = 1;

function showSlide(num) {
    var image = "url('images/" + num + ".jpg')";
    //document.body.style.backgroundImage = image; 
    $("body").css("background-image", image);
}

function runSlideShow() {

    if(slide < LEN) {
        slide++;
    } else {
        slide = 1;
    }

    showSlide(slide);

    // run slides in a loop
    setTimeout(runSlideShow, TIME * 1000);
}

$(document).ready(function(){
    runSlideShow();
});
