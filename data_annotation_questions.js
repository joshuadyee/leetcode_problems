// ['racecar', 'noon', 'civic'] => true
// ['racecar', 'shoe', 'moon'] => False

function reverse_word(str) {
  let reversed = " "
  for (letter in str) {
    reversed = letter + reversed
  }
  console.log(reversed)
}

reverse_word("hello")