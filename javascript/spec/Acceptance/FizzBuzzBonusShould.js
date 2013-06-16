"use strict";

describe("Acceptance Test - Bonus FizzBuzz", function() {
	beforeEach(function() {
		this.addMatchers(specHelpers)
	});

	it("should return Fizz when a number contains three", function() {
		var numbersContainingThree = [3, 33, 73, 301, 5531];

		numbersContainingThree.forEach(function(input) {
			var result = FizzBuzz(input);
			expect(result).toContain("Fizz");
		});
	});

	it("should not return Fizz when a number is not divisible by three nor containing a three", function() {
	var numbersNotDivisibleByThreeNorContainingThree = [1, 11, 77, 101, 241]

	numbersNotDivisibleByThreeNorContainingThree.forEach(function(input) {
	  var result = FizzBuzz(input);
	  expect(result).toNotContain("Fizz");
	});
	});

	it("should return Buzz when a number contains five", function() {
		var numbersContainingFive = [5, 15, 52, 151];

		numbersContainingFive.forEach(function(input) {
			var result = FizzBuzz(input);
			expect(result).toContain("Buzz");
		});
	});

	it("should not return Buzz when given a number not divisible by five nor containing five", function() {
		var numbersNotDivisibleByFiveNorContainingFive = [7, 11, 33, 111, 641];

		numbersNotDivisibleByFiveNorContainingFive.forEach(function(input) {
			var result = FizzBuzz(input);
			expect(result).toNotContain("Buzz");
		});
	});

	it("should return FizzBuzz if number contains both three and five", function() {
		var numbersContainingThreeAndFive = [53, 35, 3152, 5533];

		numbersContainingThreeAndFive.forEach(function(input) {
			var expectedValue = "FizzBuzz";
			var result = FizzBuzz(input);
			expect(result)._toBe(expectedValue, "Expected " + input + " to yield " + expectedValue + " instead of " + result);
		});
	});

	it("should return input if number is not divisible by three or five", function() {
		var numbersNotDivisibleByThreeOrFive = [7, 11, 77, 112, 442];

		numbersNotDivisibleByThreeOrFive.forEach(function(input) {
			var expectedValue = input.toString();
			var result = FizzBuzz(input);
			expect(result)._toBe(expectedValue, "Expected " + input + " to yield " + expectedValue + " instead of " + result);
		});
  	});

});