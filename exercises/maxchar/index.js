// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// ASK: What if there is more than one?
// Shall we use a random one or a particular one? The first one, the last one, etc?
function maxChar(str) {
  if (!str) {
    return str;
  }

  // Building the frequency map
  const charMap = {};
  for (let char of str) {
    charMap[char] = charMap[char] ? charMap[char] + 1 : 1;
  }

  const frequencies = Object.values(charMap);
  const max = Math.max( ...frequencies);
  return Object.keys(charMap).find(key => charMap[key] === max);

  // We can also iterate through the object via for-in loop and
  // keep track of the most recent max char / freq, update as necessary if larger
}

module.exports = maxChar;
