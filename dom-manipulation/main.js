let counter = 0;
const $hotButton = document.querySelector('.hot-button');
const $clickCount = document.querySelector('.click-count');

$hotButton.addEventListener('click', () => {
  counter++;
  $clickCount.textContent = 'Click: ' + counter;
  let temperature = '';
  if (counter < 4) {
    temperature = 'cold';
  } else if (counter <= 7) {
    temperature = 'cool';
  } else if (counter <= 10) {
    temperature = 'tepid';
  } else if (counter <= 13) {
    temperature = 'warm';
  } else if (counter <= 16) {
    temperature = 'hot';
  } else {
    temperature = 'nuclear';
  }
  $hotButton.className = 'hot-button ' + temperature;
});
