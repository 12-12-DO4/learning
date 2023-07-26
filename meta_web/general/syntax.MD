|symbol|name|
|:-:|:-|
|`+`|positive sign (unary operator, plus)|
|`-`|negative sign (unary operator, minus)|
|`*`|asterisk (wildcard)|
|`/`|fwdslach|
|`\`|backslach|
|`^`|circumflex sym|
|`~`|tilde sym (bitwise nor)|
|`$`|dolar sign|
|`=`|eq (assignment op)|
|`:`|colon|
|`;`|semicolon|
|`#`|hash symbol (hex, comment)|
|`!`|exclamation mark (not)|
|`?`|question mark|
|`.`|dot|
|`•`|bullet|
|`,`|comma|
|`%`|percent (modulus)|
|`&`|ampersand (bitwise and)|
|`\|`|vertical bar (pipeline, bitwise or)
|`@`|at|
|`-`|hyphen or dash|
|`_`|underscore|
|`>`|greater than|
|`<`|less than|
|`>=`|greater than or eq|
|`<=`|less than or eq|
|`!=`|not eq|
|`++`|plus plus (inc by one)|
|`--`|minus minus (dec by one)|
|`''`|single quotes (str literal)|
|`""`|single quotes (str literal)|
|<code>``</code>|backticks (temp literal)|
|`()`|parentheses (tuple literal)|
|`[]`|square prackets (arr literal)|
|`{}`|curly braces (obj and set literal, JSX expression delimiters)|
|`<>`|angle prackets (opening closing tags, not eq)|
|`//`|double fwdslashes (comment, dev, RegExp literal)|
|`**`|asterisk asterisk (pow, inside all dirs)|
|`&&`|ampersand ampersand (logical and)|
|`\|\|`|pipe pipe (logical or)|
|`??`|nullish coalescing op|
|`==`|eqeq (ordinary comparison eq)|
|`===`|eqeqeq (strict eq)|
|`!==`|noteqeq (strict not eq)|
|`...`|ellipsis (spread, rest op)|
|`${}`|variable interpolation|
|`''''''`|docstring|


``` CSS
selector-in-kebab-case {
  prop-in-kebab-case: value;
}
```
``` JS
objInCamelCase = {
  1: value, // key as a number
  key: value, // one word str key can be writen without quotes
  "a str key": value, // multi-word str key must be in quotes
}

// json
{
  "key in any form": value,
}

class ClassInPascalCase {
  keyInCamelCase = value;
}
```


```JS
for(iterator dec; breaking cond; step) {
  state1;
  state2;
}

for(iterator in iterable) {
  state1;
  state2;
}

for(interator of iterable) {
  state1;
  state2;
}

iterable.forEach(iterator => {
  state1;
  state2;
})
iterable.forEach(function(iterator) {
  state1;
  state2;
})
```

