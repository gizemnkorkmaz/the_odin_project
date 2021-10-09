const cell = document.querySelectorAll(".game__row__col");
const result = document.querySelector(".scoreboard__result");
const ghostPlayer = "O";
let cellPositions = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let clickedArrayPlayer = [];
let clickedArrayGhost = [];

let winnerPositions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [2, 5, 8],
  [0, 4, 8],
];

function isArrayInArray(arr, item) {
  var item_as_string = JSON.stringify(item);

  var contains = arr.some(function (ele) {
    return JSON.stringify(ele) === item_as_string;
  });
  return contains;
}

function ghostPlays() {
  let ghostIndex =
    cellPositions[Math.floor(Math.random() * cellPositions.length)];
  cell[ghostIndex].classList.add("stamp");
  cell[ghostIndex].innerHTML = "O";
  if (clickedArrayGhost.includes(ghostIndex) === false)
    clickedArrayGhost.push(ghostIndex);
  //remove certain empty position from the array
  cellPositions = cellPositions.filter((index) => index !== Number(ghostIndex));
}

function gameOn(cellItem) {
  //player stamps with X
  let item = document.querySelector(`[data-id = "${cellItem.dataset.id}"]`);
  if (clickedArrayPlayer.includes(Number(cellItem.dataset.id)) === false)
    clickedArrayPlayer.push(Number(cellItem.dataset.id));
  item.classList.add("stamp");
  item.innerHTML = "X";
  //remove certain empty position from the array
  cellPositions = cellPositions.filter(
    (index) => index !== Number(cellItem.dataset.id)
  );
  if (cellPositions.length > 1) {
    ghostPlays();
  }
  if (isArrayInArray(winnerPositions, clickedArrayPlayer)) {
    result.innerHTML = "You won! 🎃";

    document.addEventListener("click", handler, true);

    function handler(e) {
      e.stopPropagation();
      e.preventDefault();
    }
  } else if (isArrayInArray(winnerPositions, clickedArrayGhost)) {
    console.log("Ghost won");
  }
}
cell.forEach((cellItem) => {
  cellItem.addEventListener("click", () => gameOn(cellItem));
});
