console.log("Js file is working");
// This is for the resourse button on the home page
$("#pageonebuttonresources").on("click", function() {
  window.location.href = "resources";
});
// This is the resource appender

var title = ["title one", "title two", "title three"];
var Link = ["www.youtube.com", "link two", "link three"];

for (var i = 0; i < title.length; i++) {
  var eachrow = "<div class='row datadesign'><h5> " + title[i] + "     <a href='" + Link[i] + "'>View Source Page</a>" + "</h5></div>";

  function addresources() {
		$("#resourcelogic").append(eachrow);
  }

  addresources();
}
