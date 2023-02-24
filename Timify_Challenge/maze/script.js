let innerbox = document.querySelector(".innerbox");
let initGrid = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];

function setGrid(grid) {
  let cells = document.querySelectorAll(".cell");
  const circle = document.createElement("div");
  for (let cell of cells) {
    if (cell.classList.contains("circle_is_set")) {
      circle.className = "circle";
      cell.appendChild(circle);
    } else {
      if (cell.childElementCount > 0) {
        console.log(cell.children);
        cell.removeChild(cell.children[0]);
      }
    }
  }
}

window.addEventListener("load", () => {
  console.log("start");
  for (let i = 0; i < initGrid.length; i++) {
    for (let j = 0; j < initGrid[i].length; j++) {
      const element = initGrid[i][j];
      let newcell = document.createElement("div");
      newcell.className = element === 1 ? "cell circle_is_set" : "cell";
      newcell.id = `${i}${j}`;
      innerbox.appendChild(newcell);
    }
  }
  setGrid(initGrid);
});

window.addEventListener("keyup", (e) => {
  let cells = document.querySelectorAll(".cell");
  let circle = document.querySelector(".circle");

  circle.style.position = "absolute";

  switch (e.key) {
    case "ArrowLeft":
      console.log(Number(circle.parentNode.id) + 1);
      for (let cell of cells) {
          if (+cell.id === Number(circle.parentNode.id) - 1) {
            circle.parentNode.classList.remove("circle_is_set");
            cell.classList.add("circle_is_set");
            setGrid(initGrid);
            break;
          }
        }
    case "ArrowRight":
      for (let cell of cells) {
          if (+cell.id === Number(circle.parentNode.id) + 1) {
            circle.parentNode.classList.remove("circle_is_set");
            cell.classList.add("circle_is_set");
            setGrid(initGrid);
            break;
          }
        }
    case "ArrowUp":
      for (let cell of cells) {
          if (+cell.id === circle.parentNode.id - 10) {
            circle.parentNode.classList.remove("circle_is_set");
            cell.classList.add("circle_is_set");
            setGrid(initGrid);
            break;
          }
        }
    case "ArrowDown":
      for (let cell of cells) {
          if (+cell.id === Number(circle.parentNode.id) + 10) {
            circle.parentNode.classList.remove("circle_is_set");
            cell.classList.add("circle_is_set");
            setGrid(initGrid);
            break;
          }
        }
  }
});