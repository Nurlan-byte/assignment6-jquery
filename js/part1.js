// Task 0. Setup
// The code inside runs only when the page (DOM) is fully loaded
$(document).ready(function () {
  console.log("jQuery is ready!");
  $("#status").text("jQuery is ready!");

  // Task 1. Selectors & CSS
  // $("#id") - by ID, $(".class") - by class, $("tag") - by tag

  // .text() changes only the text
  $("#textBtn").click(function () {
    $("#title").text("New title (changed by ID)");
    $("span").text("New span text (changed by tag)");
  });

  // .html() can put HTML tags inside
  $("#htmlBtn").click(function () {
    $(".info").html("<b>Bold text</b> added with <i>.html()</i>");
  });

  // .css() changes styles
  $("#cssBtn").click(function () {
    $("#title").css("color", "#0769ad");
    $(".info").css({
      "background-color": "#fff3b0",
      "padding": "8px"
    });
    $("span").css("font-size", "22px");
  });
});
