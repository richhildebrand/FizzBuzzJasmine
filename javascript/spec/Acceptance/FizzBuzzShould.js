"use strict";

describe("Acceptance Test - FizzBuzz", function() {
  var _fizzBuzz;

  beforeEach(function() {
    this.addMatchers(specHelpers)
    
    var fizzBuzzKata = new FizzBuzzKata();
    _fizzBuzz = fizzBuzzKata.FizzBuzz;
  });

  it("should return Fizz when given a number divisible by three", function() {
    var numbersDivisibleByThree = [3, 9, 15, 30, 99, 300];
    
    numbersDivisibleByThree.forEach(function(input) {
      var result = _fizzBuzz(input);
      expect(result).toContain("Fizz");
    });
  });

  it("should return Buzz when given a number divisible by five", function() {
    var numbersDivisibleByFive = [5, 10, 15, 50, 100];

    numbersDivisibleByFive.forEach(function(input) {
      var result = _fizzBuzz(input);
      expect(result).toContain("Buzz");
    });
  });

  it("should return Fizz Buzz if input is divisible by both three and five", function() {
    var numbersDivisibleByThreeAndFive = [15, 30, 90, 315]

    numbersDivisibleByThreeAndFive.forEach(function(input) {
      var expectedValue = "FizzBuzz";
      var result = _fizzBuzz(input);
      expect(result)._toBe(expectedValue, "Expected" + input + "to yield" + expectedValue + "instead of" + result);
    })
  });

});