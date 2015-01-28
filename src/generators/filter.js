Gen.filter = function* FilterGenerator(input, fn) {
	if (typeof(fn) !== 'function')
		throw Error('Invalid function specified');

	for (var item of input) {
		if (!fn(item))
			continue;

		yield item;
	}
};