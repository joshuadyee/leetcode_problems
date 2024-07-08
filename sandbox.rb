def reverse_word(word)
  reversed = ""
  for letter in word
    reversed = letter + reversed
  end
  return reversed
end

p reverse_word("hello")