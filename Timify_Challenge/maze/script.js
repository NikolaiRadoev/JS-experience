let innerbox = document.querySelector(".innerbox");
let initGrid = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 2, 0, 0, 0, 0],
  [0, 2, 0, 1, 2, 0, 0, 0],
  [0, 0, 2, 2, 3, 2, 0, 0],
  [0, 0, 0, 0, 0, 2, 0, 0],
];

function setGrid() {
  let cells = document.querySelectorAll(".cell");
  const circle = document.createElement("div");
  const wall = document.createElement("div");
  const final = document.createElement("div");
  for (let cell of cells) {
    if (cell.classList.contains("circle_is_set")) {
      circle.className = "circle";
      cell.appendChild(circle);
    }
    else if (cell.classList.contains("wall")) {
      wall.className = "wall";
      cell.appendChild(wall);
    }else if (cell.classList.contains("final")) {
      final.className = "final";
      cell.appendChild(final);
    }
    else {
      if (cell.childElementCount > 0) {
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
      if (element === 0) newcell.className = "cell";
      if (element === 1) newcell.className = "cell circle_is_set";
      if (element === 2) newcell.className = "cell wall";
      if (element === 3) newcell.className = "cell final";
      newcell.id = `${i}${j}`;
      innerbox.appendChild(newcell);
    }
  }
  setGrid();
});

window.addEventListener("keyup", (e) => {
  let final = document.querySelector(".final");
  let circle = document.querySelector(".circle");
  let description = document.querySelector(".description");
  let first_box = document.querySelector(".firstbox");
  let new_p = document.createElement("p");
  new_p.textContent = "WIN";
  if (+circle.parentNode.id === +final.id) {
    description.appendChild(new_p);
    document.body.style.backgroundColor = "green";
  }
})

window.addEventListener("keydown", (e) => {
  let cells = document.querySelectorAll(".cell");
  let circle = document.querySelector(".circle");
  let walls = document.querySelectorAll(".wall");

  circle.style.position = "absolute";
  let walls_id = [];

  for (let wall of walls) {
    walls_id.push(wall.id);
  }

  switch (e.key) {
    case "ArrowLeft":
      if (+circle.parentNode.id[1] === 0 || walls_id.includes((+circle.parentNode.id-1)+"")) break;
      for (let cell of cells) {
          if (+cell.id === +circle.parentNode.id - 1) {
            circle.parentNode.classList.remove("circle_is_set");
            cell.classList.add("circle_is_set");
            setGrid();
            break;
          }
        }

    case "ArrowRight":
      if (+circle.parentNode.id[1] === 7 || walls_id.includes((+circle.parentNode.id+1)+"")) break;
      for (let cell of cells) {
          if (+cell.id === Number(circle.parentNode.id) + 1) {
            circle.parentNode.classList.remove("circle_is_set");
            cell.classList.add("circle_is_set");
            setGrid();
            break;
          }
        }
    case "ArrowUp":
      if (+circle.parentNode.id[0] === 0 || walls_id.includes((+circle.parentNode.id-10)+"")) break;
      for (let cell of cells) {
          if (+cell.id === circle.parentNode.id - 10) {
            circle.parentNode.classList.remove("circle_is_set");
            cell.classList.add("circle_is_set");
            setGrid();
            break;
          }
        }
    case "ArrowDown":
      if (+circle.parentNode.id[0] === 4 || walls_id.includes((+circle.parentNode.id+10)+"")) break;
      for (let cell of cells) {
          if (+cell.id === Number(circle.parentNode.id) + 10) {
            circle.parentNode.classList.remove("circle_is_set");
            cell.classList.add("circle_is_set");
            setGrid();
            break;
          }
        }
  }
});