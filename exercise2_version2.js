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
//.....................................version 2......................................................

function xO2(str) {
  let splitStr = str.toLowerCase().split("");
  let o = splitStr.filter(letter => letter == "o").length;
  let x = splitStr.filter(letter => letter == "x").length;

  if (x === o) {
    return true;
  } else {
    return false;
  }
}

console.log(xO2("ooxx")); // true
console.log(xO2("xooxx")); // false
console.log(xO2("ooxXm")); // true
console.log(xO2("zpzpzpp")); // true
console.log(xO2("zzoo")); // false

// resources: https://stackoverflow.com/questions/6120931/how-to-count-the-number-of-certain-element-in-an-array
