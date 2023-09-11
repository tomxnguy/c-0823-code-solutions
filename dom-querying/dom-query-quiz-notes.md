# dom-query-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  to understand the code and how it works. also useful for looking for errors and debugging.

- What is a "model"?
  a model explains how a program will be executed

- Which "document" is being referred to in the phrase Document Object Model?
  the webpage that can be displace in the browser window or html souce. in DOM it can be manipulated

- What is the word "object" referring to in the phrase Document Object Model?
  properties, methods, and events that are manipulated for creating web pages are organized into objects. languages like javascript can be used to do these modifications.

- What is a DOM Tree?
  in DOM, every html tag is an object. child tags inside of those tags are also objects. and the texts inside those tags are objects as well. these tags are element nodes that form tree structure where <html> is the root and the head and body are the children.

- Give two examples of `document` methods that retrieve a single element from the DOM.
  document.getElementbyID(id)
  document.querySelector(csSelector)

- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  document.querySelectorAll()

- Why might you want to assign the return value of a DOM query to a variable?
  to return the first element that matches the css selector in the document.

- What `console` method allows you to inspect the properties of a DOM element object?
  console.dir()

- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  so that the browser can parse all elements of the HTML page before the JavaScript ccode can access them.

- What does `document.querySelector()` take as its argument and what does it return?
  it takes a string that matches the css selector and returns an object representing the first element in the document that matches the css selector.

- What does `document.querySelectorAll()` take as its argument and what does it return?
  it takes a string with one or more selectors that matches it and returns a NodeList with one Element Object for each elemene that matches at least one of the selectors. or and Empty Nodelist if there are no matches.

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
