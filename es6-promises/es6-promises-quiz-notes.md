# es6-promises-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the Event Queue model of Promises?
  In the event queue model, during the event loop, it will try to run the tasks of all synchronous functions. Any asynchronous functinos are added to the queue so when the synchronous functions are done, the queue functions are handles.
- What are the three states a Promise can be in?
  Pending, fulfilled, and rejected
- How do you handle the fulfillment of a Promise?
  A corresponding handler will be attached and the 'then' handler will be called. Once it is settled, it will be considered fulfilled and will be locked in.
- How do you handle the rejection of a Promise?
  The corresponding 'catch' handler will be called. catch has no called back function.

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
