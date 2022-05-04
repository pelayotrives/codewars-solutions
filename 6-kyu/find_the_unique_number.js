//! There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

// * It’s guaranteed that array contains at least 3 numbers.
// * The tests contain some very huge arrays, so think about performance.

function findUniq(arr) {
  if (arr[0] === arr[1]) {
    for (let i = 2; i < arr.length; i++) {
      if (arr[0] !== arr[i]) {
        return arr[i];
      }
    }
  } else {
    for (let i = 2; i < arr.length; i++) {
      if (arr[0] === arr[i]) {
        return arr[1];
      } else if (arr[1] === arr[i]) {
        return arr[0];
      }
    }
  }
}
