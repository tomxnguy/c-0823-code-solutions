const $taskList = document.querySelector('.task-list');
$taskList.addEventListener('click', handleTaskList);

function handleTaskList(event) {
  console.log('event.target', event.target);
  console.log('event.target.tagName', event.target.tagName);
  if (event.target && event.target.tagName === 'BUTTON') {
    const $closestItem = event.target.closest('.task-list-item');
    console.log('.task.list.item', $closestItem);
    $closestItem.remove($closestItem);
  }
}
