# es6-arrow-functions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the syntax for defining an arrow function?
  parentheses (parameters) with arrow followed by expression.

- When an arrow function's body is not surrounded in curly braces (_concise body syntax_), what changes in its functionality?
  if curly braces are omitted, the arrow function directly returns an expression.

- When using _concise body syntax_, how do you return an object literal?
  It needs to be wrapped in parentheses.

- In the expression

  ```js
  foo(() => 42);
  ```

  - Identify the arrow function
    function()

  - How many arguments does the arrow function take?
    0

  - What value does it return?
    no value is returned

  - How many arguments are passed to the function `foo`?
    0

  - What type of argument is passed to the function `foo`?
    no arguments. it is anonymous.

- In the expression

  ```js
  bar((y) => {
    console.log(`4y = ${4 * y}`);
  });
  ```

  - Identify the arrow function
    function(y)

  - How many arguments does the arrow function take?
    1

  - What value does it return?
    y

  - How many arguments are passed to the function `bar`?
    1

  - What type of argument is passed to the function `bar`?
    a variable y

  - When does the arrow function's code get executed?
    When the expression finishes evaluating in the console.log.

- How does the value of `this` differ between standard functions and arrow functions?
  In standard functions 'this' is defined by calling the object. In arrow functions it is taken from a lexical scope.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
