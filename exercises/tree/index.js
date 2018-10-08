// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children = this.children.filter(node => {
      return node.data !== data;
    });
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    // Initialise an array and put the tree's root in it
    const toProcess = [];
    if (this.root) {
      toProcess.push(this.root);
    }

    while (toProcess.length > 0) {
      // Shift out the next element (remove from beginning)
      const item = toProcess.shift();

      // Does it have any children? Put them in toProcess
      if (item.children.length > 0) {
        toProcess.push(...item.children);
      }

      fn(item);
    }
  }

  traverseDF(fn) {
    // Initialise an array and put the tree's root in it
    const toProcess = [];
    if (this.root) {
      toProcess.push(this.root);
    }

    while (toProcess.length > 0) {
      // Shift out the next element (remove from beginning)
      const item = toProcess.shift();

      // Does it have any children? Put them in toProcess
      if (item.children.length > 0) {
        toProcess.unshift(...item.children);
      }

      fn(item);
    }
  }
}

module.exports = { Tree, Node };

////////

// Recursive solution
function traverseDF(fn, node) {
  // If no node, that should only be at the beginning
  if (!node) {
    node = this.root;
  }

  fn(node);

  for (const n of node.children) {
    this.traverseDF(fn, n);
  }
}