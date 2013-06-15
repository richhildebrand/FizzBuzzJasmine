"use strict";

describe("StringInspector", function() {

	it("should return true if input contains a three", function() {
		var numbersThatContainThree = [3, 23, 31, 301, 734];

		numbersThatContainThree.forEach(function(input) {
			var result = stringInspector.containsThree(input);
			expect(result).toBe(true);
		});
	});

	it("should return false if input does not contains three", function() {
		var numbersThatDoNotContainsThree = [2, 7, 18, 29, 10004]

		numbersThatDoNotContainsThree.forEach(function(input) {
			var result = stringInspector.containsThree(input);
			expect(result).toBe(false);
		});
	})

	it("should return true if input contains a five", function() {
		var numbersThatContainFive = [5, 53, 151, 555];

		numbersThatContainFive.forEach(function(input) {
			var result = stringInspector.containsFive(input);
			expect(result).toBe(true);
		});
	});

	it("should return false if input does not contain a five", function() {
		var numbersThatDoNotContainFive = [3, 14, 27, 999];

		numbersThatDoNotContainFive.forEach(function(input) {
			var result = stringInspector.containsFive(input);
			expect(result).toBe(false);
		});
	});

	
});