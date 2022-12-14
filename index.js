function isPalindrome(word) {
  // Write your algorithm here
  /*write  a code that will return true when the word is equal to the reversed word 
  */
 /*expect true for 
 console.log('nan')
 expect false for 
 console.log('for')
 */

  const reversedWord = word.split('').reverse().join('')
  if (word===reversedWord) {
    return true
  }
  else{return false}
}

/* 
  Add your pseudocode here
  -reverse the input of the string
  -or compare indices without reversing to see if they match
  -if reversed===word => return true
  -else ====> retutn false
  -it is not possible to reverse words in js
  -it is possible to reverse arrays
  -it is possible to convert strings to arrays and back to strings again
  -convert string to array, 
  -reverse the array
  -convert the array to string and then compare the results with original
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;