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

function xO3(str) {
  let splitStr = str.toLowerCase().split("");
  let o = splitStr.map(letter => letter == "o");
  let x = splitStr.map(letter => letter == "x");
  let z = o.filter(state => state == true).length;
  let y = x.filter(state => state == true).length;
  return z === y ? true : false;
}

console.log(xO3("ooxx")); // true
console.log(xO3("xooxx")); // false
console.log(xO3("ooxXm")); // true
console.log(xO3("zpzpzpp")); // true
console.log(xO3("zzoo")); // false
