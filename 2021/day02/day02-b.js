const fs = require('fs');

const trajectory = fs.readFileSync('input.txt', 'utf-8').split('\n');

let horizontalTravel = 0;
let depthTravel = 0;
let aim = 0;

trajectory.forEach(step => {
	const stepDirection = step.split(' ')[0];
	const stepValue = parseInt(step.split(' ')[1]);

	switch(stepDirection) {
		case 'forward':
			horizontalTravel += stepValue;
			depthTravel += aim * stepValue;
			break;
		case 'down':
			aim += stepValue;
			break;
		case 'up':
			aim -= stepValue;
			break;
	}
});

console.log('Horizontal travel: ', horizontalTravel);
console.log('Depth travel: ', depthTravel);
console.log('Aim: ', aim);
console.log('Answer: ', horizontalTravel * depthTravel);

