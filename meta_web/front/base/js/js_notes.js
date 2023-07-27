/*
ASI
  browsers have a feature known as "Automatic Semi-colon Insertion":
    filling in the blanks in case there is a missing ; where there should be one
  adding ; in JS is optional - and somewhat of a stylistic pref
*/

console.log(
  1 + 3, // 4 sum
  "He" + "llo", // Hello concat
  "Hello" + 2, // Hello2 concat str
  ["abc"] + ["def", "ghi"] // ["abcdef,ghi"] concat arr
);

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

// always use defensive prog to avoid pugs and errs


/*
In FP, data and funcs operate on it are clearly separated
There are many more concepts and ideas in FP here are some of the most imp ones:
  - First-class funcs
    func is just another value that we can:
      - pass to other funcs
      - save in a var
      - return from other funcs
    it's perfectly normal to pass a func invocation to another func

  - Higher-order func
    is a func that has either one or both of the following chars:
      - accepts other funcs as args
      - returns funcs when invoked
    There's no "special way" of defining it. It is simply a feature of the lang

  - Pure funcs and side-effects
    pure func returns the exact same result as long as it's given the same vals
    if pure so it shouldn't have side-effects ( instances where func makes changes outside itself)
    side-effects are like:
      - changing var vals outside of the func itself, or even relying on outside vars
      - calling a Browser API (even the console itself!)
      - calling Math.random() - since the val cannot be reliably repeated
*/


/*
scopes
In the ES5 only funcs can build local scope
ES6 introduced a new variety of scope known as block scope (when you build vars with let or const)
var dec with "var" keyword (most lenient):
  - can be used even before dec (will give undef)
  - can be redec
  - is scoped to a func or if they are dec outside the func their scope is global
the behavior of "let" and "const (most strict)" is more strict as their var:
  - cannot de used before dec
  - can be redec
  - is scoped to the block, even within if statements and loops
for diff among "var", "let" & "const" keywords:
  - Vars with "var" can be used even before dec, may be assigned during dec and can be reassigned after dec
  - Vars with "let" may be assigned during dec and can be reassigned after dec
  - Vars with "const" must be assigned during dec and can't be reassigned
*/


const date = new Date();
console.log(date);
// const math = new Math(); // TypeErr: Math isn't a constructor
let apple1 = new String("apple");
let apple2 = "apple"; // string literal, primitive JS val, will always be more performant
console.log(new String("apple") === new String('apple')); // false: each object in JS is unique
console.log(
  "abcd".match(/d/), // null
  "abcd".match(/a/) // ['a', index: 0, input: 'abcd', groups: undefined]
)
/*
OOP allows writing modular, flexible and reusable code
data and funcs work on it are combined inside objs

some built-in objs have constructors, when they serve a particular purpose:
  to allow us to instantiate a specific instance of a given object's constructor
  That obj is perfectly suited for having constructor as each new obj instance have unique data by definition
Other built-in objs don't have constructors and don't need it:
  They're static objs with props and methods can be accessed directly, from the built-in obj itself
  there is no point in building an instance of the built-in that obj to be able to use its func
using constructor functions on all built-in objects is sometimes not the best approach
  especially for obj constructors of primitive types, namely: String, Number, and Boolean
var, being a primitive value, will always be more performant than var, which is an obj
  Instead of using Object constructor, use object literal syntax: {}
  Instead of using String constructor, use string literal syntax: "" or ''
  Instead of using Array constructor, use array literal syntax: []
  Instead of using Function constructor, use function literal syntax: (){} or ()=>{}
  Instead of using RegExp constructor, use pattern literal syntax: /()/
However, when building objs of other built-in types, we can use the constructors
  new Date(); new Error(); new Map(); new Promise(); new Set(); new WeakSet(); new WeakMap();

each object in JS is unique:
  it is not the vals that you pass to the constructor, but rather the memory loc where objs are saved
*/

