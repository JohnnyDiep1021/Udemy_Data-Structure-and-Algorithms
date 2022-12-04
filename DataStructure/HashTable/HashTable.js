class HashTable {
  constructor(size = 0) {
    this.hashmap = new Array(size).fill(null);
  }
  // "_" private property/ function
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      //  Method 1
      // hash += (hash + key.charCodeAt(i) * i);

      // Method 2
      hash = (hash + key.charCodeAt(i) * i) % this.hashmap.length;
    }
    // Method 1
    // return hash % this.hashmap.length;

    // Method 2
    return hash;
  } // O(1) => very fast

  assign(key, value) {
    const address = this._hash(key);
    if (!this.hashmap[address]) {
      this.hashmap[address] = [];
    }
    this.hashmap[address].push([key, value]);
  } // O(1)

  retrieve(key) {
    const address = this._hash(key);
    const currentBucket = this.hashmap[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    } // if there is no collisions => O(1)
    return undefined;
  }

  keys() {
    //  retrieve all keys without collision
    if (!this.hashmap.length) {
      return undefined;
    }
    let result = [];
    // loop through all the elements
    for (let i = 0; i < this.hashmap.length; i++) {
      // if it's not an empty memory cell
      if (this.hashmap[i] && this.hashmap[i].length) {
        // but also loop through all the potential collisions
        if (this.hashmap.length > 1) {
          for (let j = 0; j < this.hashmap[i].length; j++) {
            result.push(this.hashmap[i][j][0]);
          }
        } else {
          result.push(this.hashmap[i][0]);
        }
      }
    }
    return result;
  }
}

const hashTable = new HashTable(10);
hashTable.assign("burger", 24);
hashTable.assign("pizza", 20);
hashTable.assign("squid", 10);
hashTable.assign("guava", 5);
hashTable.assign("shrimp", 15);
console.log(hashTable.hashmap);
console.log(hashTable.retrieve("burger"));
console.log(hashTable.retrieve("squid"));
console.log(hashTable.retrieve("guava"));
console.log(hashTable.retrieve("pizza"));
console.log(hashTable.retrieve("shrimp"));
console.log(hashTable.keys());
