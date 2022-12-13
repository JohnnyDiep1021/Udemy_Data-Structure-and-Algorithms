class MinHeap {
  /* 
  // min heap needs to satisfy two conditions:
  // The element at index 1 is the minimum value in the entire list.
  // Every child element in the list must be larger than its parent.

  // The indices for parent and child elements (if they exist):
  // Parent: (index / 2), rounded down
  // Left Child: index * 2
  // Right Child: (index * 2) + 1
  */
  constructor(min) {
    this.heap = [null];
    this.size = 0;
  }
  popMin() {
    if (!this.size) {
      return null;
    }
    console.log(
      `"${this.heap[1]}" at idx 1 is swapped with "${
        this.heap[this.size]
      }" at idx ${this.size}`
    );
    this.swap(1, this.size);
    const min = this.heap.pop();
    this.size--;
    console.log(`Removing "${min}"`, this.heap);
    this.heapify();
    return min;
  }
  add(value) {
    this.heap.push(value);
    console.log(`.. adding ${value}`);
    this.size++;
    console.log(`added ${value} to heap`, this.heap);
    this.bubbleUp();
  }
  bubbleUp() {
    let current = this.size;
    while (
      current > 1 &&
      this.heap[current] < this.heap[this.getParent(current)]
    ) {
      console.log(
        `Swapping currentIdx [${current}] and its parentIdx [${this.getParent(
          current
        )}]`
      );
      this.swap(current, this.getParent(current));
      current = this.getParent(current);
    }
  }
  heapify() {
    let current = 1;
    let leftChild = this.getLeft(current);
    let rightChild = this.getRight(current);
    while (this.canSwap(current, leftChild, rightChild)) {
      if (this.exists(leftChild) && this.exists(rightChild)) {
        if (this.heap[leftChild] < this.heap[rightChild]) {
          this.swap(current, leftChild);
          current = leftChild;
        } else {
          this.swap(current, rightChild);
          current = rightChild;
        }
      } else {
        this.swap(current, leftChild);
        current = leftChild;
      }
      leftChild = this.getLeft(current);
      rightChild = this.getRight(current);
    }
  }
  getParent(current) {
    return Math.floor(current / 2);
  }
  getLeft(current) {
    return current * 2;
  }
  getRight(current) {
    return current * 2 + 1;
  }
  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
  exists(index) {
    return index <= this.size;
  }
  canSwap(current, leftChild, rightChild) {
    return (
      (this.exists(leftChild) && this.heap[current] > this.heap[leftChild]) ||
      (this.exists(rightChild) && this.heap[current] > this.heap[rightChild])
    );
  }
}

// instantiate a MinHeap class
const minHeap = new MinHeap();

// helper function to return a random integer
function randomize() {
  return Math.floor(Math.random() * 40);
}

// populate minHeap with random numbers
for (let i = 0; i < 6; i++) {
  minHeap.add(randomize());
}

// display the bubbled up numbers in the heap
console.log("Bubbled Up", minHeap.heap);

// remove the minimum value from heap
for (let i = 0; i < 6; i++) {
  minHeap.popMin();
  console.log("Heapified", minHeap.heap);
}
