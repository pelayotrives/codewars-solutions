// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
//* 35231 => [1,3,2,5,3]
//* 0 => [0]

function digitize(n) {
  let arr = [];
  let str = n.toString();
  for (let i = 0; i < str.length; i++ ) {
    arr.unshift(parseInt(str[i]))
  }
  return arr;
}
