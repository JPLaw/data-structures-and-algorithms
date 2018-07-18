'use strict'

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
}

const nodes = [];
for (let i = 1; i <= 9; i++) {
  nodes.push(new Node(i));
}

const [one, two, three, four, five, six, seven, eight, nine] = nodes;
one.left = two;
one.right = three;
two.left = six;
three.left = four;
three.right = five;
six.right = seven;
seven.left = eight;
seven.right = nine;

const treeOne = new BinaryTree(one);
console.log('treeOne:', treeOne)

let treeTwo = new BinaryTree(three);
console.log('treeTwo:', treeTwo)

const tree_intersection = (treeOne, treeTwo) => {
  let map = {};
  let output = [];
  const preOrderTraversal = (rootNode, callback) => {
    if (!rootNode) return undefined;
    callback(rootNode.value);
    preOrderTraversal(rootNode.left, callback);
    preOrderTraversal(rootNode.right, callback);
    return undefined;
  };
  preOrderTraversal(treeOne.root, (nodeValue) => {
     map[nodeValue] = 'True'
  });
  preOrderTraversal(treeTwo.root, (nodeValue) => {
    if( map[nodeValue] === 'True'){
      output.push(nodeValue);
    }
 });
 console.log("matching values ", output)
 return output;
}

tree_intersection(treeOne, treeTwo);
