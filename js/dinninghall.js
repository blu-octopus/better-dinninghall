
//array list of
arrHalls = {0:"cm", 1:"cs", 2:"nl", 3:"pk"};

function hideAll(){
  for(hall in arrHalls){
    targStr = "#" + arrHalls[hall];
    console.log("hiding ", targStr);
    $(targStr).hide();
  }
}

//halls div
//const element = document.getElementById("myBtn");
const cmBtn = document.getElementById("cmbtn");
const csBtn = document.getElementById("csbtn");
const nlBtn = document.getElementById("nlbtn");
const pkBtn = document.getElementById("pkbtn");

//for event listner when a dinninghall button is clicked
//crown merill is clicked, only show cm
cmBtn.addEventListener("click", function() {
  console.log("crown merill is clicked");
  hideAll();
  $("#cm").show();
});
//cowell stevensons is clicked, only show cs
csBtn.addEventListener("click", function() {
  console.log("cowell stevensons is clicked");
  hideAll();
  $("#cs").show();
});
//nine lewis is clicked, only show cnl
nlBtn.addEventListener("click", function() {
  console.log("nine lewis is clicked");
  hideAll();
  $("#nl").show();
});
//porter kresge is clicked, only show pk
pkBtn.addEventListener("click", function() {
  console.log("crown merill is clicked");
  hideAll();
  $("#pk").show();
});

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
