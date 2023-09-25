const $retrieveCountdown = document.querySelector('.countdown-display');

const countdown = setInterval(function () {
  const $startCount = $retrieveCountdown.textContent--;
  if ($startCount <= 1) {
    $retrieveCountdown.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(countdown);
  }
}, 1000);
