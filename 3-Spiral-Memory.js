function SpiralMemory(num){
	/** Spiral increases by 2 'width' and 2 'height' each layer.
	(i) is the length of one side of the spiral.
	(c) is the number of layers.  **/
	let i = 1;
	let c = 1;

	while (i**2 < num){
		i += 2;
		c += 1;
	}

	let key = (i - 1) / 2;
	let next = (i - 1);
	let points = [key, key + next, key + next*2, key + next*3];
	let position = num - (i-2)**2;

	// Find the closest point
	let partial = Math.min(...points.map((point) => Math.abs(position - point)));
	let complete = partial + (c - 1);

	return complete;
}

