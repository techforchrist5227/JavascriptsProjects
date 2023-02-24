
//create counter variable
let counter = document.getElementById("count-el");

//create button variable
let button = document.getElementById("increment-button");

//start function for incrementing the count when button is clicked
function increaseCount(){
//grab the innerhtml of the counter element and increase it
    counter.innerHTML++;
//log in the console
    console.log(counter);
}



