// Build a function that returns an array of integers from n to 1 where n>0.
// Example:
// * n=5 --> [5,4,3,2,1]

function reverseSeq (n) {
  let arr=[];
  for (let i=0; i<n; i++) {
    arr.push(n-i)
  }
  return arr;
};