$(document).ready(function () {
  // Start values of every box: 60x60, top-left corner
  const start = { left: "0px", top: "0px", width: "60px", height: "60px", opacity: 1 };

  // Task 8. Basic Animation
  // .animate() changes CSS properties smoothly
  $("#basicBtn").click(function () {
    $("#box1").animate({
      width: "120px",
      height: "120px",
      left: "200px"
    }, 1000);
  });

  $("#basicResetBtn").click(function () {
    $("#box1").stop().css(start);
  });
});
