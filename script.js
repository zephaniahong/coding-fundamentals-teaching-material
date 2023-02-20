const boxes = document.getElementsByClassName("box");

var mode = "X";
var placements = [];

for (let i = 0; i < boxes.length; i += 1) {
  boxes[i].addEventListener("click", () => {
    if (boxes[i].innerHTML !== "") {
      console.error("This box is already taken. Try another box!");
    } else {
      boxes[i].innerHTML = mode;
      placements[i] = mode;
      // check for winning condition
      if (gameOver()) {
        console.log("someone won");
      }
    }
    if (mode === "X") {
      mode = "O";
    } else {
      mode = "X";
    }
  });
}

function gameOver() {
  return (
    (placements[0] === placements[1] &&
      placements[1] === placements[2] &&
      placements[0] !== undefined) ||
    (placements[3] === placements[4] &&
      placements[4] === placements[5] &&
      placements[3] !== undefined) ||
    (placements[6] === placements[7] &&
      placements[7] === placements[8] &&
      placements[6] !== undefined)
  );
}
