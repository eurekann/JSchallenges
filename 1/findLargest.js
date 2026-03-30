function findLargest(arr) {
  let largest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

console.log(findLargest([1, 5, 3, 9, 2])); // → 9
console.log(findLargest([10, 20, 30])); // → 30
console.log(findLargest([7, 3, 1, 4])); // → 7
