'use strict';

const Node = require('./node');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtHead(value) {
    const node = new Node(value);

    node.next = this.head;
    this.head = node;
    return this;
  }

  mergeLists(list1, list2) {
    let currentNode = list1.head;
    let currentNode2 = list2.head;

    while (currentNode.next) {
      const temp = currentNode2.next;
      currentNode2.next = currentNode.next;
      currentNode.next = currentNode2;

      currentNode2 = temp;
      currentNode = currentNode2.next;
    }
    return this;
  }
};
