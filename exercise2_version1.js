//============================exercises==28-01-20===================================================

// XO Create a function that takes a string, checks if it has the same number of ’x’s and ’o’s and returns either true or false.
// Notes:
// Return a boolean value (true or false).
// The string can contain any character.
// When neither an x nor an o is in the string, return true.
// Examples:
// XO(“ooxx”) ➞ true
// XO(“xooxx”) ➞ false
// XO(“ooxXm”) ➞ true (case insensitive)
// XO(“zpzpzpp”) ➞ true (returns true if no x and o)
// XO(“zzoo”) ➞ false

function xO(str) {
  let counterO = 0;
  let counterX = 0;
  let counter = 0;
  let splitStr = str.toLowerCase().split("");

  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr[i] == "o") {
      counterO++;
    } else if (splitStr[i] === "x") {
      counterX++;
    } else {
      counter++;
    }
  }

  if (counterX === counterO) {
    return true;
  } else {
    return false;
  }
}

console.log(xO("ooxx"));
console.log(xO("xooxx"));
console.log(xO("ooxXm"));
console.log(xO("zpzpzpp"));
console.log(xO("zzoo"));
