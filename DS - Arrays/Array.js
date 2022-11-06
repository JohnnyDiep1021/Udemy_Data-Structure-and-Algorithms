class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index]; // O(1)
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  delete(index) {
    const item = this.data[index];
    this.shiftItem(index);
    return item;
  }
  shiftItem(index) {
    for (let i = index; i < this.length - 1; i++) {
      // O(n)
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArr = new MyArray();
newArr.push("hi");
newArr.push("you");
newArr.push("!");
newArr.delete(0);
newArr.push("are");
newArr.push("nice");
newArr.delete(1);
console.log(newArr);
