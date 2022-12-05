
//array list of
arrHalls = {0:"cm", 1:"cs", 2:"nl", 3:"pk", 4:"default", 5:"bcm", 6:"bcs", 7:"bnl", 8:"bpk", 9:"bdefault"};

arrTables = {0:"cmt", 1:"cst", 2:"nlt", 3:"pkt"};

diningHalls = {0: "20", 1: "5", 2: "40", 3: "25"};

function hideAll(){
    $("default").hide();
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
  $("#bcm").show();
  $("#cm").show();
});
//cowell stevensons is clicked, only show cs
csBtn.addEventListener("click", function() {
  console.log("cowell stevensons is clicked");
  hideAll();
  $("#bcs").show();
  $("#cs").show();
});
//nine lewis is clicked, only show cnl
nlBtn.addEventListener("click", function() {
  console.log("nine lewis is clicked");
  hideAll();
  $("#bnl").show();
  $("#nl").show();
});
//porter kresge is clicked, only show pk
pkBtn.addEventListener("click", function() {
  console.log("porter kresge is clicked");
  hideAll();
  $("#bpk").show();
  $("#pk").show();
});


// hide all dinninghall at initial state
$("#cm").hide();
$("#cs").hide();
$("#nl").hide();
$("#pk").hide();
$("#bcm").hide();
$("#bcs").hide();
$("#bnl").hide();
$("#bpk").hide();



// meal time Select
$('#time').click(function(){
  var option = $('#time').val();
  console.log(option);
  if (option != null){
    $("#Breakfast").hide();
    $("#Dinner").hide();
    $("#LateNight").hide();
    $("#Lunch").hide();
    $("#" + option).show();
  }
})


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
        // console.log(data.name);
        if (data.name === "Porter/Kresge Dining Hall"){
          // console.log("porter!");
          var call = 3;
        }
        else if (data.name === "Cowell/Stevenson Dining Hall") {
          // console.log("cowell!");
          var call = 1;
        }
        else if (data.name === "Crown/Merrill Dining Hall"){
          // console.log("merrill!");
          var call = 0;
        }
        else if (data.name === "College Nine/John R. Lewis Dining Hall"){
          // console.log("9!");
          var call = 2;
        }

        // short menu for each hall
        var meals = data.menu.short;

        // console.log(meals);
        mealKeys = Object.keys(meals);

        for (keys in mealKeys){
          finalKey = mealKeys[keys];
          // console.log(finalKey); // general meal time (breakfast / lunch / dinner)
          // console.log(meals[finalKey]);
          if (finalKey === "Late Night"){
            finalKey = "LateNight";
          };
          $("#" + arrTables[call]).append("<table id = " + finalKey + " class = " + arrTables[call] + " ></table>");
          $("#" + finalKey + "." + arrTables[call]).append("<tr><td><br></br></td></tr>");
          $("#" + finalKey + "." + arrTables[call]).append("<tr>");
          $("#" + finalKey + "." + arrTables[call]).append("<th class = 'mealTimes'>" + finalKey + "</th>");
          $("#" + finalKey + "." + arrTables[call]).append("</tr>");

          for (sections in meals[finalKey]){
            // console.log(sections); // sections within meal times (open bar / bakery / clean plate)
            sectionKeys = meals[finalKey][sections];
            // console.log(sectionKeys);
            $("#" + finalKey + "." + arrTables[call]).append("<tr>");
            $("#" + finalKey + "." + arrTables[call]).append("<th>" + sections + "</th>");
            $("#" + finalKey + "." + arrTables[call]).append("</tr>");

            for (items in sectionKeys) {
              // console.log(items);
              item = sectionKeys[items];
              // console.log(item); // actual items (halal chicken etc.)
              $("#" + finalKey + "." + arrTables[call]).append("<tr>");
              $("#" + finalKey + "." + arrTables[call]).append("<td>" + item + "</td>");
              $("#" + finalKey + "." + arrTables[call]).append("</tr>");
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
