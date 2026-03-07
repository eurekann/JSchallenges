// Challenge 5: Remove Duplicate Elements
// Write a function that takes an array and returns a new array with duplicate elements
// removed.

function removeDuplicates(array) {

  return [...new Set(array)];
}

  

console.log(removeDuplicates([1, 2, 2, 3, 3, 4])); // [1, 2, 3, 4]
console.log(removeDuplicates(["a", "a", "b", "b", "c"])); // ["a", "b", "c"]
console.log(removeDuplicates(["a", "d", "b", "d", "c"]));
