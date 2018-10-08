// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  if (!n) {
    return n;
  }

  let positive = true;
  if (n < 0) {
    positive = false;
    n = Math.abs(n);
  }

  let reversedN = n.toString().split('').reverse().join('');

  if (!positive) {
    reversedN = '-' + reversedN;
  }

  return Number(reversedN);
}

module.exports = reverseInt;
