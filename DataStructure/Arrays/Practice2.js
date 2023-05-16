/*
Arrays

Pros:
+ Fast lookups
+ Fash push/ pop
+ Ordered

Cons:
+ Slow inserts
+ Slow deletes
+ Fixed size (if using static array)
*/

function mergeSortedArrays(arr1, arr2) {
  if (typeof arr1 !== "object" || typeof arr2 !== "object") {
    return [];
  }
  // concatenate 2 arrays
  const newArr = [...arr1, ...arr2]; // O(1)
  // use sort methods
  return newArr.sort((a, b) => b - a); // O(1)
}

// not efficient
function mergeSortedArrays2(arr1, arr2) {
  if (typeof arr1 !== "object" || typeof arr2 !== "object") {
    return [];
  }
  // concatenate 2 arrays
  const mergeArr = [];
  let arrItem1 = arr1[0];
  let arrItem2 = arr2[0];
  let i = 1;
  let j = 1;
  while (arrItem1 || arrItem2) {
    if (!arrItem2 || arrItem1 < arrItem2) {
      mergeArr.push(arrItem1);
      arrItem1 = arr1[i];
      i++;
    } else {
      mergeArr.push(arrItem2);
      arrItem2 = arr2[j];
      j++;
    }
  }

  return mergeArr;
}

const sortedMergeArrs = mergeSortedArrays2([34, 3, 42, 31, 1], [6, 4, 30]);
console.log(sortedMergeArrs);
