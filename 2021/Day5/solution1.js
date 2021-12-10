import { data } from "./input.js";

class Node {
  constructor(x, y, value) {
    this.x = x;
    this.y = y;
    this.value = value;
  }
}

const createBoard = (size) => {
  const output = [];
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      output.push(new Node(j, i, "."));
    }
  }
  return output;
};

const printBoard = (inputBoard) => {
  const len = inputBoard.length / 10;
  let counter = 0;
  for (let i = 0; i < len; i++) {
    let printStr = "";
    for (let j = 0; j < len; j++) {
      printStr += inputBoard[counter].value;
      counter++;
    }
    console.log(printStr);
  }
};

const getNodeOnBoardByXY = (inputX, inputY, inputBoard) => {
  for (const node of inputBoard) {
    if (node.x === inputX && node.y === inputY) return node;
  }
};

// * before

let x1, x2, y1, y2;

const board = createBoard(10);

// printBoard(board);

const getHydrothermalVenture = (input) => {
  let xyPointsContainer = [];
  for (const str of input) {
    const arr = str.match(/\d+/g);
    x1 = parseInt(arr[0]);
    y1 = parseInt(arr[1]);
    x2 = parseInt(arr[2]);
    y2 = parseInt(arr[3]);

    const getMoves = () => {
      const getXYPoints = (vertical) => {
        const output = [];
        // * dist1 = starting
        // * dist2 = finishing
        let dist1, dist2;
        if (vertical) {
          if (y1 < y2) {
            console.log("y1 < y2");
            output.push(`${x1}, ${y2}`);
            dist1 = y1;
            dist2 = y2;
          } else {
            console.log("y1 > y2");
            output.push(`${x1}, ${y1}`);
            dist1 = y2;
            dist2 = y1;
          }
        } else {
          if (x1 < x2) {
            dist1 = x1;
            dist2 = x2;
            output.push(`${x2}, ${y1}`);
          } else {
            dist1 = x2;
            dist2 = x1;
            output.push(`${x1}, ${y1}`);
          }
        }

        // console.log("dist1", dist1);
        // console.log("dist2", dist2);

        for (let i = dist1; i < dist2; i++) {
          if (vertical) {
            output.push(`${x1.toString()}, ${i.toString()}`);
          } else {
            output.push(`${i.toString()}, ${y1.toString()}`);
          }
        }

        return output;
      };

      // * moving vertical
      // * horizontal x axis stays the same

      if (x1 === x2) {
        xyPointsContainer.push(getXYPoints(true));
      }

      // * horizontal
      // * vertical y axis stays the same

      if (y1 === y2) {
        // console.log(arr);
        // console.log("x1", x1);
        // console.log("x2", x2);
        xyPointsContainer.push(getXYPoints(false));
        // console.log(xyPointsContainer);
      }
    };

    getMoves();
    // TODO: do something with the xy container
  }

  console.log("xyPointsContainer", xyPointsContainer);

  return "";
};

console.log(getHydrothermalVenture(data));
