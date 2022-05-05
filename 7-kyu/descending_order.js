//! Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321

function descendingOrder(n) {
  let stringed = n.toString();
  let arr = [];
  let container;

  if (n >= 0) {
    for (let i = 0; i < stringed.length; i++) {
      arr.push(stringed[i]);
    }
    container = Number(
      arr
        .sort(function compare(a, b) {
          return b - a;
        })
        .join("")
    );
  }
  return container;
}
