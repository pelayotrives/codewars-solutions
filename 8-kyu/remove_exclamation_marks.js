// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
  let newStr = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "!") newStr = newStr + s[i];
  }
  return newStr;
}
