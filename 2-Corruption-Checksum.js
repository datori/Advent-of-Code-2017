function CorruptionChecksum(matrix){
	let differences = [];

	for (let row in matrix){
		let max = 0;
		let min = matrix[row][0];

		for (let cell in matrix[row]){
			let value = matrix[row][cell];
			if (value < min){
				min = value;
			}
			if (value > max){
				max = value;
			}
		}

		differences.push(max - min);
	}

	return differences.reduce((acc, num) => {
		return acc + num;
	});
}

function CorruptionChecksumDivide(matrix){
	let quotients = [];

	for (let row in matrix){
		for (let divisor in matrix[row]){
			for (let dividend in matrix[row]){
				if (dividend !== divisor && matrix[row][dividend] % matrix[row][divisor] === 0){
					quotients.push(matrix[row][dividend] / matrix[row][divisor]);
				}
			}
		}
	}

	return quotients.reduce((acc, num) => {
		return acc + num;
	});
}
