"use strict";

describe("WordGetter", function() {

	it("should return Fizz if input is divisible by three", function() {
		spyOn(stringInspector, 'containsThree').andReturn(false);
		spyOn(calculator, 'isDivisibleByThree').andReturn(true);

		var result = wordGetter.getFizzIfRequired(5);
		
		expect(result).toBe("Fizz");
	});

	it("should return empty string if a input is not divisible by three nor contianing a three", function() {
		spyOn(stringInspector, 'containsThree').andReturn(false);
		spyOn(calculator, 'isDivisibleByThree').andReturn(false);		

		var result = wordGetter.getFizzIfRequired(3);

		expect(result).toBe("");
	});

	it("should return Fizz if input contains a three", function() {
		spyOn(stringInspector, 'containsThree').andReturn(true);
		spyOn(calculator, 'isDivisibleByThree').andReturn(false);
		
		var result = wordGetter.getFizzIfRequired(5);

		expect(result).toBe("Fizz");
	});

	it("should return Buzz if input cointains a five", function() {
		spyOn(stringInspector, "containsFive").andReturn(true);
		spyOn(calculator, "isDivisibleByFive").andReturn(false);

		var result = wordGetter.getBuzzIfRequired(3);

		expect(result).toBe("Buzz");
	});

	it("should return empty string if input does not contain a five nor is divisible by five", function() {
		spyOn(stringInspector, "containsFive").andReturn(false);
		spyOn(calculator, "isDivisibleByFive").andReturn(false);

		var result = wordGetter.getBuzzIfRequired(5);

		expect(result).toBe("");
	});

	it("should return Buzz when a input is divisible by five", function() {
		spyOn(stringInspector, "containsFive").andReturn(false);
		spyOn(calculator, "isDivisibleByFive").andReturn(true);
		var result = wordGetter.getBuzzIfRequired(3);

		expect(result).toBe("Buzz");
	});
});