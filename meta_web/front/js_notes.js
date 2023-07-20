/*
ASI
  browsers have a feature known as "Automatic Semi-colon Insertion":
    filling in the blanks in case there is a missing ; where there should be one
  adding ; in JS is optional - and somewhat of a stylistic pref
*/

console.log("%cHello, World", "color: blue; font-size: 40px");
// styling the logged text won't work at VSCode output window but it works at the brower's console

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