/* Recap
Black box 1: Everything inside the main function only runs when the submit button is clicked
Black box 2: Everything outside the main function runs immediately
Black box 3: Whatever is returned from the main function will appear in the gray box
Black box 4: input is whatever the user types in the input box
*/

/*
Today's topic 
1. Understanding the behaviour of script.js
  - Inside the main function
  - Outside the main function
2. console.log
  - Testing
  - Debugging
*/

var main = function (input) {
  return "hello " + input;
};
