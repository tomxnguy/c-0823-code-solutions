# react-state-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are _hooks_ in React?
hooks are a way to use react features without having to write classes. hooks let you are functions that let you 'hook' into react state and features from components/

- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
hook functions starting with 'use' can only be called at top level of components.
you cant call hooks inside of conditions, loops, or nested functions.

- What is the purpose of state in React?
States are a components memory. it is a way that components remember something in react.;

- Why can't we just maintain state in a local variable?
local variables dont persist between renders. when react renders a component again, it starts from the beginning and does not conside changes from local variables.

- What two actions happen when you call a `state setter` function?
The 'usestate' hook updates the variable and triggers react to render the function.

- When does the local `state variable` get updated with the new value?
When the event handler triggers a change. but it does not render until the hook is called.


## Notes

All student notes should be written here.


How to write `Code Examples` in markdown

for JS:
```javascript
const data = "Howdy"
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
  width:100%
}
```
