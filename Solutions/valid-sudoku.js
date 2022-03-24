// Runtime beats 93.55% of JavaScript submissions.

/*
36. Valid Sudoku
Link:- 
    https://leetcode.com/problems/valid-sudoku/
    
Example:-
    Input: board = 
    [["8","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]]
    Output: false
*/

// Return true if there are duplicates values.
const isDuplicatesValues = (array) => {
  arrayFiltering = array.filter((elm) => elm !== ".");
  let checkUniques = new Set(arrayFiltering);
  if (arrayFiltering.length !== checkUniques.size) return true;
  return false;
};

const rowGood = (board) => {
  let rowCheck = [];
  for (let i = 0; i < board.length; i++) {
    // Check Rows if has duplicate values
    rowCheck = isDuplicatesValues(board[i]);
    if (rowCheck) return false;
  }
  return true;
};

const columnGood = (board) => {
  let columnSelect = [];
  for (let i = 0; i < board.length; i++) {
    // Select column && every 3 element in new array
    for (let j = 0; j < 9; j++) {
      columnSelect.push(board[j][i]);
    }
    // Check Columns if has duplicate values
    let columnCheck = isDuplicatesValues(columnSelect);
    if (columnCheck) return false;
    columnSelect = [];
  }
  return true;
};

const boxesGood = (board) => {
  let boxesCheck = [[], [], []];
  let c = 0;
  for (let i = 0; i < board.length; i++) {
    // Select every 3 element in new array
    for (let j = 0; j < 9; j++) {
      if (j % 3 === 0 && j !== 0) c++;
      boxesCheck[c].push(board[i][j]);
    }
    // check every 3 rows is valid
    if ((i + 1) % 3 === 0) {
      for (let j = 0; j < 3; j++) {
        let tempArray = boxesCheck[j];
        tempArray = isDuplicatesValues(tempArray);
        if (tempArray) return false;
      }
      boxesCheck = [[], [], []];
    }
    c = 0;
  }
  return true;
};

const isValidSudoku = (board) => {
  return rowGood(board) && columnGood(board) && boxesGood(board);
};

// Faster code but not clean.
/*
const isValidSudoku = (board) => {
  let rowCheck = [];
  let columnCheck = [];
  let squareCheck = [[], [], []];
  let c = 0;

  for (let i = 0; i < board.length; i++) {
    // Check Rows if has duplicate values
    rowCheck = isDuplicatesValues(board[i]);
    if (rowCheck) return false;
    // Select column
    for (let j = 0; j < 9; j++) {
      if (j % 3 === 0 && j !== 0) c++;
      squareCheck[c].push(board[i][j]);
      columnCheck.push(board[j][i]);
    }
    if ((i + 1) % 3 === 0) {
      for (let j = 0; j < 3; j++) {
        let tempArray = squareCheck[j];
        tempArray = isDuplicatesValues(tempArray);
        if (tempArray) return false;
      }

      squareCheck = [[], [], []];
    }

    c = 0;
    // Check Columns if has duplicate values
    let val = isDuplicatesValues(columnCheck);
    if (val) return false;

    columnCheck = [];
  }
  return true;
};

// Return true if there are duplicates values.
const isDuplicatesValues = (array) => {
  rowCheck = array.filter((elm) => elm !== ".");
  let checkUniques = new Set(rowCheck);
  if (rowCheck.length !== checkUniques.size) return true;
  return false;
};

*/
