const colors = ['red', 'white', 'blue'];

console.log('value of colors[0]: ', colors[0]);
console.log('value of colors[1]: ', colors[1]);
console.log('value of colors[2]: ', colors[2]);

console.log(
  'America is ' + colors[0] + ', ' + colors[1] + ' and, ' + colors[2] + '.'
);

colors[2] = 'green';

console.log(
  'Mexico is ' + colors[0] + ', ' + colors[1] + ' and, ' + colors[2] + '.'
);

console.log('value of colors: ', colors);

const students = ['Leonardo', 'Donatello', 'Raphaelo', 'Michaelangelo'];

const numberOfStudents = students.length;

console.log('There are ' + numberOfStudents + ' students in the class.');

const lastIndex = numberOfStudents - 1;

console.log('The last student in the array is ' + students[lastIndex]);
console.log('value of students: ', students);
