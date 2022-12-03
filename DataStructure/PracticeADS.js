const { LinkedList } = require("./PracticeDS.js");

class HashTable {
  constructor(size = 0) {
    this.hashmap = new Array(size).fill(new LinkedList());
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
    const current = this.hashmap[index].head;
    while (current) {
      if (current.data === value) {
      }
    }
  }
  retrieve() {}
}

const hashTable = new HashTable(10);
console.log(hashTable._hash("milk"));
console.log(hashTable._hash("milk"));
// hashTable.assign("burger", 24);
// hashTable.assign("pizza", 20);
// hashTable.assign("squid", 10);
// hashTable.assign("guava", 5);
// hashTable.assign("shrimp", 15);
// // console.log(hashTable.hashmap);
// console.log(hashTable.retrieve("burger"));
// console.log(hashTable.retrieve("squid"));
// console.log(hashTable.retrieve("guava"));
// console.log(hashTable.retrieve("pizza"));
// console.log(hashTable.retrieve("shrimp"));
// console.log(hashTable.keys());
