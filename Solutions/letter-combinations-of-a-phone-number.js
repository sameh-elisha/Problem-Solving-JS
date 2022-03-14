// Runtime beats 99.04 % of javascript submissions.

/*
17. Letter Combinations of a Phone Number
Link:- 
    https://leetcode.com/problems/letter-combinations-of-a-phone-number/
    
Example:-
    Input: digits = "23"
    Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
*/

/**
 * @param {string} digits
 * @return {string[]}
 */

const letters = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};
const letterCombinations = function (digits) {
  if (digits === "") return [];
  const separateDigits = digits.split("");
  const arrays = new Array();
  let result = new Array();

  separateDigits.forEach((elm) => {
    arrays.push([...letters[elm]]);
  });

  result = arrays[0];
  for (let i = 1; i < arrays.length; i++) {
    if (arrays[i]) {
      result = arrayCombinations(result, arrays[i]);
    }
  }
  return result;
};

const arrayCombinations = (lastArrayResult, nextArray) => {
  const result = new Array();
  for (let i = 0; i < lastArrayResult.length; i++) {
    let element = lastArrayResult[i];
    for (let j = 0; j < nextArray.length; j++) {
      result.push(element + nextArray[j]);
    }
  }
  return result;
};
