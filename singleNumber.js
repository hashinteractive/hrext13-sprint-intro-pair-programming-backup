/*
Single Number

Given a non-empty array of integers, every element appears twice except for one. Find that single one.

i.e. singleNumber([1,2,2,4,4])
Desired output:
1
*/

//Navigator: ENTER_NAME
//Driver: ENTER_NAME
//code here

const findUniqueNum = (arr) => {
  return arr.filter(num => arr.indexOf(num) === arr.lastIndexOf(num))[0]
}

console.log(findUniqueNum([1,2,2,4,4]))
