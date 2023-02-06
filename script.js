/* Today's topics
1. If statements 
2. Booleans
  - not
  - or
  - and
*/

// Operators
// === // = = =
// !== // ! = =
// >= // > =
// <= // < =
// >
// <
// or -> ||
// and -> &&

// Boolean examples
// if i am above 21, I am allowed to drink
// if i am not above 18, I cannot drive

// Boolean and
// if i am above 20 and below 40, I am a youth

// Boolean or
// if i am above 13 years old or I am at least 160cm, I am allowed to ride the rollercoaster

// Using not
// !(5 === 10) -> true
// 5 !== 10 -> true
// !true -> false
// !false -> true

// Exercise
// Grade student's result
// Extra: Solve without using and
// F - Less than 50
// D: 50 - 59
// C: 60 - 69
// B: 70 - 79
// A: 80 - 89
// A+: 90 - 100

// Why does this program require us to use the && operator?
// How could we write this program without using the && operator?
// What happens if we input a value greater than 100? Must we check for values above 100 to infinity?
function main(input) {
  var result;
  if (input < 50) {
    result = "F";
  }
  if (input >= 50 && input < 60) {
    result = "D";
  }
  if (input >= 60 && input < 70) {
    result = "C";
  }
  if (input >= 70 && input < 80) {
    result = "B";
  }
  if (input >= 80 && input < 90) {
    result = "A";
  }
  if (input >= 90 && input <= 100) {
    result = "A+";
  }
  return result;
}

// else if and else
var chicken = 5;
if (chicken < 10) {
  console.log("I am less than 10");
} else if (chicken < 20) {
  console.log("I am less than 20 but not less than 10");
} else {
  console.log("I am 20 or greater");
}
