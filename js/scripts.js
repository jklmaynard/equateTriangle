var equateTriangle = function(side1, side2, side3) {
  var result = ""

  if (side1 - side2 === 0 &&
    side1 - side3 === 0 &&
    side2 - side3 === 0) {

    result = "equalateral"
    }

    return result
};
