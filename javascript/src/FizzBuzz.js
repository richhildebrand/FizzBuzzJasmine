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

var FizzBuzz = function(input) {
	var message = "";
	if(calculator.isDivisibleByThree(input) || stringInspector.containsThree(input)) {
		message += "Fizz";
	}
		
	if(calculator.isDivisibleByFive(input) || stringInspector.containsFive(input)) {
		message += "Buzz";
	}
	
	return (message == "") ? input.toString() : message;
}
