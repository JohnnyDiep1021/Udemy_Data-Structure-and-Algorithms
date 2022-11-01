const nemo = ["nemo"];
const large = new Array(100).fill("nemo");
function findNemo(arr) {
  // get the performance time of the func
  let t0 = performance.now();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "nemo") {
      console.log(`found NEMO!`);
      break;
    }
  }
  let t1 = performance.now();
  console.log(`Call to find Nemo func took ${t1 - t0} ms`);
}

findNemo(large);
// O(n) ==> Linear Time - n: the size of input -> how many operations will be done on every single element
// O(1) --> constant time
const boxes = [0, 1, 2, 3, 4, 5];

function logFirstTwoBoxes(boxes) {
  console.log(boxes[0]); // O(1)
  console.log(boxes[1]); // O(1)
}
logFirstTwoBoxes(boxes); // O(2) => O(1)

// What is the Big O of the below function? (Hint, you may want to go line by line)
// input can be anything
function funChallenge(input) {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  for (let i = 0; i < input.length; i++) {
    // O(n)
    anotherFunction(); // O(n)
    let stranger = true; // O(n)
    a++; // O(n)
  }
  return a; // O(1)
}
// SOLUTION: Big O(3 + 4n) => O(n)

// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
  let a = 5; // O(1)
  let b = 10; // O(1)
  let c = 50; // O(1)
  for (let i = 0; i < input; i++) {
    let x = i + 1; // O(n)
    let y = i + 2; // O(n)
    let z = i + 3; // O(n)
  }
  for (let j = 0; j < input; j++) {
    let p = j * 2; // O(n)
    let q = j * 2; // O(n)
  }
  let whoAmI = "I don't know"; // O(1)
}
// SOlUTION: Big(4 + 5n) = Big O(n)

function compressBoxesTwice(boxes, boxes2) {
  boxes.forEach((box) => {
    console.log(box);
  });
  boxes2.forEach((box) => {
    console.log(box);
  });
}
// Big O(a + b) RULE 3: different term for inputs

function compressBoxesTwice(boxes, boxes2) {
  boxes.forEach((box1) => {
    boxes2.forEach((box2) => {
      console.log(box1, box2);
    });
  });
}
// Nested loop => Big O(a * b) or O(n ^ 2)
// 3 nested loop => O (n ^ 3)
// O(n/2) => O(n)

function boo(n) {
  for (let i = 0; i < n.length; i++) {
    console.log("booo!");
  }
}
boo([1, 2, 3, 4, 5]); // space complexity O(1)

function arrOfHiNTimes(n) {
  const hiArr = [];
  for (let i = 0; i < n; i++) {
    hiArr[i] = "hi";
  }
  return hiArr;
}
console.log(arrOfHiNTimes(5)); // space complexity O(n), add data structure, allocate additional memory
