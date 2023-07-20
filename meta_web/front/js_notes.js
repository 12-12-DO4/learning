/*
ASI
  browsers have a feature known as "Automatic Semi-colon Insertion":
    filling in the blanks in case there is a missing ; where there should be one
  adding ; in JS is optional - and somewhat of a stylistic pref
*/

console.log("%cHello, World", "color: blue; font-size: 40px");
// styling the logged text won't work at VSCode output window but it works at the brower's console

var emptyVar;
console.log(
  typeof(function(){}), typeof(function(){console.log("won't be logged")}), 
  typeof([]), typeof({}), typeof(null), typeof(""),
  typeof(undefined), typeof(console.log("first")), typeof(emptyVar)
)
var emptyVar = "become now str but won't be changed in the prev console logging";
/*
Datatypes:
  - string
  - number (integer and decimal)
  - boolean
  - null (absence of val)
  - undefined (var not assigned val)
  - bigInt (for wide range of nums)
  - symbol (unique identifiers as pointers in c++)
*/

// ** is for power .. 2**3=8
// There's one thing that strs can't do and that is break onto the next line
// '' or "" to make a string literal and `` creates a template literal syntax

// arrs are objs, with their own built-in props and methods
// Objs can hold both primitive and complex vals, just as arrs
// thing that [] notation has but is not available in . notation (It can evaluate expressions)

console.log(
  Math.PI, 
  Math.E, 
  Math.LN2, 
  Math.cbrt(8), // cubic root
  Math.log(Math.E) /* It's ln() not log()! */, Math.log10(100), Math.log2(0.5)
);

console.log(
  "Hello".indexOf("l"), // only first
  "hello".match('ll'), // returns arr if matches and null obj if not match
  (10).toString(2) /* '1010' Base 2 (binary) */, (10).toString(8), // 12 Base 8 (octal)
  "con".concat("cate").concat("nate"), // concatenate mulltiple times
  "Hello".toUpperCase(), "HeLLo".toLowerCase(), "hello"[0].toUpperCase(), "Hello".charAt(0).toLowerCase()
);

/*
most common errors in JS:
  - ReferenceError
      console.log(notExistVar); // Uncaught ReferenceError: notExistVar is not defined
  - SyntaxError
      var a "there's no assignment operator here"; // Uncaught SyntaxError: Unexpected string
      // interesting caveat regarding the SyntaxError in JS (can't be caught using the try-catch block)
      // If you mis-type some code in your JS (syntaxErr not typeErr)
  - TypeError
      "hello".pop() // Uncaught TypeError: "hello".pop is not a function
  - RangeError
      (10).toString(100); // Uncaught RangeError: toString() radix argument must be between 2 and 36
      Number(5).toPrecision(300) // Uncaught RangeError: toPrecision() argument must be between 1 and 100
some other errors in JS:
  - AggregateError
  - Error
  - InternalError
  - URIError
*/

try {
  throw new ReferenceError();
  console.log("never excuted");
} catch(err) {
  console.log("forces try block to skip lines after it and go to catch block instead");
  console.log("Error is: ", err);
}
console.log("but outside try catch blocks is excuted")
// try catch stat can keep a program running even when it encounters an err