// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const counters = [0];
  const toProcess = ['s'];

  if (!root) {
    return counters;
  }

  // Put the tree's root in toProcess
  toProcess.unshift(root);

  // To account for the delimiter element
  while (toProcess.length > 1) {
    const currEl = toProcess.shift();
    if (currEl === 's') {
      counters.push(0);
      toProcess.push(currEl);
    } else {
      // This is a regular node
      // Increment the value of the last element in counter
      counters[counters.length - 1]++;
      toProcess.push(...currEl.children);
    }
  }

  return counters;
}

module.exports = levelWidth;
