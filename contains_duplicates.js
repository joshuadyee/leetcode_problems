function containsDuplicate(nums) {
  // if nums contains a duplicate => true
  // no duplicate => false
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    for (let j = 0; j < nums.length; j++) {
      // console.log(nums[i], nums[j])
      if (i === j) { // same index, skip
      } else if (nums[i] === nums[j]) {
        return true
      } 
    }
  }
  return false
}

// console.log(containsDuplicate([1,2,3]))
// console.log(containsDuplicate([1,2,3,1]))
// console.log(containsDuplicate([1,2,3,4,5,6,7,8]))

// is a valid solution, exceeds time limit for Leetcode editor


function containsDuplicate(nums) {
  let hash = {}
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if (hash[num] === undefined) {
      hash[num] = 0 
    } 
    hash[num]++
  }
  console.log(hash)
  console.log(Object.values(hash))
}

console.log(containsDuplicate([1,2,3]))
// console.log(containsDuplicate([1,2,3,1]))
// console.log(containsDuplicate([1,2,3,4,5,6,7,8]))