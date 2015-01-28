Gen.aggregate = function* AggregateGenerator() {
	if (arguments.length === 0)
		throw Error('No generators given');

	var generators = [];
	for (var a = 0; a < arguments.length; a++) {
		if (typeof(arguments[a].next) !== 'function')
			throw Error('You must supply a generator');
		generators.push(arguments[a]);
	}

	while (generators.length > 0) {
		for (var i = 0; i < generators.length; i++) {
			var next = generators[i].next();
			if (next.done) {
				generators.splice(i, 1);
				continue;
			}
			yield next.value;
		}
	}
};