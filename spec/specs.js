describe('equateTriangle', function () {

  it('will find equalateral if all sides are equal', function() {
    expect(equateTriangle(1, 1, 1)).to.equal("That's an equalateral triangle!");
  });

  it('will find isosceles if two sides are equal', function() {
    expect(equateTriangle(1, 2, 2)).to.equal("That's an isosceles triangle!");
  });

  it('will find scalene if no sides are equal', function() {
    expect(equateTriangle(5, 4, 2)).to.equal("That's a scalene triangle!")
  });

  it('will return "not a triangle" when one side is greater than the sum of the other two', function () {
    expect(equateTriangle(5, 2, 2)).to.equal("That's not a triangle!")
  });
});
