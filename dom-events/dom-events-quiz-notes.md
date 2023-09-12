# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  Debugging purposes and testing.

- What is the purpose of events and event handling?
  to notify code of changes that may affect code exection. event handling is so users have a reference to what happen on our page

- Are all possible parameters required to use a JavaScript method or function?
  No

- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  addEventListener()

- What is a callback function?
  A function passed into another function as an argument

- What object is passed into an event listener callback when the event fires?
  Event listener

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  Event.target is the element that triggered the event. the event listener will tell us in the console.

- What is the difference between these two snippets of code?
  `js
    element.addEventListener('click', handleClick)
    `
  `js
    element.addEventListener('click', handleClick())
    `
  the first is passing the reference of the handleClick function when event occurs. The second one is calling the function

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
