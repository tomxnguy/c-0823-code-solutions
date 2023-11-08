# react-context-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the purpose of React "context"?

context lets a parent component provide data to the tree below it.

- What values can be stored in context?
  any values can be stored in context including object and functions.

- How do you create context and make it available to the components?
  import createContext as the default value and pass it a value. then you export it so it can be used in another file.

- How do you access the context values?
  import usecontext hook from react and the context and that we created.

- When would you use context? (in addition to the best answer: "rarely")
  user authentication to store users authentication status and pass doen compoentnts. theming. accessing data from external sources.

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
