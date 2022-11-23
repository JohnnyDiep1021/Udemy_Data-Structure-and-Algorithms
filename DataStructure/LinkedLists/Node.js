class Node {
  constructor(data) {
    this.data = data;
    this._next = null;
    // this._previous = null;
  }
  getNextNode() {
    return this._next;
  }
  setNextNode(node) {
    if (!(node instanceof Node)) {
      throw new Error(`Data must be instance of Node class`);
    }
    this._next = node;
  }
  // getPreviousNode() {
  //   return this._previous;
  // }
  // setPreviousNode(node) {
  //   if (!(node instanceof Node)) {
  //     throw new Error(`Data must be instance of Node class`);
  //   }
  //   this._previous = node;
  // }
}

module.exports = {
  Node,
};
