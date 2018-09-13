console.log("Js file is working");
// This is for the resourse button on the home page------------------------------------------------------------------------------------------
$("#pageOneButtonResources").on("click", function() {
  window.location.href = "resources";
	event.preventDefault();
});

// This is the resource appender-------------------------------------------------------------------------------------------------------------

var title = ["title one", "title two", "title three"];
var Link = ['https://www.youtube.com/', "link two", "link three"];


for (var i = 0; i < title.length; i++) {
  var eachrow = "<div class='row dataDesign'><h5> " + title[i] + "     <a target='_blank' rel='noopener noreferrer' href='" + Link[i] + "'>View Source Page</a>" + "</h5></div>";

  function addresources() {
		$("#resourceLogic").append(eachrow);
  }

  addresources();
}

// This is the code for Make yourself healthy------------------------------------------------------------------------------------------------------
$("#pageOneButtonMYH").on("click", function() {
  window.location.href = "makemehealthy";
	event.preventDefault();
});


// This is the code for Help you lose weight------------------------------------------------------------------------------------------------------
$("#pageOneButtonHYLW").on("click", function() {
  window.location.href = "helpmeloseweight";
	event.preventDefault();
});


// This is the code for Make you gain weight------------------------------------------------------------------------------------------------------
$("#pageOneButtonHYGW").on("click", function() {
  window.location.href = "helpmegainweight";
	event.preventDefault();
});