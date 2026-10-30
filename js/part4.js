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

  // Task 9. Sequential Animations
  // Animations on the same element run one after another (queue)
  $("#seqBtn").click(function () {
    $("#box2")
      .animate({ left: "250px" }, 800)                  // 1. move right
      .animate({ top: "90px" }, 800)                    // 2. move down
      .animate({ width: "30px", height: "30px" }, 800)  // 3. shrink
      .animate(start, 800);                             // 4. return to original
  });

  // Task 10. Combined Animation
  // Opacity, size and movement change at the same time
  $("#comboBtn").click(function () {
    $("#box3").animate({
      opacity: 0.3,
      width: "100px",
      height: "100px",
      left: "250px",
      top: "50px"
    }, 1500);
  });

  $("#comboResetBtn").click(function () {
    $("#box3").stop().css(start);
  });
});
