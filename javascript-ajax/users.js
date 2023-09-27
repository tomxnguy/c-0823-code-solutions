const $userList = document.querySelector('#user-list');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';
xhr.addEventListener('load', function () {
  console.log(xhr.status);
  console.log(xhr.response);
  for (let i = 0; i < xhr.response.length; i++) {
    if (xhr.response[i].name) {
      const $list = document.createElement('li');
      $list.textContent = xhr.response[i].name;
      $userList.append($list);
    }
  }
});
xhr.send();
