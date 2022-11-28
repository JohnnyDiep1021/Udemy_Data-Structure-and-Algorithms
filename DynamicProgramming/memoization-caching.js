//  memoization or memoisation is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.

// Dynamic programming is an optimization technique and a way to solve problems by breaking them down into a collection of sub-problems, solving each of those problems just once, and storing their solutions in the cache

function memoizedAddTo80() {
  let cache = {};
  // closure
  return function (n) {
    if (n in cache) {
      return cache[n];
    } else {
      console.log(`long time`);
      cache[n] = n + 80;
      return cache[n];
    }
  };
}
const memoized = memoizedAddTo80();
// console.log(`1`, memoized(5));
// console.log(`2`, memoized(5));
// console.log(`3`, memoized(6));
// console.log(`4`, memoized(6));

let calculations = 0;
function fibonacci(n) {
  // exponential runtime O(2^n)
  // base case
  if (n < 2) {
    return n;
  }

  // recursive call/ step
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// dynamic programming (top-down memoization approach)
function fibonacciMaster(n) {
  // linear runtime O(n)
  let cache = {};
  return function fib(n) {
    calculations++;
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}

// "bottom up" approach: start from the simplest solution from the bottom and slowly work your way up higher and higher towards more complex problems.
function fibonacciMaster2(n) {
  let answer = [0, 1];
  for (let i = 2; i <= n; i++) {
    answer.push(answer[i - 2] + answer[i - 1]);
  }
  return answer.pop();
}

const fasterFib = fibonacciMaster();

console.log("DP", fasterFib(10)); // 19 cals
console.log(`We did ` + calculations + ` calculations`);
console.log("DP2", fibonacciMaster2(10));
console.log("Slower", fibonacci(10)); // 177 cals
