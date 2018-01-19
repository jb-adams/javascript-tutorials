//simple describe
describe("pow", function() {
  it("2 raised to power 3 is 8", function() {
    assert.equal(pow(2,3), 8);
  });
  it("3 raised to power 4 is 81", function() {
    assert.equal(pow(3,4), 81)
  });
});

//describe in for loop
describe("pow", function() {
  function makeTest(x) {
    let expected = x * x * x;
    it(`${x} in the power 3 is ${expected}`, function() {
      assert.equal(pow(x,3), expected);
    });
  }

  for (let x=1; x <= 5; x++ ) {
    makeTest(x);
  }
});

//nested describe
describe("pow", function() {
  describe("raises x to power n", function() {
    function makeTest(x) {
      let expected = x * x * x;
      it(`${x} in the power 3 is ${expected}`, function() {
        assert.equal(pow(x,3), expected)
      });
    }

    for (let x = 1; x < 5; x++) {
      makeTest(x);
    }
  });

  //more tests to follow here
  it("for negative n the result is Nan", function() {
    assert.isNaN(pow(2,-1));
  });

  it("for non-integer n the result is Nan", function() {
    assert.isNaN(pow(2,1.5));
  });
});
