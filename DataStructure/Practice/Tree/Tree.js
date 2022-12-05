const { Node } = require("./Node");

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

const tree = new TreeNode(1);

const randomize = () => Math.floor(Math.random() * 20);

// add first-level children
for (let i = 0; i < 2; i++) {
  tree.insert(randomize());
}

// add second-level children
for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 2; j++) {
    tree.children[i].insert(randomize());
  }
}

// add third-level children
for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 2; j++) {
    for (let k = 0; k < 2; k++) {
      tree.children[i].children[j].insert(randomize());
    }
  }
}

tree.print();
// tree.depthFirstTraversal();
tree.breadthFirstTraversal();

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
}
