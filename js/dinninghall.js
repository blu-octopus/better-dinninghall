
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
