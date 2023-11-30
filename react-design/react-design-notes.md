# react-design-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the phases in the React design process?

1. identify pieces that would make good component. implement static versions. verify that it reproduces mockup.
2. determine state that is help in components and where state should live.
3. determine events that modify state, which child componenets they originate in an how parent components should respond to them.

- How does data flow in React?
  Unidirection data flow. data comes from parents as props. data can only transfer from parent to child. child components cannot update or modify data.

- How can children components modify state in their parents?
  by creating a state handler function in parent component and passi t as prop of the child component.

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
