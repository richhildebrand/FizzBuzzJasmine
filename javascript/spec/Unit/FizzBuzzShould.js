"use strict";

describe("Unit Test - FizzBuzz", function() {
	var fizzBuzzKata;
	var _fizzBuzz;
	var _wordGetter;

	beforeEach(function() {
		fizzBuzzKata = new FizzBuzzKata();
		_fizzBuzz = fizzBuzzKata.FizzBuzz;
		_wordGetter = fizzBuzzKata.wordGetter;
	})

	it("should return Fizz if required", function() {
		spyOn(_wordGetter, "getFizzIfRequired").andReturn("Fizz");
		spyOn(_wordGetter, "getBuzzIfRequired").andReturn("");

		var result = _fizzBuzz(5);
		expect(result).toBe("Fizz");
	});

	it("should return Buzz if required", function() {
		spyOn(_wordGetter, "getFizzIfRequired").andReturn("");
		spyOn(_wordGetter, "getBuzzIfRequired").andReturn("Buzz");

		var result = _fizzBuzz(3);

		expect(result).toBe("Buzz");
	});

	it("should return input if neither Fizz nor Buzz is required", function() {
		var input = 3;
		spyOn(_wordGetter, 'getFizzIfRequired').andReturn("");
		spyOn(_wordGetter, 'getBuzzIfRequired').andReturn("");

		var result = _fizzBuzz(input);

		expect(result).toBe(input.toString());
	});

});