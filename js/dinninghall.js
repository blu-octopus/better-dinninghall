<<<<<<< Updated upstream
// ---- BEGIN SLIDESHOW ---- //
  var slideIndex = 1;
  showSlides(slideIndex);
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if(n > slides.length) {
      slideIndex = 1
    }
    if(n < 1) {
      slideIndex = slides.length
    }
    for(i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for(i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }

  // ---- END SLIDESHOW ---- //
=======

//array list of
arrHalls = {0:"cm", 1:"cd", 2:"nl", 3:"pk"};
//halls div
//const element = document.getElementById("myBtn");
const cmBtn = document.getElementById("cmbtn");
const cd = document.getElementById("cdbtn");
const nl = document.getElementById("nlbtn");
const pk = document.getElementById("pkbtn");

//for event listner when a dinninghall button is clicked


cmBtn.addEventListener("click", function() {
  console.log("crown merill is clicked");
  //for each dinning hall in list
  for(hall in arrHalls){
    //if it is not designated dinning hall
    console.log("hiding ", arrHalls[hall]);
    if (arrHalls[hall] != "cm"){
      //hide dinning hall container
      targStr = "#" + arrHalls[hall];
      $( targStr).hide();
    }
  }
});
>>>>>>> Stashed changes
