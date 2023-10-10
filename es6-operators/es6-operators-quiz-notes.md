# es6-operators-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  '&&' is an operater for a set of boolean operands that returns the first falsy operand or the value of the last operand if they are all true. '||' returns its first truthy value. They can be used as comparison operators and have conditions in the operator.

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  The operand is converted to a boolean if one of the conversion is found to be false in &&. in || the left side of the expression is evaluated if it is truthy.

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  nullish returns the right hand side operand if the left hand side is null or undefined.

- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  The ternary operator takes in 3 operands. The left side of the colon is executed if the condition is truthy or it executes the expression if the right side is falsy.

- What is the `?.` (optional chaining) operator? When would you use it?
  Optional chaining accesses an objects property or calls a function. if the object is undefined or null, the expression short circuits and evaluates to null.

- What is `...` (spread) syntax? How do you use it with arrays and objects?
  The spread syntax copies an array or object with all elements into an a new array or object.

- What data types can be spread into an array? Into an object?

- How does spread syntax differ from rest syntax?

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
