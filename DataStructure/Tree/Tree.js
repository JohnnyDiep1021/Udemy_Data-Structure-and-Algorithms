const fs = require("fs");

class Node {
  constructor(data) {
    this.data = data;
    this._left = null;
    this._right = null;
  }
  get left() {
    return this._left;
  }
  get right() {
    return this._right;
  }
  set left(node) {
    if (node instanceof Node || node === null) {
      this._left = node;
    } else {
      throw new Error(`Data must be an instance of Node`);
    }
  }
  set right(node) {
    if (node instanceof Node || node === null) {
      this._right = node;
    } else {
      throw new Error(`Data must be an instance of Node`);
    }
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(data) {
    let currentNode = this.root;
    const newNode = new Node(data);
    if (!currentNode) {
      this.root = new Node(data);
    }
    while (currentNode) {
      if (currentNode.data > data) {
        // Left child
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        // console.log(`added to left!`);
        currentNode = currentNode.left;
      } else if (currentNode.data < data) {
        // right child
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        // console.log(`added to right!`);
        currentNode = currentNode.right;
      } else {
        // return duplicate node
        return this;
      }
    }
  }
  lookup(data) {
    let currentNode = this.root;
    if (!currentNode) {
      throw new Error(`Bineary Search Tree is empty!`);
    }
    while (currentNode) {
      if (currentNode.data === data) {
        return currentNode;
      } else if (currentNode.data > data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return null;
  }
  remove(data) {
    if (!this.root) {
      return null;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (currentNode.data > data) {
        // left
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (currentNode.data < data) {
        // right
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.data === data) {
        // opt1: no right child
        if (!currentNode.right) {
          if (!parentNode) {
            this.root = currentNode.left;
          } else {
            if (parentNode.data > currentNode.data) {
              // left
              parentNode.left = currentNode.left;
            } else if (parentNode.data < currentNode.data) {
              // right
              parentNode.right = currentNode.left;
            }
          }
        }
        // opt2: right child having no left child
        else if (!currentNode.right.left) {
          currentNode.right.left = currentNode.left;
          if (!parentNode) {
            this.root = currentNode.right;
          } else {
            if (parentNode.data > currentNode.data) {
              // left
              parentNode.left = currentNode.right;
            } else if (parentNode.data < currentNode.data) {
              parentNode.right = currentNode.right;
            }
          }
        }
        // opt3: right child having left child
        //
        else {
          // find the right child's left most
          let leftMost = currentNode.right.left;
          let leftMostParent = currentNode.right;
          while (leftMost.left) {
            leftMostParent = leftMost;
            leftMost = leftMost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftMostParent.left = leftMost.right;
          leftMost.left = currentNode.left;
          leftMost.right = currentNode.right;
          if (!parentNode) {
            this.root = leftMost;
          } else {
            if (parentNode.data > currentNode.data) {
              parentNode.left = leftMost;
            } else if (parentNode.data < currentNode.data) {
              parentNode.right = leftMost;
            }
          }
        }
        return currentNode;
      }
    }
  }
  breadFistSearch() {
    let currentNode = this.root;
    let list = [];
    // To keep track of the level we're at so that we can access the children.
    let queue = []; // memory can grow quickly
    queue.push(currentNode);
    while (queue.length > 0) {
      currentNode = queue.shift();
      console.log(currentNode.data);
      list.push(currentNode.data);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return list;
  }
  breadFistSearchRecursive(queue, list) {
    // base length
    if (!queue.length) {
      return list;
    }
    let currentNode = queue.shift();
    list.push(currentNode.data);
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
    // recursive call
    return this.breadFistSearchRecursive(queue, list);
  }
  DFSInorder() {
    return traverseInOrder(this.root, []);
  }
  DFSPostorder() {
    return traversePostOrder(this.root, []);
  }
  DFSPreorder() {
    return traversePreOrder(this.root, []);
  }
}

function traverseInOrder(node, list) {
  // console.log(node.data);
  // check the left node
  if (node.left) {
    traverseInOrder(node.left, list);
  }
  list.push(node.data);
  // check the right node
  if (node.right) {
    traverseInOrder(node.right, list);
  }
  return list;
}
function traversePreOrder(node, list) {
  // console.log(node.data);
  list.push(node.data);
  // check the left node
  if (node.left) {
    traversePreOrder(node.left, list);
  }
  // check the right node
  if (node.right) {
    traversePreOrder(node.right, list);
  }
  return list;
}
function traversePostOrder(node, list) {
  // console.log(node.data);
  // check the left node
  if (node.left) {
    traversePostOrder(node.left, list);
  }
  // check the right node
  if (node.right) {
    traversePostOrder(node.right, list);
  }
  list.push(node.data);
  return list;
}

function traverse(node) {
  const tree = { data: node.data };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
//      9
//  4       20
//1   6  15   170

// Inorder - [1, 4, 6, 9, 15, 20, 170]
// Preorder - [9, 4, 1, 6, 20, 15, 170]
// Postorder - [1, 6, 4, 15, 170, 20, 9]
const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(tree.DFSInorder());
console.log(tree.DFSPreorder());
console.log(tree.DFSPostorder());
// console.log(tree.breadFistSearch());
// console.log(tree.breadFistSearchRecursive([tree.root], []));
// console.log(tree.lookup(4));
// console.log(tree.lookup(20));
// console.log(tree.lookup(15));
// console.log(tree.lookup(1));
// console.log(tree.lookup(156));
// console.log(tree.remove(170));
fs.writeFileSync("BST.json", JSON.stringify(traverse(tree.root)));
