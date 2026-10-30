$(document).ready(function () {
  // Task 5. Add & Remove Elements
  let count = 2; // we already have 2 items

  // .append() adds to the end of the list
  $("#addBtn").click(function () {
    count++;
    $("#myList").append("<li>Item " + count + "</li>");
  });

  // .prepend() adds to the beginning of the list
  $("#addTopBtn").click(function () {
    count++;
    $("#myList").prepend("<li>Item " + count + "</li>");
  });

  // .remove() deletes the last item
  $("#removeBtn").click(function () {
    $("#myList li:last").remove();
  });

  // Task 6. Modifying Attributes
  // .attr("name", "value") changes an attribute
  $("#imgBtn").click(function () {
    if ($("#changeImg").attr("src") === "images/forest.svg") {
      $("#changeImg").attr("src", "images/sea.svg");
      $("#changeImg").attr("alt", "Sea");
    } else {
      $("#changeImg").attr("src", "images/forest.svg");
      $("#changeImg").attr("alt", "Forest");
    }
  });

  $("#linkBtn").click(function () {
    $("#myLink").attr("href", "https://api.jquery.com/");
    $("#myLink").text("Open jQuery API");
    $("#hrefText").text($("#myLink").attr("href"));
  });

  // Task 7. Form Interaction
  // "input" event runs every time the user types
  $("#name").on("input", function () {
    $("#nameOut").text($(this).val());
  });

  $("#email").on("input", function () {
    $("#emailOut").text($(this).val());
  });
});
