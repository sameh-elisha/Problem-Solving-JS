/*
7. Reverse Integer
Link:- 
    https://leetcode.com/problems/reverse-integer/
    
Example:-
    Input: x = -123
    Output: -321
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let posValue = Math.abs(x) + "";
  const reverse = posValue.split("").reverse().join("");
  let result = x >= 0 ? parseInt(reverse) : parseInt(reverse) * -1;
  if (result > Math.pow(2, 31) || Math.abs(result) > Math.pow(2, 31) - 1) return 0;
  return result;
};
