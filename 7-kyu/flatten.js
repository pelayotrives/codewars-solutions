// Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

// flatten([1,2,3]) // => [1,2,3]
// flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
// flatten([[[1,2,3]]]) // => [[1,2,3]]

const flatten = function (array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray = newArray.concat(array[i])
  }
  return newArray;
}
