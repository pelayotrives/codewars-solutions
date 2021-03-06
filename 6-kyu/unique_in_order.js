// Implement the function uniqueInOrder which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

//? Example:
//? uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
//? uniqueInOrder('ABBCcAD') == ['A', 'B', 'C', 'c', 'A', 'D']
//? uniqueInOrder([1,2,2,3,3]) == [1,2,3]

const uniqueInOrder = (iterable) => {
  let newArr = [];
  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i + 1]) {
      newArr.push(iterable[i]);
    }
  }
  return newArr;
};
