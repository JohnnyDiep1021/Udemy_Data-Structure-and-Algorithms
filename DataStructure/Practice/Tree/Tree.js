const { Node } = require("./Node");
const fs = require("fs");

class TreeNode {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
  insert(child) {
    if (child instanceof TreeNode) {
      this.children.push(child);
    } else {
      this.children.push(new TreeNode(child));
    }
  }
  remove(removedChild) {
    const length = this.children.length;
    this.children = this.children.filter((child) => {
      if (removedChild instanceof TreeNode) {
        return child !== removedChild;
      } else {
        return child.data !== removedChild.data;
      }
    });
    if (length === this.children.length) {
      // keep traversing through the children of the current TreeNode
      this.children.forEach((child) => {
        child.remove(removedChild);
      });
    }
  }
  print(level = 0) {
    let result = "";
    for (let i = 0; i < level; i++) {
      result += "-- ";
    }
    console.log(`${result}${this.data}`);
    this.children.forEach((child) => child.print(level + 1));
  }
  // O(n)
  depthFirstTraversal() {
    console.log(this.data);
    this.children.forEach((child) => {
      child.depthFirstTraversal();
    });
  }
  breadthFirstTraversal() {
    let queue = [this];
    while (queue.length > 0) {
      const current = queue.shift();
      console.log(current.data);
      queue = queue.concat(current.children);
    }
  }
}

// const tree = new TreeNode(1);

// const randomize = () => Math.floor(Math.random() * 20);

// // add first-level children
// for (let i = 0; i < 2; i++) {
//   tree.insert(randomize());
// }

// // add second-level children
// for (let i = 0; i < 2; i++) {
//   for (let j = 0; j < 2; j++) {
//     tree.children[i].insert(randomize());
//   }
// }

// // add third-level children
// for (let i = 0; i < 2; i++) {
//   for (let j = 0; j < 2; j++) {
//     for (let k = 0; k < 2; k++) {
//       tree.children[i].children[j].insert(randomize());
//     }
//   }
// }

// // tree.print();
// // tree.depthFirstTraversal();
// // tree.breadthFirstTraversal();

class BinarySearchTree {
  // leftNode < parentNode, rightNode > parentNode
  constructor() {
    this.root = null;
  }
  insert(value) {
    // time complexity - O(n log n)
    const newNode = new Node(value);
    let currentNode = this.root;
    if (!currentNode) {
      this.root = newNode;
    }
    while (currentNode) {
      if (value < currentNode.data) {
        // go left
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else if (value > currentNode.data) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      } else {
        return this;
      }
    }
  }
  lookup(value) {
    let currentNode = this.root;
    if (!currentNode) {
      return null;
    }
    while (currentNode) {
      if (currentNode.data === value) {
        return currentNode;
      } else if (currentNode.data < value) {
        // go right
        currentNode = currentNode.right;
      } else {
        // go left
        currentNode = currentNode.left;
      }
    }
    return null;
  }
  breathFirstSearch() {
    // To keep track of the level we're at so that we can access the children
    let queue = [this.root]; // space complexity - O(n); memory can grow quickly
    while (queue.length > 0) {
      const currentNode = queue.shift();
      console.log(currentNode.data);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
  }
  breathFirstSearchRecursive(queue, list) {
    // base case
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
    return this.breathFirstSearchRecursive(queue, list);
  }
  DFSPreorder() {
    // return a list which can be used to form the Binary Search Tree
    return traversePreOrder(this.root, []);
  }
  DFSInorder() {
    // return a sorted list
    return traverseInOrder(this.root, []);
  }
  DFSPostorder() {
    return traversePostOrder(this.root, []);
  }
}
function traverseInOrder(node, list) {
  // recursively traverse to the leftmost node containing the min value
  if (node.left) {
    traverseInOrder(node.left, list);
  }

  // add the min to the list
  list.push(node.data);

  // then, recursively traverse to the rightmost node containing the max value
  if (node.right) {
    traverseInOrder(node.right, list);
  }
  return list;
}
function traversePreOrder(node, list) {
  list.push(node.data);
  if (node.left) {
    traversePreOrder(node.left, list);
  }
  if (node.right) {
    traversePreOrder(node.right, list);
  }
  return list;
}
function traversePostOrder(node, list) {
  // get the left child node first
  if (node.left) {
    traversePostOrder(node.left, list);
  }
  // then, get the right child node
  if (node.right) {
    traversePostOrder(node.right, list);
  }
  // finally, get the parent node
  list.push(node.data);
  return list;
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
// console.log(tree.lookup(20));
// tree.breathFirstSearch();
// console.log(tree.breathFirstSearchRecursive([tree.root], []));
console.log(tree.DFSInorder());
console.log(tree.DFSPreorder());
console.log(tree.DFSPostorder());
// fs.writeFileSync("BST.json", JSON.stringify(traverse(tree.root)));
