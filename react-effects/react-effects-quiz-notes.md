# react-effects-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When is a component "mounted" to the DOM?
  when the component is successfully inserted in to the dom.

- What is a React Effect?
  react effects are side effecs that happen when a componenet is rendered or updated. u

- When should you use an Effect and when should you not use an Effect?
  effects should be used to perform tasks that are not directly related to rendering a component.

- When do Effects run?
  code that should run after the component has rendered or when specific dependencies have changed.

- What function is used to declare an Effect?
  useEffect

- What are Effect dependencies and how do you declare them?
  dependencies are the second arguments in an array at the end of the useEffect that controls when the effect runs.

- Why would you want to clean up from an Effect?
  to avoid memory leaks, optimize applications, and prevent unexpected erros.

- How do you clean up from an Effect?
  return a cleanup function in the useEffect hook.

- When does the cleanup function run?
  it runs when the component unmounts and before the component runs again.

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
