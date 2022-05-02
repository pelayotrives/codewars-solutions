// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

function findShort(s) {
  let splitStr = "";
  let emptyArr = [];

  for (let i = 0; i < s.length; i++) {
    splitStr = s.split(" ");
  }

  for (let element of splitStr) {
    emptyArr.push(element.length);
  }

  return Math.min(...emptyArr);
}
