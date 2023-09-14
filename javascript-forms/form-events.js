function handleFocus(event) {
  console.log('focus event: ');
  console.log('event.target.name: ', event.target.name);
}

function handleBlur(event) {
  console.log('blur event: ');
  console.log('event.target.name: ', event.target.name);
}

function handleInput(event) {
  console.log('event.target.name: ', event.target.name);
  console.log('event.target.value: ', event.target.value);
}

const $userName = document.querySelector('#user-name');
const $userEmail = document.querySelector('#user-email');
const $userMessage = document.querySelector('#user-message');

$userName.addEventListener('focus', handleFocus);
$userEmail.addEventListener('focus', handleFocus);
$userMessage.addEventListener('focus', handleFocus);

$userName.addEventListener('blur', handleBlur);
$userEmail.addEventListener('blur', handleBlur);
$userMessage.addEventListener('blur', handleBlur);

$userName.addEventListener('input', handleInput);
$userEmail.addEventListener('input', handleInput);
$userMessage.addEventListener('input', handleInput);
