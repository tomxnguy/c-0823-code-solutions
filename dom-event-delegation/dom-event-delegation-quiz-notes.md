# dom-event-delegation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
  a propert that is a reference to the object of which event was dispatched. it can be used to implement event delegation. whatever element that was

- Why is it possible to listen for events on one element that actually happen its descendent elements?
  due to event bubbling

- What DOM element property tells you what type of element it is?
  tagName property

- What does the `element.closest()` method take as its argument and what does it return?
  it takes css selector as its arguments and returns the closes ancestor element or itself that matches the selector.

- How can you remove an element from the DOM?
  remove()

- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
  by creating a new function that will append new elements to the DOM.

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
