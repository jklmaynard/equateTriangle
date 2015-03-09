var equateTriangle = function(side1, side2, side3) {
  var result = ""

  if (
    side1 + side2 <= side3 ||
    side1 + side3 <= side2 ||
    side2 + side3 <= side1) {
    result = "That is not a triangle!"

  } else if (side1 - side2 === 0 &&
    side1 - side3 === 0 &&
    side2 - side3 === 0) {
    result = "That's an equalateral triangle!";

  } else if (
      side1 - side2 === 0 && side1 - side3 !== 0 ||
      side1 - side3 === 0 && side1 - side2 !== 0 ||
      side2 - side3 === 0 && side1 - side2 !== 0) {
      result = "That's an isosceles triangle!";

  } else if (
      side1 - side2 !== 0 && side1 - side3 !== 0 && side2 - side3 !== 0) {
      result = "That's a scalene triangle!";

  }

    return result
};

$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    var a = parseInt($("input#sideA").val());
    var b = parseInt($("input#sideB").val());
    var c = parseInt($("input#sideC").val());

    var result = equateTriangle(a, b, c);
    $(".whichTriangle").text(result);
    if (result === "That's an equalateral triangle!") {
      $("#pictures").show()
      $(".equalateral").show();
      $(".isosceles").hide();
      $(".scalene").hide();
      $(".not-triangle").hide()
    } else if (result === "That's an isosceles triangle!") {
      $("#pictures").show()
      $(".equalateral").hide();
      $(".isosceles").show();
      $(".scalene").hide();
      $(".not-triangle").hide()
    } else if (result === "That's a scalene triangle!") {
      $("#pictures").show()
      $(".equalateral").hide();
      $(".isosceles").hide();
      $(".scalene").show();
      $(".not-triangle").hide()
    } else if (result === "That is not a triangle!") {
      $("#pictures").show()
      $(".equalateral").hide();
      $(".isosceles").hide();
      $(".scalene").hide();
      $(".not-triangle").show()
    }
    $("#result").show();
    event.preventDefault();
  });
});
