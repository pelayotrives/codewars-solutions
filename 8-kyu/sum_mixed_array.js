// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.

function sumMix(x) {
  let emptyStr = 0;
  let emptyNum = 0;
  for (let i = 0; i < x.length; i++) {
    if (typeof x[i] !== "number") {
      emptyStr += Number(x[i]);
    } else {
      emptyNum += x[i];
    }
  }
  return emptyNum + emptyStr;
}
