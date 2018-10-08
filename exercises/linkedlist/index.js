// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    // One liner! If there is a head, it'll be the node's next
    // If it is null, the next will be null anyways
    this.head = new Node(data, this.head);
  }

  size() {
    let current = this.head;
    let count = 0;

    while (current) {
      current = current.next;
      count++;
    }

    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let current = this.head;

    while (current && current.next) {
      current = current.next;
    }

    return current;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    let current = this.head;

    if (current) {
      this.head = current.next;
    }

    return current;
  }

  removeLast() {
    let current = this.head;

    // There is no head
    if (!current) {
      return current;
    } else if (!current.next) {
      // Head is the last element
      this.head = null;
      return current;
    }

    // While the next element is NOT the last element
    while (current.next && current.next.next) {
      current = current.next;
    }

    const tail = current.next;
    current.next = null;

    return tail;
  }

  insertLast(data) {
    const newNode = new Node(data);

    // Linked list is empty
    if (!this.head) {
      this.head = newNode;
    } else {
      const lastNode = this.getLast();
      lastNode.next = newNode;
    }
  }

  getAt(count) {
    let i = 0;
    let current = this.head;

    while (current && i < count) {
      current = current.next;
      i++;
    }

    return current;
  }

  removeAt(count) {
    // Remove the head
    if (count === 0) {
      this.removeFirst();
    } else {
      // Remove a later value
      const prev = this.getAt(count - 1);
      // Does the previous one even exist?
      if (prev) {
        const toRemove = prev.next;
        if (toRemove) {
          prev.next = toRemove.next;
        }
      }
    }
  }

  insertAt(data, count) {
    const newNode = new Node(data);
    if (count === 0) {
      this.insertFirst(data);
    } else {
      // Find the value before the given index
      const prev = this.getAt(count - 1);
      // Does it exist?
      if (prev) {
        const curr = prev.next;
        prev.next = newNode;
        newNode.next = curr;
      } else {
        // If we're way out of bounds, insert it to the end
        this.insertLast(data);
      }
    }
  }

  forEach(fn) {
    let curr = this.head;
    while (curr) {
      fn(curr);
      curr = curr.next;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
