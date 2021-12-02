const fs = require('fs');
const compare = (array) => {
	let count = 0;
	let prevNum = 0;
	array.forEach((num,index) => {
		num > prevNum ? count+= 1: null;
		prevNum = num; 
	})
console.log(count);
};
const fileContent = fs.readFileSync('./input.txt', 'utf-8').split("\n");
const windowValues = [];
fileContent.forEach((number, index) => { 
	windowValues.push( parseInt(number )+ parseInt(fileContent[index + 1]) +parseInt( fileContent[index+2]) - 1 );
});

compare(fileContent);
compare(windowValues);



/*
var file = fs.createWriteStream('array.txt');
fileContent.forEach(function(v) { file.write(v + '\n'); });
file.end();
*/

