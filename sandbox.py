# Question 1 (What method is the best?)

def reverse_word(str):
  reversed = ""
  for letter in str:
    reversed = letter + reversed
  return reversed

# Method 1
def check_palindromes(arr):
  if arr[0] == reverse_word(arr[0]):
    if arr[1] == reverse_word(arr[1]):
      if arr[2] == reverse_word(arr[2]):
        return True
  return False  

# Method 2
def is_palindrome(word):
  return word == reverse_word(word)

def check_all_palindromes(arr):
  for word in arr:
    if is_palindrome(word) == False:
      return False
  return True

print(is_palindrome("hello"))



# print(reverse_word("hello"))
# print(check_palindromes(['racecar', 'noon', 'civic']))
print(check_all_palindromes(['racecar', 'noon', 'hello']))



# Question 2

# Function A
# def isPrime(n):
#    for i > 1 and i < math.sqrt(n):  
      

# # Function B 

# def isPrime(number n)
#   factors = generated array of numbers from 2 to n-1 inclusive
#   for i in factors:
#       if n mod i is not equal to 0
#           remove i from factors

#   if factors is not empty
#       return false

#   return true

# # Function C

# def isPrime(number n)
#   for i from 1 to n inclusive
#       if i ≠ 1 and i ≠ n and n mod i equals 0
#           return false
          
  # return true



# Question 3
"Given an input integer n, create a while loop that utilizes arithmetic to store the frequency of each digit present in n in a dictionary frequency_map. The input number n will be provided as a numeric data type, not a string. For each loop iteration, you must update frequency_map before reducing n."