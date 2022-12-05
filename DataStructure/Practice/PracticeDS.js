const { Node } = require("./Node");
class LinkedList {
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
// const newSLL = new LinkedList();
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
// const subway = new DoublyLinkedList();
// subway.prepend("Lawrence");
// subway.prepend("North-York");
// subway.prepend("Finch");
// subway.append("Sheppard-Yonge");
// subway.append("King");
// subway.print();
// console.log(`----------------------`);
// console.log(subway.removeByData("Lawrence").data);
// subway.print();
// console.log(subway.removeByData("Finch").data);
// subway.print();
// console.log(subway.removeByData("King").data);
// subway.print();
// console.log(subway.removeByData("Sheppard-Yonge").data);
// subway.print();
// console.log(subway.removeByData("North-York").data);
// subway.print();
// console.log(subway.removeByData("finch"));

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    }
    if (this.last) {
      this.last.setNextNode(newNode);
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.getNextNode();
    this.length--;
    return this;
  }
  peek() {
    return this.first;
  }
}
// const myQueue = new Queue();
// console.log(myQueue.enqueue(`Joy`));
// console.log(myQueue.enqueue(`Matt`));
// console.log(myQueue.enqueue(`Pavel`));
// console.log(myQueue.enqueue(`Samir`));
// console.log(myQueue.peek());
// console.log(myQueue.dequeue());
// console.log(myQueue.dequeue());
// console.log(myQueue.dequeue());
// console.log(myQueue.dequeue());

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.setNextNode(holdingPointer);
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    const holdingPointer = this.top;
    this.top = this.top.getNextNode();
    this.length--;
    return holdingPointer;
  }
  peek() {
    return this.top;
  }
}

// const myStack = new Stack();
// console.log(myStack.push("Google"));
// console.log(myStack.push("Udemy"));
// console.log(myStack.push("Discord"));
// console.log(myStack.peek());
// console.log(myStack.pop());
// console.log(myStack.pop());
// console.log(myStack);

module.exports = {
  LinkedList,
};
