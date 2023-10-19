# express-hello-world-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is Express middleware?
  middleware are functions that have access to request(req) and response(res) objects. the next middleware function is a called next which is the next function that we want activated.

- What is Express middleware useful for?
  it can execute code/ make changes to request and response objects, end request-response cycle, and call next middleware function in a stack.

- How do you mount a middleware with an Express application?
  by loading th eapplication with a mount path. app.use will apply to every ath that starts with that path that we entered.

- Which objects does an Express application pass to your middleware to manage the request/response lifecycle of the server?
  request (req) and response (res)

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
