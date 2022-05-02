// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
// Note: input will never be an empty string

function fakeBin(x) {
  let emptyStr = "";

  for (let i = 0; i < x.length; i++) {
    if (x[i] >= "5") {
      emptyStr += "1";
    } else {
      emptyStr += "0";
    }
  }

  return emptyStr;
}
