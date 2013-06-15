"use strict";

describe("FizzBuzz", function() {
  beforeEach(function() {
    this.addMatchers({
      _toBe: function(expectedValue, errorMessage) {
          this.message = function() { return errorMessage; }
          return this.actual === expectedValue;
      }
    });
  });

  it("should return Fizz when given a number divisible by three", function() {
    var numbersDivisibleByThree = [3, 9, 15, 30, 99, 300];
    
    numbersDivisibleByThree.forEach(function(input) {
      var result = FizzBuzz(input);
      expect(result).toContain("Fizz");
    });
  });

  it("should not return Fizz when a number is not divisible by three ", function() {
    var numbersNotDivisibleByThree = [1, 11, 77, 101, 341]

    numbersNotDivisibleByThree.forEach(function(input) {
      var result = FizzBuzz(input);
      expect(result).toNotContain("Fizz");
    });
  });

  it("should return Buzz when given a number divisible by five", function() {
    var numbersDivisibleByFive = [5, 10, 15, 50, 100];

    numbersDivisibleByFive.forEach(function(input) {
      var result = FizzBuzz(input);
      expect(result).toContain("Buzz");
    });
  });

  it("should not return Buzz when given a number not divisible by five", function() {
    var numbersNotDivisibleByFive = [7, 11, 33, 111, 541];

    numbersNotDivisibleByFive.forEach(function(input) {
      var result = FizzBuzz(input);
      expect(result).toNotContain("Buzz");
    });
  });

  it("should return Fizz Buzz if input is divisible by both three and five", function() {
    var numbersDivisibleByThreeAndFive = [15, 30, 90, 315]

    numbersDivisibleByThreeAndFive.forEach(function(input) {
      var expectedValue = "FizzBuzz";
      var result = FizzBuzz(input);
      expect(result)._toBe(expectedValue, "Expected" + input + "to yield" + expectedValue + "instead of" + result);
    })
  });

  it("should return input if number is not divisible by three or five", function() {
    var numbersNotDivisibleByThreeOrFive = [7, 11, 77, 112, 541];

    numbersNotDivisibleByThreeOrFive.forEach(function(input) {
      var expectedValue = input.toString();
      var result = FizzBuzz(input);
      expect(result)._toBe(expectedValue, "Expected" + input + "to yield" + expectedValue + "instead of" + result);
    });
  });

});