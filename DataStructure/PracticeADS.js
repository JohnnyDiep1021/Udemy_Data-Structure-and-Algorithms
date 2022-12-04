const { LinkedList } = require("./PracticeDS.js");
const { Node } = require("./Node");

class ComplexHashTable {
  constructor(size = 0) {
    // fill(), then map() to ensure all elements in the array contain different instances of LinkedList. Only fill(new LinkedList()) (passed by reference) will make all elements in the array pointing at the same block of memory containing the LinkedList
    this.hashmap = new Array(size).fill().map(() => new LinkedList());
  }
  _hash(key) {
    let hashCode = 0;
    for (let i = 0; i < key.length; i++) {
      hashCode = key.charCodeAt(i) % this.hashmap.length;
    }
    return hashCode;
  }
  assign(key, value) {
    const index = this._hash(key);
    const linkedList = this.hashmap[index];
    if (!linkedList.head) {
      this.hashmap[index].prepend({ key, value });
    }
    let current = linkedList.head;
    while (current) {
      if (current.data.key === key) {
        current.data = { key, value };
      }
      if (!current.getNextNode()) {
        current.setNextNode(new Node({ key, value }));
        break;
      }
      current = current.getNextNode();
    }
  }
  retrieve(key) {
    const index = this._hash(key);
    let current = this.hashmap[index].head;
    if (!current) {
      return null;
    }
    while (current) {
      if (current.data.key === key) {
        return current.data.value;
      }
      current = current.getNextNode();
    }
  }

  keys() {}
}
// const complexHashTable = new ComplexHashTable(10);
// complexHashTable.assign("burger", 24);
// complexHashTable.assign("pizza", 20);
// complexHashTable.assign("squid", 10);
// complexHashTable.assign("guava", 5);
// complexHashTable.assign("shrimp", 15);
// console.log(complexHashTable.hashmap);
// console.log(complexHashTable.retrieve("burger"));
// console.log(complexHashTable.retrieve("squid"));
// console.log(complexHashTable.retrieve("guava"));
// console.log(complexHashTable.retrieve("pizza"));
// console.log(complexHashTable.retrieve("shrimp"));
// console.log(hashTable.keys());

class HashTable {
  constructor(size = 0) {
    this.hashmap = new Array(size).fill(null);
  }

  _hash(key) {
    let hashCode = 0;
    for (let i = 0; i < key.length; i++) {
      hashCode = key.charCodeAt(i) % this.hashmap.length;
    }
    return hashCode;
  }

  assign(key, value) {
    const index = this._hash(key);
    if (!this.hashmap[index]) {
      this.hashmap[index] = [];
    }
    if (this.hashmap[index].length === 0) {
      this.hashmap[index].push([key, value]);
    } else {
      let length = this.hashmap[index].length - 1;
      let isEditted = false;
      while (length >= 0) {
        if (this.hashmap[index][length][0] === key) {
          this.hashmap[index][length] = [key, value];
          isEditted = true;
          break;
        }
        length--;
      }
      if (!isEditted) {
        this.hashmap[index].push([key, value]);
      }
    }
    return this;
  }
  retrieve(key) {
    const index = this._hash(key);
    if (!this.hashmap[index]) {
      return null;
    }
    let length = this.hashmap[index].length - 1;
    while (length >= 0) {
      if (this.hashmap[index][length][0] === key) {
        return this.hashmap[index][length][1];
      }
      length--;
    }
    return null;
  }
}
// const hashTable = new HashTable(10);
// hashTable.assign("burger", 24);
// hashTable.assign("pizza", 20);
// hashTable.assign("squid", 10);
// hashTable.assign("guava", 5);
// hashTable.assign("durian", 105);
// hashTable.assign("watermelon", 75);
// hashTable.assign("shrimp", 15);
// // console.log(hashTable.hashmap);
// hashTable.assign("shrimp", 25);
// hashTable.assign("watermelon", 5);
// console.log(hashTable.hashmap);
// console.log(hashTable.retrieve("burger"));
// console.log(hashTable.retrieve("squid"));
// console.log(hashTable.retrieve("guava"));
// console.log(hashTable.retrieve("pizza"));
// console.log(hashTable.retrieve("shrimp"));
// console.log(hashTable.retrieve("watermelon"));
// console.log(hashTable.retrieve("durian"));
// console.log(hashTable.retrieve("strawberry"));

class Tree {
  constructor() {}
}
