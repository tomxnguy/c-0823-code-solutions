function handleClick(event) {
  console.log('button clicked');
  console.log(' event:', event);
  console.log('event. target', event.target);
}

const $clickButton = document.querySelector('.click-button');
$clickButton.addEventListener('click', handleClick);

function handleMouseOver(event) {
  console.log('button hovered');
  console.log(' event:', event);
  console.log(' event.target:', event.target);
}

const $handleMouseOver = document.querySelector('.hover-button');
$handleMouseOver.addEventListener('mouseover', handleMouseOver);

function doubleClickButton(event) {
  console.log('button double-clicked');
  console.log(' event:', event);
  console.log(' event.target:', event.target);
}
const $doubleClickButton = document.querySelector('.double-click-button');
$doubleClickButton.addEventListener('dblclick', doubleClickButton);
