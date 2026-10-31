$(document).ready(function () {
  // Task 11. Accordion Menu
  $(".acc-title").click(function () {
    // the content block right after the clicked title
    const content = $(this).next(".acc-content");

    // close all other sections
    $(".acc-content").not(content).slideUp();
    $(".acc-title").not(this).removeClass("open");
    $(".sign").text("+");

    // open or close the clicked section
    content.slideToggle();
    $(this).toggleClass("open");

    // change + / - sign
    if ($(this).hasClass("open")) {
      $(this).find(".sign").text("-");
    }
  });
});
