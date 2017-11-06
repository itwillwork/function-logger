function wrap (func, forcedDisplayedName) {
	const funcName = forcedDisplayedName || func.name || 'Anonymous function';

  return (...args) => {
    console.group(
			'%c called',
			'color: #848d95; font-weight: normal;',
			funcName
		);

    console.group(
			`%c input (${args.length} items)`,
			'color: #848d95; font-weight: normal;'
		);
		args.forEach(arg => {
				console.log(
					`%c [${typeof arg}]`,
					'color: #848d95; font-weight: normal; font-style: italic;',
					arg
				);
			}
		);
    console.groupEnd();

    console.group(
			'%c inner logs',
			'color: #848d95; font-weight: normal;'
		);
    const res = func(...args);
    console.groupEnd();

    console.log(
			`%c output %c[${typeof res}]`,
			'color: #848d95; font-weight: normal;',
			'color: #848d95; font-weight: normal; font-style: italic;',
			res
		);
    console.groupEnd();

    return res;
  }
}

module.exports = function (...args) {
	if (args.length > 2) {
		console.error('function-logger: Too many arguments');
		return null;
	}

	if (args.length === 0) {
		console.error('function-logger: Too few arguments');
		return null;
	}

	let func = null;
	let forcedDisplayedName = null;

	args.forEach(arg => {
		const type = typeof arg;

		switch (type) {
			case 'symbol':
			case 'string': {
				forcedDisplayedName = arg;
			} break;
			case 'function': {
				func = arg;
			} break;
			default: {
				// nothing
			} break;
		}
	});

	if (!func) {
		console.error('function-render: One of the arguments must be a function');
		return null;
	}

	return wrap(func, forcedDisplayedName);
};
