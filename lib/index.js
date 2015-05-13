var jasmine = require('jasmine');

jasmine.addMatchers({
	toHaveProperty: function() {
		return function(util) {
			return {
				compare: function(actual, propertyName, propertyValue) {
					var result = {};

					if (!actual.hasOwnProperty(propertyName)) {
						result.pass = false;
						result.message = 'Expected ' + actual +
						' to have property ' + propertyName +
						', but has only ' + Object.keys(actual).join(', ') + '.';
						return result;
					}

					if (propertyValue !== undefined) {
						result.pass = util.equals(actual[propertyName], propertyValue);
					} else {
						result.pass = true;
					}

					if (!result.pass) {
						result.message = 'Expected property "' + propertyName + '" of ' + actual +
						' to be equal to ' + propertyValue +
						' but it is ' + actual[propertyName];
					}

					return result;
				}
			}
		};
	}
});