/* The line of code below reads in the value of the argument passed in after the name of your script */ 


const argumentValue = process.argv[2]; 

/* This line of code converts the argument to a numeric value */


const numberValue = Number(argumentValue);

// This line of code divides the input number by two, and stores the rest in a variable named 'result'

const result = numberValue / 2;

console.log(result);