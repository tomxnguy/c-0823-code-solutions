const $formValue = document.querySelector('#contact-form');

function handleSubmit(event) {
  event.preventDefault();
  const name = $formValue.elements.name.value;
  const email = $formValue.elements.email.value;
  const message = $formValue.elements.message.value;
  const messageData = {
    name,
    email,
    message,
  };
  console.log('messageData', messageData);
  $formValue.reset();
}

$formValue.addEventListener('submit', handleSubmit);
