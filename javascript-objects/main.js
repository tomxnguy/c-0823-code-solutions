const student = {
  firstName: 'Thomas',
  lastName: 'Nguyen',
  age: 30,
};

const fullName = student.firstName + ' ' + student.lastName;

console.log('value of fullName: ', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'EMT';

console.log('value of student.livesInIrvine: ', student.livesInIrvine);
console.log(
  'value of student.previousOccupation: ',
  student.previousOccupation
);

console.log('value of student: ', student);

const vehicle = {
  make: 'Honda',
  model: 'Accord',
  year: '2010',
};

vehicle['color'] = 'black';
vehicle['isConvertible'] = false;

console.log("value of ['color]: ", vehicle['color']);
console.log("value of ['is convertible]: ", vehicle['isconvertible']);

console.log('value of vehicle: ', vehicle);

const pet = {
  name: 'Lucky',
  type: 'Dog',
};

delete pet.name;
delete pet.type;

console.log('value of pet: ', pet);
