/*
Link:- 
    https://practice.geeksforgeeks.org/problems/reverse-words-in-a-given-string5459/1
    
Example:-
    Input:
    S = pqr.mno
    Output: mno.pqr
*/

class Solution {
  //Function to reverse words in a given string.
  reverseWords(s) {
    const reverseWord = s.split(".").reverse().join(".");
    return reverseWord;
  }
}
