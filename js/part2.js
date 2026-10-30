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

  // Task 3. Fade Methods (number = time in milliseconds)
  $("#fadeInBtn").click(function () {
    $("#photo").fadeIn(1000);
  });

  $("#fadeOutBtn").click(function () {
    $("#photo").fadeOut(1000);
  });

  $("#fadeToggleBtn").click(function () {
    $("#photo").fadeToggle(1000);
  });

  // Task 4. Slide Methods
  $("#slideDownBtn").click(function () {
    $("#panel").slideDown();
  });

  $("#slideUpBtn").click(function () {
    $("#panel").slideUp();
  });

  $("#slideToggleBtn").click(function () {
    $("#panel").slideToggle();
  });

  // Click on the title also opens / closes the panel
  $("#panelTitle").click(function () {
    $("#panel").slideToggle();
  });
});
