/*
1. Arrays
  1.1 Initialise
  1.2 Indexing
  1.3 Mutating
  1.4 Methods
    - length
    - push
    - pop
2. Loops
  2.1 while loops
  2.2 for loops
    2.2.1 nested loops
  2.3 Key difference between while and for
*/

// 1. Arrays
// 1.1. Initialising
// var rainbow = ["red", "blue", "green"]

// 1.2. Indexing
// var color = rainbow[0]

// 1.3. Mutating
// rainbow[1] = 'violet'

// 1.4. Methods
// 1.4.1. push
// rainbow.push('violet') // ['red', 'green', 'blue', 'violet']

// 1.4.2. pop
// var a = rainbow.pop() // violet
// var b = rainbow.pop() //blue
// var c = rainbow.pop() //green

// 1.4.3. length
// rainbow.length // 1

// 2. Loops
// step 1: initialize an external variable
// step 2: make a boolean using that variable
// step 3: manipulate that variable inside the loop

// 2.1 while loops
// var counter = 0;
// while (counter < 10) {
//   console.log(counter);
//   counter += 1;
// }

// 2.2 for loops
// for (var i = 0; i < 10; i += 1) {
//   console.log(i);
// }

// Exercise 1: console.log 1 - 5
// Exercise 2: print a 5x5 grid of asterisks

// 2.3
// Difference between while and for loops
// Note: A while loop can do whatever a for loop can do, but a for loop may not be able to do what a while loop can do

// Example: Given a randomly generated hand, how can you ensure that the second randomly generated hand is guaranteed to be different from the first
// function getHand(){
//   var randomInteger = Math.ceil(Math.random() * 3)
//   if (randomInteger === 1) {
//     return 'scissors'
//   } else if(randomInteger === 2) {
//     return 'stone'
//   }else {
//     return 'paper'
//   }
// }

// var hand1 = getHand()
// var hand2 = getHand()

// for (var i = 0; i < 100; i+= 1) {
//   hand2 = getHand()
// }

// while(hand2 === hand1) {
//   hand2 = getHand()
// }
