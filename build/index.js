'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function wrap(func, forcedDisplayedName) {
	var funcName = forcedDisplayedName || func.name || 'Anonymous function';

	return function () {
		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		console.group('%c called', 'color: #848d95; font-weight: normal;', funcName);

		console.group('%c input (' + args.length + ' items)', 'color: #848d95; font-weight: normal;');
		args.forEach(function (arg) {
			console.log('%c [' + (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) + ']', 'color: #848d95; font-weight: normal; font-style: italic;', arg);
		});
		console.groupEnd();

		console.group('%c inner logs', 'color: #848d95; font-weight: normal;');
		var res = func.apply(undefined, args);
		console.groupEnd();

		console.log('%c output %c[' + (typeof res === 'undefined' ? 'undefined' : _typeof(res)) + ']', 'color: #848d95; font-weight: normal;', 'color: #848d95; font-weight: normal; font-style: italic;', res);
		console.groupEnd();

		return res;
	};
}

module.exports = function () {
	for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
		args[_key2] = arguments[_key2];
	}

	if (args.length > 2) {
		console.error('function-logger: Too many arguments');
		return null;
	}

	if (args.length === 0) {
		console.error('function-logger: Too few arguments');
		return null;
	}

	var func = null;
	var forcedDisplayedName = null;

	args.forEach(function (arg) {
		var type = typeof arg === 'undefined' ? 'undefined' : _typeof(arg);

		switch (type) {
			case 'symbol':
			case 'string':
				{
					forcedDisplayedName = arg;
				}break;
			case 'function':
				{
					func = arg;
				}break;
			default:
				{
					// nothing
				}break;
		}
	});

	if (!func) {
		console.error('function-render: One of the arguments must be a function');
		return null;
	}

	return wrap(func, forcedDisplayedName);
};
