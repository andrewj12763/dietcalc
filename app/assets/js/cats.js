console.log("Js file is working");
// This is for the resourse button on the home page------------------------------------------------------------------------------------------
$("#pageOneButtonResources").on("click", function() {
  window.location.href = "resources";
	event.preventDefault();
});

// This is the resource appender-------------------------------------------------------------------------------------------------------------

var title = ["Body fat equation: ", "BMI Refrence: ", "title three"];
var Link = ['https://www.livestrong.com/article/102670-formula-calculate-body-fat-percentage/', 'https://www.livestrong.com/article/160060-the-ideal-height-weight-bmi/', "link three"];


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

var myhweight= 0;
var myhheight= 0;
var myhage= 0;

$("#myhCalc").on("click", function() {

 myhweight = document.getElementById("myhWeight").value;
 myhheight = document.getElementById("myhHeight").value;
 myhage = document.getElementById("myhAge").value;

 console.log(myhweight, " " , myhheight, "" , myhage)


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