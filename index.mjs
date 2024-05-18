import Node from './nodeClass.mjs';

class LinkedList {
  // Head of List
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }

  append(value) {
    const node = new Node(value);
    this.tail().nextNode = node;
    return this;
  }
  prepend(value) {
    const node = new LinkedList(value, this);

    return node;
  }

  size(node = this, count = 1) {
    const newNode = node.nextNode;
    if (newNode === null) return count;
    return this.size(newNode, ++count);
  }
  head() {
    return this;
  }
  tail(node = this) {
    const newNode = node.nextNode;
    if (newNode === null) return node;
    return this.tail(newNode);
  }
}

console.log(
  new LinkedList('Old Head').prepend('New Head').append('Node').append('2Node')
);
