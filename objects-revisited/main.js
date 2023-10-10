const business = {
  opens: '10am',
  closes: '10pm',
  totalEmployees: 3,
  daysOpen: ['M', 'T', 'W', 'Th', 'F'],
  employees: {
    Thomas: {
      position: 'Manager',
      daysOfWeekWorking: ['M', 'W', 'F'],
    },
    Julie: {
      position: 'Server',
      daysOfWeekWorking: ['T', 'W', 'Th'],
    },
    Michael: {
      position: 'Busser',
      daysOfWeekWorking: ['M', 'W', 'Th'],
    },
  },
};

function addWeekends() {
  business.daysOpen.unshift('Su');
  business.daysOpen.push('S');
}

addWeekends();
console.log('business', business);

function addEmployees() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    console.log(xhr.status);
    console.log(xhr.response);
    for (let i = 0; i < xhr.response.length; i++) {
      if (xhr.response[i].name) {
        business.employees = xhr.response[i].name;
      }
    }
  });
  xhr.send();
}

addEmployees();
