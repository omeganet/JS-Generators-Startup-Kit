Gen.map = function* MapGenerator(input, fn) {
	if (typeof(fn) !== 'function')
		throw Error('Invalid function specified');

	for (var item of input) {
		yield fn(item);
	}
};