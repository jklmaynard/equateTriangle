describe('equateTriangle', function () {

  it('will find equalateral if all sides are equal', function() {
    expect(equateTriangle(1, 1, 1)).to.equal("equalateral");
  });

  it('will find isosceles if two sides are equal', function() {
    expect(equateTriangle(2, 2, 1)).to.equal("isoceles");
  });

  it('will find scalene if no sides are equal', function() {
    expect(equateTriangle(5, 4, 2)).to.equal("scalene")
  });
});
