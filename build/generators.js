window.Gen = {};
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
Gen.filter = function* FilterGenerator(input, fn) {
	if (typeof(fn) !== 'function')
		throw Error('Invalid function specified');

	for (var item of input) {
		if (!fn(item))
			continue;

		yield item;
	}
};
Gen.identity = function* IdentityGenerator(input, limit) {
	var isLimitDef = typeof(limit) !== 'undefined';
	if (isLimitDef && (typeof(limit) !== 'number' || limit < 0))
		throw Error('Invalid argument specified for `limit`');

	var i = 0;
	while (!isLimitDef || i < limit) {
		if (isLimitDef)
			i += step;
		
		yield input;
	}
};
Gen.map = function* MapGenerator(input, fn) {
	if (typeof(fn) !== 'function')
		throw Error('Invalid function specified');

	for (var item of input) {
		yield fn(item);
	}
};
Gen.sequence = function* SequenceGenerator(start, step, limit) {
	var isStartDef = typeof(start) !== 'undefined';
	var isStepDef = typeof(step) !== 'undefined';
	var isLimitDef = typeof(limit) !== 'undefined';
	if (isStartDef && typeof(start) !== 'number')
		throw Error('Invalid argument specified for `start`');
	if (isStepDef && typeof(step) !== 'number')
		throw Error('Invalid argument specified for `step`');
	if (isLimitDef && (typeof(limit) !== 'number' || limit < 0))
		throw Error('Invalid argument specified for `limit`');
	if (!isStartDef)
		start = 0;
	if (!isStepDef)
		step = 1;

	var times = 0;
	var value = start;
	while (!isLimitDef || times < limit) {
		if (isLimitDef)
			times++;

		yield value;
		value += step;
	}
};