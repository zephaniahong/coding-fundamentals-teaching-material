/*
Today's topic 
1. Understanding the behaviour of script.js
  - Inside the main function
  - Outside the main function
2. console.log
  - Debugging

Black box 1: Everything inside the main function only runs when the submit button is clicked
Black box 2: Everything outside the main function runs immediately
Black box 3: Whatever is returned from the main function will appear in the gray box
Black box 4: input is whatever the user types in the input box
*/

// Exercise: Given a number by the user, return "The cube of <number> is <answer>"

// Fahrenheit to Celsius
// The user enters a temperature in Fahrenheit. The program should output the conversion to Celsius in the output box.
// Format the output nicely.
function f2c() {
  return 5;
}

function main(input) {
  var celsius = ((input - 30) * 5) / 7;
  return `The temperature in Celsius is ${celsius}`;
}
