// Challenge 3: Reverse Array
// Write a function that takes an array and returns a new array with the elements in
// reverse order.

function reverseArray(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(array[array.length-1-i]);
  }
  return result;
}

console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
console.log(reverseArray(["a", "b", "c", "d"])); // ["d", "c", "b", "a"]
