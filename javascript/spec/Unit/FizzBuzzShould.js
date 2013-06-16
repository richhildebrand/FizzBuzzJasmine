"use strict";

describe("Unit Test - FizzBuzz", function() {

	it("should return Fizz if required", function() {
		spyOn(wordGetter, "getFizzIfRequired").andReturn("Fizz");
		spyOn(wordGetter, "getBuzzIfRequired").andReturn("");

		var result = FizzBuzz(5);
		expect(result).toBe("Fizz");
	});

	it("should return Buzz if required", function() {
		spyOn(wordGetter, "getFizzIfRequired").andReturn("");
		spyOn(wordGetter, "getBuzzIfRequired").andReturn("Buzz");

		var result = FizzBuzz(3);

		expect(result).toBe("Buzz");
	});

	it("should return input if neither Fizz nor Buzz is required", function() {
		var input = 3;
		spyOn(wordGetter, 'getFizzIfRequired').andReturn("");
		spyOn(wordGetter, 'getBuzzIfRequired').andReturn("");

		var result = FizzBuzz(input);

		expect(result).toBe(input.toString());
	});

});