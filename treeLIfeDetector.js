//take two argument values
const argumentValue = process.argv[2]; 
//turn argument value as a number type
const numConv = argumentValue;

if (numConv == 0) {
	console.log('alive');
} 	else {
	console.log('other');
}