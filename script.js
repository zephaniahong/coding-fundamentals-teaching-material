function test(message, testFunc) {
  console.log(message);
  testFunc();
}

function sum(a, b) {
  return a + b;
}

function expect(val) {
  return {
    toBe: (expected) => {
      if (expected === val) {
        console.log("passed");
      } else {
        console.log("failed");
      }
    },
    toBeGreaterThan: (expected) => {
      if (val > expected) {
        console.log("passed");
      } else {
        console.log("failed");
      }
    },
  };
}

test("sum of 2 and 3 is 5", () => {
  expect(5).toBe(5);
});

// function expect(val) {
//   return {
//     toBe: (expected) => {
//       if (expected === val) {
//         console.log("passed");
//       } else {
//         console.log("failed");
//       }
//     },
//   };
// }
// function test(message, testFunc) {
//   console.log(message);
//   testFunc();
// }

// function expect(val) {
//   return {
//     toBe: (expected) => {
//       if (expected !== val) {
//         console.log(`Expected ${expected}
// Received ${val}`);
//       } else {
//         console.log("✅ Passed");
//       }
//     },
//   };
// }

// function sum(a, b) {
//   return a + b;
// }

// test("2 + 3 is 5", () => {
//   expect(sum(2, 3)).toBe(7);
// });
