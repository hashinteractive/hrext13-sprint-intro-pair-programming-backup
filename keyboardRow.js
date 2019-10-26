/*
Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.


American keyboard


Example 1:
Input: ["Hello", "Alaska", "Dad", "Peace"]
Output: ["Alaska", "Dad"]
Note:
You may use one character in the keyboard more than once.
You may assume the input string will only contain letters of alphabet.
*/

// Navigator: ENTER_NAME
// Driver: ENTER_NAME
// code here

const wordsInSingleRow = (arr) => {
  //American keyboard rows
  const rows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"]
  //lets make sure all words are lowercase
  let words = arr.map(w => w.toLowerCase())

  //alright alright alright
  //we're going to filter words iterating over every word
  //returning truthy value from rows.some() (aka "any row") and iterating over rows 
  //checking if every letter in word aka [...word] is included in the row we're checking
  //ie. the row "asdfghjkl" would return true for every letter in "alaska" ["a", "l", "a", "s", "k", "a"] being included in the row "asdfghjkl"
  return words.filter(word => rows.some(row => [...word].every(l => row.includes(l))))
}

console.log(wordsInSingleRow(["Hello", "Alaska", "Dad", "Peace"]))