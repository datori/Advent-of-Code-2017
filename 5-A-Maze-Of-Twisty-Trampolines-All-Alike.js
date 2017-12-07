function TwistyTrampolines(maze){
	let index = 0;
	let jumps = 0;
	while (index < maze.length && index >= 0){
		let new_index = index + maze[index];
		maze[index]++;
		index = new_index;
		jumps++;
	}

	return jumps;
}

function TwistyTrampolinesStrange(maze){
	let index = 0;
	let jumps = 0;
	while (index < maze.length && index >= 0){
		let offset = maze[index];
		let new_index = index + offset;
		if (offset >= 3) maze[index]--;
		else maze[index]++;
		index = new_index;
		jumps++;
	}

	return jumps;	
}