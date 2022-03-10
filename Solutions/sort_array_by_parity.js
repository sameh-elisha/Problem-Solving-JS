/*
Link:- 
    https://leetcode.com/problems/sort-array-by-parity/
    
Example:-
    Input: nums = [3,1,2,4]
    Output: [2,4,3,1]
    
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  // Filtering even numbers
  const even = nums.filter((num) => num % 2 === 0);

  // Filtering odd numbers
  const odd = nums.filter((num) => num % 2 !== 0);

  return [...even, ...odd];

  // Another solution:-
  //   const even=new Array();
  //   const odd =new Array();
  //   nums.forEach(num =>{
  //       num%2===0?even.push(num):odd.push(num)
  //   })
  //   return [...even,...odd];
};
