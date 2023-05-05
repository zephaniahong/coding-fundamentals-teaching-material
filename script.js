/* Today's topics
Functions
- Purpose
  * Reusability
  * Encapsulation
- 2 Steps!!!
  * Declare
  * Call
- Arguments vs Parameters
- Mental Model
  * Secondary school math functions -> f(x) = x + 5
*/

// f(x) = 5
// No parameters
function giveFive() {
  return 5;
}

// f(x) = 3
function giveThree() {
  return 3;
}

// Above functions do not make use of x

// Single parameters
// f(x) = x
function giveX(x) {
  return x;
}

// f(x) = x + 3
function addThree(x) {
  return x + 3;
}

// Multiple parameters
// f(x, y, z) = x + y + z
function sumNums(a, b, c) {
  return a + b + c;
}

// practical example
// f(r) = 3.14 * r ** 2
function getAreaOfCircle(radius) {
  return 3.14 * radius ** 2;
}

var main = function (input) {
  return "hello " + input;
};
