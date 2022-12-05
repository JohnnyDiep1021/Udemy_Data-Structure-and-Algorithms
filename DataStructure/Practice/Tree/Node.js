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
      throw Error(`Input must be an instance of Node`);
    }
  }
  set right(node) {
    if (node instanceof Node || node === null) {
      this._right = node;
    } else {
      throw Error(`Input must be an instance of Node`);
    }
  }
}

module.exports = { Node };
