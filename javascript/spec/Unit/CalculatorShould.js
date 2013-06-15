"use strict";

describe("Calculator", function(){

	it("should return true when input is divisible by three", function() {
		var numbersDivisibleByThree = [3, 9, 30, 555];

		numbersDivisibleByThree.forEach(function(input) {
			var result = calculator.isDivisibleByThree(input);
			expect(result).toBe(true);
		});
	});

	it("should return false when input is not divisible by three", function() {
		var numbersNotDivisibleByThree = [7, 11, 20, 77, 103];

		numbersNotDivisibleByThree.forEach(function(input) {
			var result = calculator.isDivisibleByThree(input);
			expect(result).toBe(false);
		});
	});

	it("should return true when input is divisible by five", function() {
		var numbersDivisibleByFive = [5, 15, 105, 555];

		numbersDivisibleByFive.forEach(function(input) {
			var result = calculator.isDivisibleByFive(input);
			expect(result).toBe(true);
		});
	});

	it("should return true when input is divisible by three", function() {
		var numbersNotDivisibleByFive = [7, 77, 99, 103, 444];

		numbersNotDivisibleByFive.forEach(function(input) {
			var result = calculator.isDivisibleByFive(input);
			expect(result).toBe(false);
		});
	});

});