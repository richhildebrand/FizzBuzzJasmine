"use strict";

var FizzBuzz = function(input) {
	var message = (input % 3 == 0) ? "Fizz" : "";
	message += (input % 5 == 0) ? "Buzz" : "";
	return (message == "") ? input.toString() : message;
}