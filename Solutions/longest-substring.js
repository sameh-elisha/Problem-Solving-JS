/*
3. Longest Substring Without Repeating Characters
Link:- 
    https://leetcode.com/problems/longest-substring-without-repeating-characters/
    
Example:-
    Input: s = "abcabcbb"
    Output: 3
    Explanation: The answer is "abc", with the length of 3.
*/

/**
 * @param {string} s
 * @return {number}
 */

const listOfSubString = [];

// Push sub string, return new string without repeating character.
const subString = (s) => {
  let newSubString = "";
  for (const char of s) {
    if (newSubString.includes(char)) {
      listOfSubString.push(newSubString);
      return s.slice(s.indexOf(char) + 1, s.length);
    }
    newSubString += char;
  }
  listOfSubString.push(newSubString);
  return "";
};

const lengthOfLongestSubstring = (s) => {
  let str = s;
  while (true) {
    str = subString(str);
    if (str === "") break;
  }
  // Sort listOfSubString ay descending then take length first element
  const finalAnswer = listOfSubString.sort((a, b) => b.length - a.length)[0].length;
  return finalAnswer;
};

// console.log(lengthOfLongestSubstring("abcabcbb"));
