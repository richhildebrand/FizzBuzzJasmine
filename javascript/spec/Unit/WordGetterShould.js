"use strict";

describe("Unit Test - WordGetter", function() {
	var fizzBuzzKata;
	var _stringInspector;
	var _calculator;
	var _wordGetter;

	beforeEach(function() {
		fizzBuzzKata = new FizzBuzzKata();
		_stringInspector = fizzBuzzKata.stringInspector;
		_calculator = fizzBuzzKata.calculator;
		_wordGetter = fizzBuzzKata.wordGetter;
	});


	it("should return Fizz if input is divisible by three", function() {
		spyOn(_stringInspector, 'containsThree').andReturn(false);
		spyOn(_calculator, 'isDivisibleByThree').andReturn(true);

		var result = _wordGetter.getFizzIfRequired(5);
		
		expect(result).toBe("Fizz");
	});

	it("should return empty string if a input is not divisible by three nor contianing a three", function() {
		spyOn(_stringInspector, 'containsThree').andReturn(false);
		spyOn(_calculator, 'isDivisibleByThree').andReturn(false);		

		var result = _wordGetter.getFizzIfRequired(3);

		expect(result).toBe("");
	});

	it("should return Fizz if input contains a three", function() {
		spyOn(_stringInspector, 'containsThree').andReturn(true);
		spyOn(_calculator, 'isDivisibleByThree').andReturn(false);
		
		var result = _wordGetter.getFizzIfRequired(5);

		expect(result).toBe("Fizz");
	});

	it("should return Buzz if input cointains a five", function() {
		spyOn(_stringInspector, "containsFive").andReturn(true);
		spyOn(_calculator, "isDivisibleByFive").andReturn(false);

		var result = _wordGetter.getBuzzIfRequired(3);

		expect(result).toBe("Buzz");
	});

	it("should return empty string if input does not contain a five nor is divisible by five", function() {
		spyOn(_stringInspector, "containsFive").andReturn(false);
		spyOn(_calculator, "isDivisibleByFive").andReturn(false);

		var result = _wordGetter.getBuzzIfRequired(5);

		expect(result).toBe("");
	});

	it("should return Buzz when a input is divisible by five", function() {
		spyOn(_stringInspector, "containsFive").andReturn(false);
		spyOn(_calculator, "isDivisibleByFive").andReturn(true);
		var result = _wordGetter.getBuzzIfRequired(3);

		expect(result).toBe("Buzz");
	});
});