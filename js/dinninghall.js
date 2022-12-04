
//array list of
arrHalls = {0:"cm", 1:"cs", 2:"nl", 3:"pk"};

diningHalls = {0: "20", 1: "5", 2: "40", 3: "25"};

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
  console.log("porter kresge is clicked");
  hideAll();
  $("#pk").show();
});


// hide all dinninghall at initial state
$("#cm").hide();
$("#cs").hide();
$("#nl").hide();
$("#pk").hide();


// loops through each hall and makes an API request. Asynchronous issue is here. the halls are looped through *then* the API requests are made, meaning i can't place them into lists using the "hall" variable.
for (hall in diningHalls){
  // links API and parser
  $.ajax ({
      // var 'hall' links to specific hall.
      url: "https://api.slug.tools/food/menus/" + diningHalls[hall],
      type: "GET",
      success: function(data) {

        // data for each dining hall
        // console.log(data);

        // short menu for each hall
        var meals = data.menu.short;

        // console.log(meals);
        mealKeys = Object.keys(meals);

        for (keys in mealKeys){
          finalKey = mealKeys[keys];
          console.log(finalKey); // general meal time (breakfast / lunch / dinner)
          // console.log(meals[finalKey]);

          for (sections in meals[finalKey]){
            console.log(sections); // sections within meal times (open bar / bakery / clean plate)
            sectionKeys = meals[finalKey][sections];
            // console.log(sectionKeys);

            for (items in sectionKeys) {
              // console.log(items);
              item = sectionKeys[items];
              console.log(item); // actual items (halal chicken etc.)
            };

          };
        };
      },
      error: function (jqXHR, textStatus, errorThrown) {
          // do stuff
          console.log("Error:", textStatus, errorThrown);
      }
  });

}
