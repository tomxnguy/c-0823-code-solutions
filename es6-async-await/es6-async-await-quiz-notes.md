# es6-async-await-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `async` and `await` keywords used for?
  await is to indicate that javascript runtime should wait until asynchronous function completes. async is added at the front of a function to declare that a function will be asynchronous and that the await keyword will be in the function body to allow promise-based behavior.
- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  await/async are writted into synchronous code to make it asynchronous. await/async is more readable and maintainable. then/catch are chained after a function and takes a callback function as its arguments to return a Promise.

- When do you use `async`?
  async is used when defining a function to show that it will return a promise.

- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  await is only used inside of async functions. sometimes when await is omitted when a promised is directly returned from an async function. if we await a synchronous function, it it will return the value if it is not a promise.

- How do you handle errors with `await`?
  the rejected value is thrown and returned with a throw error.

- What do `try`, `catch` and `throw` do? When do you use them?
  statements used for handling errors. they are used to execute code when an exception is thrown. t

- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  the code will run but nothing will happen when you call resolve. the promised rejection will show the promise and not the resolve of the promise.

- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  async/await because it is esier to read write.

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