class Train {
  constructor(color, lightsOn) {
    this.color = color;
    this.lightsOn = lightsOn;
  }
  toggleLights() {
    this.lightsOn = !this.lightsOn;
  }
  lightsStatus() {
    console.log('Lights on?', this.lightsOn);
  }
  getSelf() {
    console.log(this);
  }
  getPrototype() {
    var proto = Object.getPrototypeOf(this);
    console.log(proto);
  }
}

class HighSpeedTrain extends Train {
  constructor(passengers, highSpeedOn, color, lightsOn) {
    super(color, lightsOn);
    this.passengers = passengers;
    this.highSpeedOn = highSpeedOn;
  }
  toggleHighSpeed() {
    this.highSpeedOn = !this.highSpeedOn;
    console.log('High speed status:', this.highSpeedOn);
  }
  toggleLights() {
    super.toggleLights();
    super.lightsStatus();
    console.log('Lights are 100% operational.');
  }
}

var myFirstTrain = new Train('red', false);
console.log(myFirstTrain); // Train {color: 'red', lightsOn: false}

var mySecondTrain = new Train('blue', false);
var myThirdTrain = new Train('blue', false);

var train4 = new Train('red', false);
train4.toggleLights(); // undefined
train4.lightsStatus(); // Lights on? true
train4.getSelf(); // Train {color: 'red', lightsOn: true}
train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}

var train5 = new Train('blue', false);
train5.toggleLights(); // undefined
train5.lightsStatus(); // Lights on? true
train5.getPrototype(); // {constructor: ƒ, toggleLights: ƒ, lightsStatus: ƒ, getSelf: ƒ, getPrototype: ƒ}

var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);
highSpeed1.toggleLights(); // Lights on? true, Lights are 100% operational.
highSpeed1.getPrototype(); // Train {constructor: ƒ, toggleHighSpeed: ƒ, toggleLights: ƒ}
HighSpeedTrain.prototype.__proto__ // {constructor: ƒ, toggleLights: ƒ, lightsStatus: ƒ, getSelf: ƒ, getPrototype: ƒ}
/*
constructor func will be used to build props on the obj instance of the class without "function" keyword
"this" keyword is an alias for obj (ref to future obj instance itself without specifying its name)
The most common use case of "new" is to use with one of the built-in obj types
prototype holds all the props shared by all the obj instances of the class
use built-in "Object.getPrototypeOf()" method, and passing it "this" obj (obj instance is invoked)
When the class syntax is used:
  results in only shared methods being stored on the prototype
  constructor() func sets up the mechanism for saving instance-specific vals at the time of obj instantiation
To inherit from one class to a new sub-class, JS provides the "extends" keyword
"super" keyword is used to specify what prop gets inherited from the super-class in the sub-class
  pass in the inherited props that come from the super class
  automatically inherit all methods exist on the super class prototype
  If not used, runnig code whould produce err:
    Uncaught ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
*/

class StationaryBike {
  constructor(position, gears) {
    this.position = position
    this.gears = gears
  }
}

class Treadmill {
  constructor(position, modes) {
    this.position = position
    this.modes = modes
  }
}

class Gym {
  constructor(openHrs, stationaryBikePos, treadmillPos) {
    this.openHrs = openHrs
    this.stationaryBike = new StationaryBike(stationaryBikePos, 8)
    this.treadmill = new Treadmill(treadmillPos, 5)
  }
}
// using class instance as another class' constructor's prop

var boxingGym = new Gym("7-22", "right corner", "left corner")
console.log(boxingGym.openHrs) // 7-22
console.log(boxingGym.stationaryBike) // StationaryBike { position: 'right corner', gears: 8 }
console.log(boxingGym.treadmill) // Treadmill { position: 'left corner', modes: 5 }

class WithDefaultParams {
  constructor(num1 = 1, num2 = 2, num3 = 3, string1 = "Result:", bool1 = true) {
      this.num1 = num1;
      this.num2 = num2;
      this.num3 = num3;
      this.string1 = string1;
      this.bool1 = bool1;
  }
  calculate() {
      if(this.bool1) {
          console.log(this.string1, this.num1 + this.num2 + this.num3);
          return;
      }
      return "The value of bool1 is incorrect"
  }
}
var better = new WithDefaultParams();
better.calculate(); // Result: 6
// there is a ES6 feature allows to set a default param inside a func definition first


