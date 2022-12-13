function swap(arr, idx1, idx2) {
  // console.log(arr);
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

function bubbleSort(arr) {
  // simplest, but least efficient
  // space complexity O(1); time complexity O(n^2)
  let swapping = true;
  while (swapping) {
    swapping = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapping = true;
      }
    }
  }
  return arr;
}
function insertionSort(arr) {
  // Best case: O(n) - time complexity; SC O(1)
  // Worst case: O(n^2) - time complexity; SC O(1)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[0]) {
      arr.unshift(arr.splice(i, 1)[0]);
    } else {
      for (let j = 1; j < i; j++) {
        if (arr[i] > arr[j - 1] && arr[i] < arr[j]) {
          arr.splice(j, 0, arr.splice(i, 1)[0]);
        }
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  // space complexity O(1); time complexity O(n^2)
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    swap(arr, i, min);
  }
  return arr;
}

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

console.log(bubbleSort(numbers));
console.log(insertionSort(numbers));
console.log(selectionSort(numbers));
