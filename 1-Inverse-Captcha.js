function InverseCaptchaNext(digits){
	let sum = 0;

	for (let i = 0; i < digits.length; i++){
		if (digits[i] === digits[(i+1) % digits.length]){
			sum += digits[i];
		}		
	}

	return sum;
}

function InverseCaptchaHalf(digits){
	let sum = 0;
	let step = digits.length / 2;

	for (let i = 0; i < digits.length; i++){
		if (digits[i] === digits[(i+step) % digits.length]){
			sum += digits[i];
		}		
	}

	return sum;
}