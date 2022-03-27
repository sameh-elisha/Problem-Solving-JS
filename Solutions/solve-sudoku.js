/*
37. Sudoku Solver
Link:- 
    https://leetcode.com/problems/sudoku-solver/
    
Example:-
Input: board =[
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
Output: [
  ["5", "3", "4", "6", "7", "8", "9", "1", "2"],
  ["6", "7", "2", "1", "9", "5", "3", "4", "8"],
  ["1", "9", "8", "3", "4", "2", "5", "6", "7"],
  ["8", "5", "9", "7", "6", "1", "4", "2", "3"],
  ["4", "2", "6", "8", "5", "3", "7", "9", "1"],
  ["7", "1", "3", "9", "2", "4", "8", "5", "6"],
  ["9", "6", "1", "5", "3", "7", "2", "8", "4"],
  ["2", "8", "7", "4", "1", "9", "6", "3", "5"],
  ["3", "4", "5", "2", "8", "6", "1", "7", "9"],
];
Explanation: The input board is shown above and the only valid solution is shown below:
*/

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

const isDuplicatesValues = (array) => {
  arrayFiltering = array.filter((elm) => elm !== ".");
  let checkUniques = new Set(arrayFiltering);
  if (arrayFiltering.length !== checkUniques.size) return true;
  return false;
};

const rowGood = (board, i) => {
  let rowCheck = isDuplicatesValues(board[i]);
  if (rowCheck) return false;
  return true;
};

const columnGood = (board, ver) => {
  let columnSelect = [];
  for (let j = 0; j < 9; j++) {
    columnSelect[j] = board[j][ver];
  }
  let columnCheck = isDuplicatesValues(columnSelect);
  if (columnCheck) return false;
  return true;
};

const helperBoxes = (num) => {
  if (num >= 0 && num <= 2) return 0;
  if (num >= 3 && num <= 5) return 3;
  if (num >= 6 && num <= 8) return 6;
};
const boxesGood = (board, row, col) => {
  let selectRow = helperBoxes(row);
  let selectCol = helperBoxes(col);

  let boxesCheck = [];
  for (let i = selectRow; i < selectRow + 3; i++) {
    for (let j = selectCol; j < selectCol + 3; j++) {
      boxesCheck.push(board[i][j]);
    }
    if ((i + 1) % 3 === 0) {
      let tempArray = boxesCheck;
      tempArray = isDuplicatesValues(tempArray);
      if (tempArray) return false;
    }
  }
  return true;
};

const isValidSudoku = (board, row, col) => {
  return rowGood(board, row) && columnGood(board, col) && boxesGood(board, row, col);
};

let possibilities = [];
const setNumber = (hor, ver, oldValue, board) => {
  if (oldValue === ".") oldValue = 0;
  oldValue = parseInt(oldValue);
  for (let i = oldValue + 1; i <= 9; i++) {
    board[hor][ver] = i + "";
    if (isValidSudoku(board, hor, ver)) {
      possibilities.push([hor, ver]);
      return;
    }
  }
  board[hor][ver] = ".";
  let [felidX, felidY] = possibilities.pop();
  setNumber(felidX, felidY, board[felidX][felidY], board);

  setNumber(hor, ver, board[hor][ver], board);
};

const solveSudoku = (board) => {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === ".") {
        setNumber(i, j, ".", board);
      }
    }
  }
  return board;
};
