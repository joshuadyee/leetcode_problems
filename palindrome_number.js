function isPalindrome(x) {
  let arr = x.toString().split("")
  let reverse = arr.reverse().join("")
  return reverse === x.toString()
}

console.log(isPalindrome(121)) // true
console.log(isPalindrome(-121)) // false

// not the fastest but it works. Try to two more solutions, an optimized one and one without .toString()