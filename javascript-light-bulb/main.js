const $clickSwitch = document.querySelector('.switch');
const $container = document.querySelector('.container');
$clickSwitch.addEventListener('click', handleSwitch);

function handleSwitch(event) {
  if ($clickSwitch.className === 'switch') {
    $clickSwitch.className = 'switch ' + 'dark';
    $container.className = 'container ' + 'dark';
  } else {
    $clickSwitch.className = 'switch';
    $container.className = 'container';
  }
}
