function HighEntropyPassphrases(input){
	let phrases = input.split("\n");
	let valid_phrases = 0;

	for (let phrase in phrases){
		let words = phrases[phrase].split(" ");
		let valid_phrase = true;
		let occurrence = [];

		for (let word in words){
			if (occurrence.indexOf(words[word]) !== -1) valid_phrase = false;
			else occurrence.push(words[word]);
		}

		if (valid_phrase) valid_phrases++;
	}

	return valid_phrases;
}

function HighEntropyAnagrams(input){
	let phrases = input.split("\n");
	let valid_phrases = 0;

	for (let phrase in phrases){
		let words = phrases[phrase].split(" ").map((word) => word.split("").sort().join(""));
		let valid_phrase = true;

		for (let word in words){
			let indecies = [];
			while (indecies[indecies.length - 1] !== -1){
				indecies.push(words.indexOf(words[word], indecies[indecies.length - 1] + 1 || 0));
			}
			if (indecies.length > 2) valid_phrase = false;
		}

		if (valid_phrase) valid_phrases++;
	}

	return valid_phrases;	
}