const fs = require('fs');

const trajectory = fs.readFileSync('input.txt', 'utf-8').split('\n');

// console.log(trajectory);

let horizontalTravel = 0;
let depthTravel = 0;

trajectory.forEach(step => {
	const stepDirection = step.split(' ')[0];
	const stepValue = parseInt(step.split(' ')[1]);

	switch(stepDirection) {
		case 'forward':
			horizontalTravel += stepValue;
			break;
		case 'down':
			depthTravel += stepValue;
			break;
		case 'up':
			depthTravel -= stepValue;
			break;
	}
});

console.log('Horizontal Travel: ',horizontalTravel);
console.log('Depth Travel: ',depthTravel);
console.log('Answer: ',horizontalTravel * depthTravel);

