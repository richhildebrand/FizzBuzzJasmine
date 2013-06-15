var specHelpers = function() {
     
	var _toBe = function(expectedValue, errorMessage) {
          this.message = function() { return errorMessage; }
          return this.actual === expectedValue;
  	}

  	return {
  		_toBe : _toBe
  	}
}();