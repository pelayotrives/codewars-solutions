// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.

function find_average(array) {
  let emptyVar = 0;
  let average = 0;
  for (let i = 0; i < array.length; i++) {
    emptyVar += array[i];
    average = emptyVar / array.length;
  }
  return average;
}
