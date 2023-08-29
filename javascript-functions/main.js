function convertMinutesToSeconds(minutes) {
  const seconds = minutes * 60;
  return seconds;
}

console.log('convertMinutesToSeconds: ', convertMinutesToSeconds(5));

function greet(name) {
  const heyName = 'Hey, ' + name;
  return heyName;
}

console.log('greet: ', greet('Beavis'));

function getArea(width, height) {
  const area = width * height;
  return area;
}

console.log('getArea: ', getArea(17, 42));

function getFirstName(person) {
  const retrieveFirst = person.firstName;
  return retrieveFirst;
}

console.log(
  'getFirstName: ',
  getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' })
);

function getLastElement(array) {
  const lastIndex = array[array.length - 1];
  return lastIndex;
}

console.log(
  'getLastElement: ',
  getLastElement(['propane', 'and', 'propane', 'accessories'])
);
