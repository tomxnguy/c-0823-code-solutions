const $tabContainer = document.querySelector('.tab-container');
const $tabNodes = document.querySelectorAll('.tab');
const $viewNodes = document.querySelectorAll('.view');

console.log($tabNodes);
console.log($viewNodes);

$tabContainer.addEventListener('click', handleLanguages);

function handleLanguages(event) {
  if (event.target.matches('.tab')) {
    for (let i = 0; i < $tabNodes.length; i++) {
      console.log('i', i);
      if ($tabNodes[i] === event.target) {
        $tabNodes[i].className = 'tab active';
      } else {
        $tabNodes[i].className = 'tab';
      }
    }
  }
  const viewName = event.target.getAttribute('data-view');
  for (let i = 0; i < $viewNodes.length; i++) {
    if ($viewNodes[i].getAttribute('data-view') === viewName) {
      $viewNodes[i].className = 'view';
    } else {
      $viewNodes[i].className = 'view hidden';
    }
  }
}
