$(document).ready(function () {
  // Task 2. Visibility Methods
  $("#hideBtn").click(function () {
    $("#myText").hide();
  });

  $("#showBtn").click(function () {
    $("#myText").show();
  });

  $("#toggleBtn").click(function () {
    $("#myText").toggle();
  });
});
