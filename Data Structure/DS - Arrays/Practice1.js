// Create a function that reverses a string:
// strng: "Hi, my name is Johnny"

// Method 1
function reverse1(str = "") {
  if (!str || typeof str !== "string") {
    return null;
  }
  let reservedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    // O(n) => Time complexity
    reservedStr += str[i];
  }
  return reservedStr;
}
function reverse2(str = "") {
  if (!str || typeof str !== "string") {
    return null;
  }
  return str.split("").reverse().join("");
}
const reverse3 = (str = "") => {
  if (!str || typeof str !== "string") {
    return null;
  }
  return [...str].reverse().join("");
};

console.log(reverse1("Hi my name is Johnny"));
console.log(reverse2("Hi"));
console.log(reverse3("H"));
