var equateTriangle = function(side1, side2, side3) {
  var result = ""

  if (
    side1 + side2 <= side3 ||
    side1 + side3 <= side2 ||
    side2 + side3 <= side1) {
    result = "not a triangle"

  } else if (side1 - side2 === 0 &&
    side1 - side3 === 0 &&
    side2 - side3 === 0) {
    result = "equalateral";

  } else if (
      side1 - side2 === 0 && side1 - side3 !== 0 ||
      side1 - side3 === 0 && side1 - side2 !== 0 ||
      side2 - side3 === 0 && side1 - side2 !== 0) {
      result = "isoceles";

  } else if (
      side1 - side2 !== 0 && side1 - side3 !== 0 && side2 - side3 !== 0) {
      result = "scalene";

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
    $("#result").show();
    event.preventDefault();
  });
});
