// find first recurring character (Google question)

// Naiev solution/ brute force
function firstRecurringChar(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[j] === input[j + 1]) {
        return input[j];
      }
      if (input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined;
} // O(n^2) => O(n)

function firstRecurringChar2(input) {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
  }
  return undefined;
} // O(n) => faster

const arr1 = [2, 5, 1, 2, 3, 5, 1, 2, 4]; // return 2
const arr2 = [2, 1, 1, 2, 3, 5, 1, 2, 4]; // return 1
const obj1 = firstRecurringChar(arr1);
console.log(obj1);
// const obj2 = firstRecurringChar(arr2); // => 2
const obj2 = firstRecurringChar(arr2);
console.log(obj2);
