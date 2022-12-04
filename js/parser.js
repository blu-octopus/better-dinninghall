$.ajax ({
    url: "https://api.slug.tools/food/menus",
    type: "GET",
    success: function(data) {
      console.log(data);
    },
    error: function (jqXHR, textStatus, errorThrown) {
        // do stuff
        console.log("Error:", textStatus, errorThrown);
    }
});
