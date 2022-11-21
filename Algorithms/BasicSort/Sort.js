const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function swap(arr, idx1, idx2) {
  // console.log(arr);
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

//  Basic sorting algorithm
// function bubbleSort(arr) {
//   // simplest, but least efficient
//   // space complexity O(1); time complexity O(n^2)
//   let swapping = true;
//   while (swapping) {
//     swapping = false;
//     for (let i = 0; i < arr.length - 1; i++) {
//       // bubble up
//       if (arr[i] > arr[i + 1]) {
//         swap(arr, i, i + 1);
//         swapping = true;
//       }
//     }
//   }
//   return arr;
// }
// console.log(bubbleSort(numbers));

// function selectionSort(arr) {
//   // space complexity O(1); time complexity O(n^2)
//   const length = arr.length;
//   for (let i = 0; i < length; i++) {
//     // set current index as min
//     let min = i;
//     for (let j = i + 1; j < length; j++) {
//       // update min if current > next index
//       if (arr[min] > arr[j]) {
//         min = j;
//       }
//     }
//     swap(arr, i, min);
//   }
//   return arr;
// }
// console.log(selectionSort(numbers));

// function insertionSort(arr) {
//   // Best case: O(n) - nearly sorted data;
//   // Worst Case: time complexity O(n ^ 2) - space complexity O(1)
//   const length = arr.length;
//   for (let i = 0; i < length; i++) {
//     if (arr[i] < arr[0]) {
//       // move number to the 1st position
//       arr.unshift(arr.splice(i, 1)[0]);
//     } else {
//       //  find where number should go
//       for (let j = 1; j < i; j++) {
//         if (arr[i] > arr[j - 1] && arr[i] < arr[j]) {
//           // move number to the right spot
//           arr.splice(j, 0, arr.splice(i, 1)[0]);
//         }
//       }
//     }
//   }
//   return arr;
// }
// console.log(insertionSort(numbers));
