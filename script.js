/* Day 10
1. Objects
  1.1 Purpose
  1.2 Declaring
  1.3 Accessing Data
  1.4 Array of Objects
*/

// 1.1 & 1.2 Purpose and Declaration
// - Store compound data (different data types)
// - Group related information together
var car1 = {
  brand: "Honda",
  model: "Vezel",
  year: 2019,
  twoWheelDrive: true,
};

// Bad!!!
var carArray = ["Honda", "Vezel", 2019, true];

// 1.3 Accessing Data in an Object
// 2 ways
var b = car.brand; // Method 1
var b2 = car["brand"]; // Method 2: notice that it is a string in the square brackets

// Difference between the 2 syntax
// Method 2 allows you to access data through the use of variables
var chicken = "twoWheelDrive";
var t = car[chicken]; // What is the value of t?
var t2 = car.chicken; // What is the value of t2?

// 1.4 Array of Objects
var car2 = {
  brand: "Toyota",
  model: "Vios",
  year: 2008,
  twoWheelDrive: true,
};

var car3 = {
  brand: "BMW",
  model: "M3",
  year: 2010,
  twoWheelDrive: false,
};

var cars = [car1, car2, car3];

// Exercise: console.log all the cars' data formatted as follows: BMW M3 made in 2010
