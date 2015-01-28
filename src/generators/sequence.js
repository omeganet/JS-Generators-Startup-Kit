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