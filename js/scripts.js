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
