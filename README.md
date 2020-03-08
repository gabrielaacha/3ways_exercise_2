# 3ways_exercise_2

![screenshot code] (/images/screenshot_code.png)

* first turn the string into lower case and split into array
 
``` let splitStr = str.toLowerCase().split("");```

* look for the letter "o" using the math method map

``` let o = splitStr.map(letter => letter == "o");```

* look for the letter "x" using the math method map

``` let x = splitStr.map(letter => letter == "x");```

* create a variable to count the amount of "o" wizh .length

``` let z = o.filter(state => state == true).length;```

* create a variable to count the amount of "x" wizh .length

``` let y = x.filter(state => state == true).length;```

* boolean if the variable z returns same amount than the variable z return true, otherwise false 

``` return z === y ? true : false; ```

* inputs and expected results:

```console.log(xO3("ooxx")); // true
console.log(xO3("xooxx")); // false
console.log(xO3("ooxXm")); // true
console.log(xO3("zpzpzpp")); // true
console.log(xO3("zzoo")); // false```
