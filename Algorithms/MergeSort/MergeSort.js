const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const mergeSort = function (arr) {
  // base case
  if (arr.length === 1) {
    return arr;
  }
  // split array into right and left
  const length = arr.length;
  const mid = Math.floor(length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  console.log(`Left-array: ${left}`);
  console.log(`Right-array: ${right}`);

  // recursive step
  return merge(mergeSort(left), mergeSort(right));
};

const merge = function (left, right) {
  const sortedArr = [];
  let leftIdx = 0;
  let rightIdx = 0;
  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] < right[rightIdx]) {
      sortedArr.push(left[leftIdx]);
      leftIdx++;
    } else {
      sortedArr.push(right[rightIdx]);
      rightIdx++;
    }
  }
  console.log(left, right);
  return sortedArr.concat(left.slice(leftIdx)).concat(right.slice(rightIdx));
};

console.log(mergeSort(numbers));
