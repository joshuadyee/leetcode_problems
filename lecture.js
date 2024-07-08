// Title Case a Sentence

function titleCase(str) {
  return str.split(" ")
    .map(word => 
      word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ")
}

titleCase("I'm a little tea pot");

// Slice and Splice

function frankenSplice(arr1, arr2, n) {
  let copy = arr2.slice()
  copy.splice(n, 0, ...arr1)
  // for loop thru arr1 { copy.splice(n, 0, arr1[i]) /n n++}
  return copy
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

// Where Do I Belong

function getIndexToIns(arr, num) {
  arr.push(num)
  arr.sort((a, b) => a - b)
  return arr.indexOf(num) // can also loop through arr and return i where arr[i] === num
}

getIndexToIns([40, 60], 50);

// Mutations

function mutation(arr) {
  let down = arr.map(word => word.toLowerCase())
  for (let i = 0; i < down[1].length; i++) {
    if (down[0].indexOf(down[1][i]) < 0) {
      return false
    }
  }
  return true
}

mutation(["hello", "hey"]);

// Chunky Monkey

function chunkArrayInGroups(arr, size) {
  let newArr = []
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size))
  }
  return newArr
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2))