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
  // console.log(hash)
  // console.log(Object.values(hash))
  const values = Object.values(hash)
  for (let i = 0; i < values.length; i++) {
    if (values[i] > 1) {
      return true
    }
  }
  return false
}

// console.log(containsDuplicate([1,2,3]))
// console.log(containsDuplicate([1,2,3,1]))
// console.log(containsDuplicate([1,2,3,4,5,6,7,8]))


// Better solution, not the best

function containsDuplicate(nums) {
  const seen = new Set()
  for (let i = 0; i < nums.length; i++) {
    if (seen.has(nums[i])) {
      return true
    }
    seen.add(nums[i])
  }
  return false
}

// Very good solution (Set stores unique values only)

// console.log(containsDuplicate([1,2,3]))
// console.log(containsDuplicate([1,2,3,1]))
// console.log(containsDuplicate([1,2,3,4,5,6,7,8]))

// let nums = [1,2,3,4,4,5]
// const seen = new Set(nums)
// console.log(seen)


// favorite solution I've seen (hash)

function containsDuplicate(nums) {
  let hash = {}   // init hash
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]   // get the current elem
    if (hash[num] !== undefined) {
      return true // if the elem is already in the hash, return true
    } 
    hash[num] = true    // if the elem is not in the hash, add it
  }
  return false    // if no duplicates, return false
}

console.log(containsDuplicate([1,2,3]))
console.log(containsDuplicate([1,2,3,1]))
console.log(containsDuplicate([1,2,3,4,5,6,7,8]))
