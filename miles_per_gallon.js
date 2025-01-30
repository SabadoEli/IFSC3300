
let milesDriven = prompt("Enter Miles Driven:", "0");
milesDriven = parseFloat(milesDriven); 


let gallonsUsed = prompt("Enter Gallons of Gas Used:", "0");
gallonsUsed = parseFloat(gallonsUsed); 


if (!isNaN(milesDriven) && !isNaN(gallonsUsed) && gallonsUsed > 0) {
    let mpg = milesDriven / gallonsUsed; 
    alert("Miles Per Gallon: " + mpg.toFixed(2)); 
} else {
    alert("Invalid input. Please enter valid numbers.");
}
