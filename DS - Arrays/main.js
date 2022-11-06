const strings = ["a", "b", "c", "d"];
// 4*4 = 16 bytes of storage
// 4 shelves for 1 var => with 4 var, then 4 * 4 = 16

// push
strings.push("e"); // O(1)

// pop
strings.pop();
strings.pop(); // O(1)

// unshift
strings.unshift("x"); // O(n)

// splice
strings.splice(2, 0, "alien"); // O(n/2) => O(n)

console.log(strings);
