nums = [3, 2, 4], target = 6
// output would be [1,2]

// const twoSum = function(nums, target) {
//   // given an array of nums
//   // given a target sum
//   // find which 2 nums in the array total to the target sum
//   // can NOT use the same num/elem twice
//   // return the indices of those nums as an array (ex: [0, 1]) 
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         if (i !== j) {
//           return [i, j]
//         }
//       }
//     }
//   }
// }

// console.log(twoSum(nums, target))

// works fine but nested loops have poor time complexity => 0(n ^ 2)


// hash method 

function twoSum(nums, target) {
  let hash = {}   // hash table
  for (let i = 0; i < nums.length; i++) {   // iterate through nums
    let currentNum = nums[i]    // current num
    let complement = target - currentNum    // complement
    if (hash[complement] !== undefined) {   // if complement exists in hash
      return [hash[complement], i]    // return the indices of the complement and current num
    }
    hash[currentNum] = i    // add current num to hash 
  }
}

console.log(twoSum(nums, target))
