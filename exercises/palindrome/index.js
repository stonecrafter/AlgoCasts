// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// ASK: Can the input be undefined, empty string, non-string other value?
function palindrome(str) {
  if (!str) {
    return false;
  }
  const reversed = str.split('').reduce((rev, char) => char + rev, '');
  return str === reversed;
}

module.exports = palindrome;
