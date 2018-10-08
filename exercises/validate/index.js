// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
  // If no node
  if (!node) {
    return true;
  }

  // Check the node is within the bounds
  if ((min && node.data < min) || (max && node.data > max)) {
    return false;
  }

  return validate(node.left, min, node.data) && validate(node.right, node.data, max);
}

module.exports = validate;