const fruits = ['kiwi','mango','apple','pear'];

function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);

fruits.forEach((fruit, index) => {
  console.log(`${index}. ${fruit}`)
});


/*
data structures
arrs are ordered collections of vals
sets are collections of unique vals (pass it an arr to quickly filter it for unique members)
maps are made up of iterable key value pairs
objs are unordered collections of key-val pairs, but not iterable
Other data structures in JS:
  Besides the built-in data structs in JS, it's possible to build non-native, custom data structs
  Queues, Trees, Graphs, Linked lists (singly-linked and doubly-linked)

choosing a proper data struct affects code as it comes with some built-in func makes it 
  easier to perform certain tasks
  makes it harder or even impossible without converting code to a proper data structure

sometimes you don't pick the data struct
Perhaps that data comes in from a third-party data provider
all you can do is code your program so that it consumes it

forEach() method
  for more compact code
  accepts func that will work on each arr item
    first param is the current array item itself
    second (optional) param is the index
  but perhaps somewhat harder to read. To increase readability, sometimes arrow funcs are used

filter() method
  filters arrs based on a specific test and return only passed

map() method
  map each arr item over to another arr's item based on states inside the func passed-in to map as a param

To make a new Map
  use the Map constructor
  To add a key-value pair, use set(key, value) method
  To get a specific val, use get(key) method
*/

/*
spread operator "..." can be used to:
  Convert a str to arr
  Copy either obj or arr into a sep obj  (only performs a shallow copy of the src arr or obj)
  Add new members to arrs without using the push() method
*/

/*
how to take input from users?
the quickest and easiest way to capture input on website by built-in method prompt()
  pass it str msg and assign the method to var
doing it this way is not the most efficient approach, especially in more complex scenarios use form instead
  code script which will take an input from an HTML form input field
  listen for change events and assign val of input field to var
*/


const aJSON = '{"greating": "Hello!"}'
console.log(JSON.parse(aJSON)); // converts it to plain JS obj
const aPlainJS = {greating: "Hi!"}
console.log(JSON.stringify(aPlainJS)); // converts it to JSON
/*
JSON
Before JSON, the most common data interchange file format was XML:
  due to XML's syntax, it required more chars to describe data that was sent
  since it was a specific stand-alone lang, it wasn't as easily inter-operable with JS

2 major reasons JSON format is dominant data interchange format:
  First, it's very lightweight, with syntax very similar to "a stringified JavaScript object"
  Second, it's easier to handle in JS code (JSON is just JS)

JSON is str, but it must be a properly-formatted string
  JSON is a subset of JS (all JSON code is JS, but not all JS code is JSON)
  If JSON str is not properly formatted, JS would not be able to parse it into a JS obj
  Only a subset of vals in JS can be properly stringified to JSON and parsed from a JS obj into a JSON str
*/


/*
Node.js can run in multiple settings
for ex, on the cmd, in desktop app, or on the back-end of web app (on a server)
it's a completely sep, standalone env without ties to the JS in the browser
*/


