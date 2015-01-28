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