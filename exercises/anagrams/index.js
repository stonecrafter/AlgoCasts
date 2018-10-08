// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  // Sanitise string inputs first
  // Replace anything that is NOT a w-character
  const regex = /[^\w]/g;
  let newA = stringA.replace(regex, '').toLowerCase();
  let newB = stringB.replace(regex, '').toLowerCase();

  let isAnagram = false;

  // Sanitised strings must be equal length
  if (newA.length === newB.length) {

    // Build two maps / hash tables of letter frequencies
    // NOTE: The below can be made into a helper function
    const charMapA = {};
    for (const char of newA) {
      charMapA[char] = charMapA[char] ? charMapA[char] += 1 : 1;
    }

    const charMapB = {};
    for (const char of newB) {
      charMapB[char] = charMapB[char] ? charMapB[char] += 1 : 1;
    }

    // The objects must have the same number of keys
    const keysOfA = Object.keys(charMapA);
    if (keysOfA.length === Object.keys(charMapB).length) {
      // Now we know they are the same length
      // Iterate through the keys and values of A's char map, and make sure that the same
      // key in char B's map, maps to the same value as A
      isAnagram = keysOfA.every((key) =>  {
        return charMapA[key] === charMapB[key];
      });
    }
  }

  return isAnagram;
}

module.exports = anagrams;
