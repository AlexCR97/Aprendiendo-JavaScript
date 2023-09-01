/**
 * @param {String} str
 */
function isPalindrome(str) {
  for (let leftPointer = 0, rightPointer = str.length - 1; leftPointer < str.length / 2; leftPointer++, rightPointer--) {
    if (str[leftPointer] !== str[rightPointer]) {
      return false
    }
  }
  return true
}

console.log(isPalindrome('oso'))
console.log(isPalindrome('osso'))
console.log(isPalindrome('ostso'))
console.log(isPalindrome('ossso'))
console.log(isPalindrome('okoko'))
console.log(isPalindrome('test'))
