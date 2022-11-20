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
}
function traverse(node) {
  const tree = { data: node.data };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(tree.lookup(4));
console.log(tree.lookup(20));
console.log(tree.lookup(15));
console.log(tree.lookup(1));
console.log(tree.lookup(156));
console.log(tree.remove(170));
fs.writeFileSync("BST.json", JSON.stringify(traverse(tree.root)));
