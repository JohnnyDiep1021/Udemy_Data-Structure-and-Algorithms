class Node {
  constructor(data) {
    this.data = data;
    this._next = null;
    this._previous = null;
  }
  setNextNode(node) {
    if (node instanceof Node || node === null) {
      this._next = node;
    } else {
      throw Error(`Data must be an instance of node`);
    }
  }
  setPreviousNode(node) {
    if (node instanceof Node || node === null) {
      this._previous = node;
    } else {
      throw Error(`Data must be an instance of node`);
    }
  }
  getNextNode() {
    return this._next;
  }
  getPreviousNode() {
    return this._previous;
  }
}

module.exports = { Node };
