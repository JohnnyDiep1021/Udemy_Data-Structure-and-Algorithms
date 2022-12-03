const { Node } = require("./Node");
class SinglyLinkedList {
  constructor() {
    this.head = null;
  }
  prepend(data) {
    const newNode = new Node(data);
    if (this.head) {
      newNode.setNextNode(this.head);
    }
    this.head = newNode;
  }
  append(data) {
    const newNode = new Node(data);
    let currentNode = this.head;
    if (!currentNode) {
      this.head = newNode;
    } else {
      while (currentNode.getNextNode()) {
        currentNode = currentNode.getNextNode();
      }
      currentNode.setNextNode(newNode);
    }
  }
  shift() {
    let removedNode = this.head;
    if (!removedNode) {
      return null;
    }
    this.head = removedNode.getNextNode();
    return removedNode;
  }

  print() {
    let currentNode = this.head;
    let output = "<head> ";
    while (currentNode) {
      output += currentNode.data;
      if (currentNode.getNextNode()) {
        output += " --> ";
      }
      currentNode = currentNode.getNextNode();
    }
    output += "<tail>";
    console.log(output);
  }
}

function reverseLinkedList(node) {
  // base case
  if (!node.getNextNode()) {
    return node;
  }
  // recursive call
  const reverse = reverseLinkedList(node._next);
  node._next._next = node;

  node._next = null;
  return reverse;
}
// const newSLL = new SinglyLinkedList();
// newSLL.prepend(`Canada`);
// newSLL.prepend(`USA`);
// newSLL.prepend(`Rusia`);
// newSLL.append(`Vietnam`);
// newSLL.append(`China`);
// newSLL.append(`Korea`);
// newSLL.shift();
// newSLL.print();
// newSLL.shift();
// newSLL.print();
// let reversedSLL = reverseLinkedList(newSLL.head);
// while (reversedSLL) {
//   console.log(reversedSLL.data);
//   reversedSLL = reversedSLL.getNextNode();
// }

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  prepend(data) {
    const newNode = new Node(data);
    const currentNode = this.head;
    if (currentNode) {
      currentNode.setPreviousNode(newNode);
      newNode.setNextNode(currentNode);
    }
    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }
  }
  append(data) {
    const newNode = new Node(data);
    const currentNode = this.tail;
    if (currentNode) {
      currentNode.setNextNode(newNode);
      newNode.setPreviousNode(currentNode);
    }
    this.tail = newNode;
    if (!this.head) {
      this.head = newNode;
    }
  }
  pop() {
    const removedNode = this.tail;
    if (!removedNode) {
      throw new Error(`Linked list is empty. Nothing to remove`);
    }
    this.tail = removedNode.getPreviousNode();
    if (this.tail) {
      this.tail.setNextNode(null);
    }
    if (removedNode === this.head) {
      this.shift();
    }
    return removedNode;
  }
  shift() {
    const removedNode = this.head;
    if (!removedNode) {
      throw new Error(`Linked list is empty. Nothing to remove`);
    }
    this.head = removedNode.getNextNode();
    if (this.head) {
      this.head.setPreviousNode(null);
    }
    if (removedNode === this.tail) {
      this.pop();
    }
    return removedNode;
  }
  removeByData(data) {
    let removedNode = this.head;
    while (removedNode) {
      if (removedNode.data === data) {
        break;
      }
      removedNode = removedNode.getNextNode();
    }
    if (!removedNode) {
      return null;
    }
    if (removedNode === this.head) {
      this.shift();
    } else if (removedNode === this.tail) {
      this.pop();
    } else {
      let prevNode = removedNode.getPreviousNode();
      let nextNode = removedNode.getNextNode();
      prevNode.setNextNode(nextNode);
      nextNode.setPreviousNode(prevNode);
    }
    return removedNode;
  }
  print() {
    let currentNode = this.head;
    let output = "<head> ";
    while (currentNode) {
      output += currentNode.data;
      if (currentNode.getNextNode()) {
        output += " <--> ";
      }
      currentNode = currentNode.getNextNode();
    }
    output += " <tail>";
    console.log(output);
  }
}
const newDLL = new DoublyLinkedList();
newDLL.prepend("Lawrence");
newDLL.prepend("North-York");
newDLL.prepend("Finch");
newDLL.append("Sheppard-Yonge");
newDLL.append("King");
newDLL.print();
console.log(`----------------------`);

console.log(newDLL.removeByData("Lawrence").data);
newDLL.print();
console.log(newDLL.removeByData("Finch").data);
newDLL.print();
console.log(newDLL.removeByData("King").data);
newDLL.print();
console.log(newDLL.removeByData("Sheppard-Yonge").data);
newDLL.print();
console.log(newDLL.removeByData("North-York").data);
newDLL.print();
console.log(newDLL.removeByData("finch"));
