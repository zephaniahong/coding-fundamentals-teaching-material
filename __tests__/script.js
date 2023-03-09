/**
 * Day 11
 * 1. Testing
 * 2. Tic Tac Toe
 */

function sum(a, b) {
  return a + b;
}

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

function getRandomNumber() {
  return Math.ceil(Math.random() * 6);
}

test("get random number between 1 and 6", () => {
  var randomNumber = getRandomNumber();
  expect(randomNumber).toBeGreaterThan(0);
  expect(randomNumber).toBeLessThanOrEqual(6);
});

// test("2 equal arrays", () => {
//   const a = [1, 2, 3];
//   const b = [1, 2, 3];
//   expect(a).toContain(2);
// });

// {value: 5, suit: "hearts"}
function getWinner(card1, card2) {
  if (card1.value > card2.value) {
    return "player";
  } else {
    return "computer";
  }
}

test("Card with higher value should win", () => {
  const playerCard = { value: 5, suit: "hearts" };
  const computerCard = { value: 12, suit: "clubs" };
  expect(getWinner(playerCard, computerCard)).toEqual("computer");
});

function square(a) {
  return a * a;
}

test("square of 5 is 25", () => {
  expect(square(5)).toEqual(25);
});
