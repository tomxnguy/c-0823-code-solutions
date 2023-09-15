/* exported todos */

// let todos = [];

const previousTodosJSON = localStorage.getItem('javascript-local-storage');
let todos = JSON.parse(previousTodosJSON);

window.addEventListener('beforeunload', beforeUnload);

function beforeUnload(event) {
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todosJSON);
}
