"use strict";

var calculator = function() {

	var isDivisibleByThree = function(input) {
		return  (input % 3 == 0);
	}

	var isDivisibleByFive = function(input) {
		return (input % 5 == 0);
	}

	return {
		isDivisibleByThree : isDivisibleByThree,
		isDivisibleByFive : isDivisibleByFive
	}
}();

var stringInspector = function() {

	var containsThree = function(input) {
		return input.toString().indexOf('3') !== -1;
	}

	var containsFive = function(input) {
		return input.toString().indexOf('5') !== -1;
	}

	return {
		containsThree : containsThree,
		containsFive : containsFive
	}
}();

var wordGetter = function() {

	var getFizzIfRequired = function(input) {
		if(calculator.isDivisibleByThree(input) || stringInspector.containsThree(input)) {
			return "Fizz";
		}
		return "";
	}

	var getBuzzIfRequired = function(input) {
		if(calculator.isDivisibleByFive(input) || stringInspector.containsFive(input)) {
			return "Buzz";
		}
		return "";
	}

	return {
		getFizzIfRequired : getFizzIfRequired,
		getBuzzIfRequired : getBuzzIfRequired
	}

}();

var FizzBuzz = function(input) {
	var message = "";
	message += wordGetter.getFizzIfRequired(input);
	message += wordGetter.getBuzzIfRequired(input);
	return (message == "") ? input.toString() : message;
}
