import add from './add.js';
import subtract from './subtract.js';
import multiply from './multiply.js';
import divide from './divide.js';

const [, , n1, operator, n2] = process.argv;
const num1 = Number(n1);
const num2 = Number(n2);

if (isNaN(num1)) {
  console.error('Not a number', n1);
  process.exit(2);
}
if (isNaN(num2)) {
  console.error('Not a number', n2);
  process.exit(2);
}

let result;

switch (operator) {
  case 'plus':
    result = add(num1, num2);
    break;
  case 'minus':
    result = subtract(num1, num2);
    break;
  case 'times':
    result = multiply(num1, num2);
    break;
  case 'over':
    result = divide(num1, num2);
    break;
  default:
    console.log('Unknown Operator', operator);
    process.exit(1);
}

console.log(result);
