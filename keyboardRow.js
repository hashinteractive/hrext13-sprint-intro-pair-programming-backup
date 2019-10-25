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
  let words = arr.map(w => w.toLowerCase())

  function allLettersInRow(word){
    const rows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"]
    const letters = [...word]
    
    rows.forEach(row => {
      const filtered = letters.filter(l => row.includes(l))

      if(letters.length === filtered.length) return true
    })
    return false
  }

  return words.filter(allLettersInRow)
}

console.log(wordsInSingleRow(["Hello", "Alaska", "Dad", "Peace"]))