function toBeTested() {
  let isSuccessful = true;
  return isSuccessful;
}
module.exports = toBeTested;
/*
Testing is the act of confirming that it works as outlined in the SW's reqs ensures 3 things:
  Conciseness, Clarity, repeatability

There are many aspects of software testing:
  for UX designer
    making sure that the website looks and behaves as expected
  for PM on a SW proj
    a specific piece of software works well with other parts of your system
  for SW eng
    writing code that
      is bug free
      doesn't break the existing func
      satisfies the reqs as set out in given task based on motivations

there are different kinds of testing rep 3 level pyramid:
  e2e tests
    finally at the top
    the slowest and most expensive tests to run and take the most time to set up and run
    make sure that the entire product (finished SW prod) behaves as it should
      tries to imitate how a user might interact with your app
      you need to open your web app in browser and then test it by interacting with the page the same way as user
      clicking on the log in button or going through the process of adding an item to the shopping cart ...
    The person testing the app doesn't have to be a dev
    testing frameworks available on the market:
      WebdriverJS - Protractor - Cypress

  integration tests
    in the center of the pyramid
    tests are faster and cheaper than e2e tests but not as fast or as cheap as unit testing (av speed and expense)
    testing how sep parts of your sys interact with other parts
    testing SWs:
      react testing lib - enzyme

  unit tests
    first at the base of the pyramid
    sep, self contained, easy to write and have the highest speed and the lowest cost
    the process of sep testing the smallest units of your src code in isolation (func or method)
    JS doesn't have built-in objs or methods that would allow for tests to be written
    many diff libs have been built to tackle the issue of testing
    Jasmine, Mocha, Karma, and qUnit, Jest

Jest
  allows you to test plain JS code, React, Babel, TypeScript, Node, Angular, Vue, and various other frameworks
  come with 3 main testing feats:
    code coverage
      there are expectations to be tested for each line of code
      is a measure of what percentage of my code is covered by tests
      80% code coverage means only one-fifth of my entire code base is not covered by tests
      even 100% code coverage doesn't mean every conceivable expectation is tested
      is a handy tool to gauge the amount of my code base that's included in tests
        The higher the code coverage, the lower the chance of having unidentified bugs
        the higher the percentage of code coverage, the lower the amount of time required to write new tests
          depends on whether there are incomplete SW reqs pending or going to receive more reqs in the future

    mocking
      The needed data comes from the mock rather than from the backend
      make sure that your unit testing is stand-alone
        sep the code that you are testing from its related deps
      pretend that users are already there if the backend hasn't been built yet
      test the front-end func of your web app as if it came back from server (when in fact it came from client)
      helpful as web apps are built by some devs work on the back-end and others on front-end
        so the front-end devs can finish their site of the new feat independently (avoid bottlenecks)
      devs can use mocking to ship feats faster
        Some libs, such as sign-on, focus specifically on mocking
        the great thing about Jest is you use its mock funcs by employing it without any additional i
        easy to test async code in Jest
          There are no difficult setups
          tests are relatively easy to code even for newcomers
    
    snapshot testing
      is used by devs to verify that there are no regressions in the DOM after some changes in the code base

TDD
  write as little code as possible to make the test pass for this test to pass
  This process is usually (Red - Green - Refactor)
    read the reqs for the SW that you are writing. (reqs are passed to you by the PM)
    Next you write a failing test
    then you update your source code, so it resolves the requirement
    After that you run a test that passes
    Finally, you re factor your implementation
  
    Red represents the failing test
    Green represents the passing test after you make updates to the source code
    Refactor represents the final tweaks to the code that don't change implementation details
      which can always be confirmed by running another subseq test when implemented correctly
    
    advs:
      allows for automated testing in any platform projs grow bigger over time and become complex
      making sure that all tests are passing is strong signal that current and prev reqs 
        for this piece of your app have been delivered successfully and that nothing is breaking
      minimizing regressions that is accidental bugs introduced to old code by coding a new req
      you also have proof that your new implementation is not breaking other parts of the app
      automate these tests easily and keep verifying again and again that the system works as expected
      test your implementations with various inputs
      tests become a specific kind of documentation for the new members of your team
*/

const var1 = (param1, param2) => {
  state1;
  state2;
}
const var2 = param1 => {
  state1;
  state2;
}
const var3 = param1 => state1; // (without "return" keyword)
const var4 = _ => state1; // (if no params)
const cond = Boolean("") ? true : false;
/*
ES6
  arrow func
  (params) => {states}
  
  ternary op
  cond ? T : F

  spread op
  ...

  
*/

// imp notes
var items = [];
console.log(document);
/*
items var above data type is arr not obj

returns entire web page in the browser's memory, as a JS obj 
not body tag of the web page in the browser's memory, as a JS obj
nor HTML code of the downloaded webpage, as a JS str
*/