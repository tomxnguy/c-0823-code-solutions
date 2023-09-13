const $openModal = document.querySelector('.open-modal');
const $modalContainer = document.querySelector('.modal-container');
$openModal.addEventListener('click', modalOpen);

function modalOpen(event) {
  $modalContainer.className = 'modal-container display-block';
}

const $noButton = document.querySelector('.no-button');
$noButton.addEventListener('click', modalClose);

function modalClose(event) {
  $modalContainer.className = 'modal-container display-none';
}
