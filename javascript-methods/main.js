const number1 = 14;
const number2 = 22;
const number3 = 34;
const maximumValue = Math.max(number1, number2, number3);

console.log('maximumValue: ', maximumValue);

const heroes = ['Wolverine', 'Batman', 'Spawn', 'Superman'];
const randomNumber = Math.random() * heroes.length;
const randomIndex = Math.floor(randomNumber);

console.log('randomIndex: ', randomIndex);

const randomHero = heroes[randomIndex];

console.log('randomHero: ', randomHero);

const library = [
  {
    title: 'Fellowship of the Ring',
    author: 'JRR Tolkien',
  },
  {
    title: 'Fight Club',
    author: 'Chuck Palahniuk',
  },
  {
    title: 'Hop on Pop',
    author: 'Dr. Seuss',
  },
];

const lastBook = library.pop();
console.log('lastBook: ', lastBook);

const firstBook = library.shift();
console.log('firstBook: ', firstBook);

const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};

const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('library: ', library);

const fullName = 'Thomas Nguyen';
const firstAndLastName = fullName.split(' ');

console.log('firstAndLastName', firstAndLastName);

const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('sayMyName: ', sayMyName);
