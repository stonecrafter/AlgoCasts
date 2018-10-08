// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// Chunk size is positive integer of at least 1
// Array has size of at least 1
// Chunk size CAN be > array length
function chunk(array, size) {
  const newArr = [];

  let subArr = [];
  for (const el of array) {
    if (subArr.length < size) {
      subArr.push(el);
    }

    if (subArr.length === size) {
      newArr.push(subArr);
      subArr = [];
    }
  }

  if (subArr.length > 0) {
    newArr.push(subArr);
  }

  return newArr;
}

module.exports = chunk;
