const arr = [
  {
    isbn: '9780375828379',
    title: 'Hop On Pop',
    author: 'Dr.Seuss',
  },
  {
    isbn: '0679735771',
    title: 'American Psycho',
    author: 'Bret Easton Ellis',
  },
  {
    isbn: '0393355942',
    title: 'Fight Club: A Novel',
    author: 'Chuck Palahniuk',
  },
];

console.log('array typeof: ', typeof arr);

const stringify = JSON.stringify(arr);
console.log(stringify);
console.log('JSON type of: ', typeof stringify);

const newString = '{"id":12345, "name":"Thomas"}';
console.log('newString: ', newString);
console.log('newString typeof: ', typeof newString);

const json = JSON.parse(newString);
console.log('json: ', json);
console.log('json typeof: ', typeof json);
