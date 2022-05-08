//! Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  let containerX = 0;
  let containerO = 0;
  let uppercased = str.toUpperCase();
  
  for (let i = 0; i < str.length; i++) {
    if (uppercased[i] === "X") {
      containerX += 1;
    }
    else if (uppercased[i] === "O") {
      containerO += 1;
    }
  }
  
  if (containerX === containerO) {
    return true;
  } else {
    return false;
  }
}