console.log("Js file is working");
// This is for the resourse button on the home page------------------------------------------------------------------------------------------
$("#pageOneButtonResources").on("click", function() {
  window.location.href = "resources";
  event.preventDefault();
});

// This is the resource appender-------------------------------------------------------------------------------------------------------------

var title = ["Body fat equation: ", "BMI Refrence: ", "title three"];
var Link = [
  "https://www.livestrong.com/article/102670-formula-calculate-body-fat-percentage/",
  "https://www.livestrong.com/article/160060-the-ideal-height-weight-bmi/",
  "link three"
];

for (var i = 0; i < title.length; i++) {
  var eachrow =
    "<div class='row dataDesign'><h5> " +
    title[i] +
    "     <a target='_blank' rel='noopener noreferrer' href='" +
    Link[i] +
    "'>View Source Page</a>" +
    "</h5></div>";

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

var myhweight = 0;
var myhheight = 0;
var myhage = 0;

$("#myhCalc").on("click", function() {
  myhweight = document.getElementById("myhWeight").value;
  myhheight = document.getElementById("myhHeight").value;
  myhage = document.getElementById("myhAge").value;

  var lbsTokg = myhweight / 2.204;
  var intocm = myhheight / 2.54;
  var myhCals = 66.5 + 13.8 * lbsTokg + 5 * intocm + 6.8 * myhage;

  //  console.log(myhweight, " " , myhheight, "" , myhage)
  $("#myhCals").val(Math.round(myhCals));

  $("#myhPro").val(Math.round((myhCals * 0.25) / 4));

  $("#myhCarbs").val(Math.round((myhCals * 0.5) / 4));

  $("#myhFat").val(Math.round((myhCals * 0.25) / 9));

  // console.log(myhCals);
});

$("#myhPageOneBack").on("click", function() {
  window.location.href = "/";
  event.preventDefault();
});

$("#myhPageOneNext").on("click", function() {
  window.location.href = "mmh2";
	event.preventDefault();
});

// This is the code for Help you lose weight------------------------------------------------------------------------------------------------------
$("#pageOneButtonHYLW").on("click", function() {
  window.location.href = "helpmeloseweight";
  event.preventDefault();
});

var hlwweight = 0;
var hlwheight = 0;
var hlwage = 0;

$("#hlwCalc").on("click", function() {
  hlwweight = document.getElementById("hlwWeight").value;
  hlwheight = document.getElementById("hlwHeight").value;
  hlwage = document.getElementById("hlwAge").value;

  var lbsTokg = hlwweight / 2.204;
  var intocm = hlwheight / 2.54;
  var hlwCals = 66.5 + 13.8 * lbsTokg + 5 * intocm + 6.8 * myhage;

  //  console.log(myhweight, " " , myhheight, "" , myhage)
  $("#hlwCals").val(Math.round(hlwCals));

  $("#hlwPro").val(Math.round((hlwCals * 0.40) / 4));

  $("#hlwCarbs").val(Math.round((hlwCals * 0.40) / 4));

  $("#hlwFat").val(Math.round((hlwCals * 0.20) / 9));

  // console.log(myhCals);
});

$("#myhPageOneBack").on("click", function() {
  window.location.href = "/";
  event.preventDefault();
});

$("#hlwPageOneNext").on("click", function() {
  window.location.href = "hlw2";
	event.preventDefault();
});

// This is the code for Make you gain weight------------------------------------------------------------------------------------------------------
$("#pageOneButtonHYGW").on("click", function() {
  window.location.href = "helpmegainweight";
  event.preventDefault();
});

var hgwweight = 0;
var hgwheight = 0;
var hgwage = 0;

$("#hgwCalc").on("click", function() {
  hgwweight = document.getElementById("hgwWeight").value;
  hgwheight = document.getElementById("hgwHeight").value;
  hgwage = document.getElementById("hgwAge").value;

  var lbsTokg = hgwweight / 2.204;
  var intocm = hgwheight / 2.54;
  var hgwCals = 66.5 + 13.8 * lbsTokg + 5 * intocm + 6.8 * hgwage;

  //  console.log(myhweight, " " , myhheight, "" , myhage)
  $("#hgwCals").val(Math.round(hgwCals));

  $("#hgwPro").val(Math.round((hgwCals * 0.375) / 4));

  $("#hgwCarbs").val(Math.round((hgwCals * 0.375) / 4));

  $("#hgwFat").val(Math.round((hgwCals * 0.25) / 9));

  // console.log(myhCals);
});

$("#myhPageOneBack").on("click", function() {
  window.location.href = "/";
  event.preventDefault();
});

$("#hgwPageOneNext").on("click", function() {
  window.location.href = "hgw2";
	event.preventDefault();
});

// mmh2--------------------------------------------------------------------------------------------------------------------
$("#myh2PageTwoBack").on("click", function() {
  window.location.href = "makemehealthy";
  event.preventDefault();
});

$("#myh2PageTwoNext").on("click", function() {
 
console.log(myhweight);
});



// $("#hgwPageOneNext").on("click", function() {
//   window.location.href = "hgw2";
// 	event.preventDefault();
// });

// hlw2--------------------------------------------------------------------------------------------------------------------
$("#hlw2PageTwoBack").on("click", function() {
  window.location.href = "helpmeloseweight";
  event.preventDefault();
});

// $("#hgwPageOneNext").on("click", function() {
//   window.location.href = "hgw2";
// 	event.preventDefault();
// });
// mgw2--------------------------------------------------------------------------------------------------------------------
$("#mgw2PageTwoBack").on("click", function() {
  window.location.href = "helpmegainweight";
  event.preventDefault();
});

// $("#hgwPageOneNext").on("click", function() {
//   window.location.href = "hgw2";
// 	event.preventDefault();
// });