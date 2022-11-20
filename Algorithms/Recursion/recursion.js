// 1. Identify base case
// 2. Identify the recursive case
// 3. Get closer and closer and return when needed. Usually have 2 returns.

const factorial = function (num) {
  // O(n)
  if (typeof num !== "number") {
    throw new Error(`Input must be number`);
  }
  if (num === 2) {
    // save extra recursive call on factorial of 1 and 0
    return 2;
  }
  return num * factorial(num - 1);
};
const factorialIterative = function (num) {
  // O(n)
  let answer = 1;
  if (num === 2) {
    answer = 2;
  }
  for (let i = 2; i <= num; i++) {
    answer *= i;
  }
  return answer;
};

// console.log(factorial(5));
// console.log(factorialIterative(5));

// fibonacci [0, 1, 1, 2, 3, 5, 8, 13, 21...] => N=5 => 2+3
const fibonacci = function (n) {
  // O(2^N) => increase time complexity
  // base case
  if (n < 2) {
    // n = 0 => return 0; n = 1 return 1
    return n;
  }
  // currentNum = firstPrevNum + secondPrevNum
  return fibonacci(n - 1) + fibonacci(n - 2);
};

// fib(8) = fib(7) + fib(6) =...
console.log(fibonacci(8));

const fibonacciIterative = function (n) {
  // O(n)
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
};
console.log(fibonacciIterative(8));

// recursion <=> iterative
