import add from './add.js';
import subtract from './subtract.js';
import multiply from './multiply.js';
import divide from './divide.js';

function calculate() {
  for (let i = 0; i < process.argv.length; i++) {
    if (process.argv[3] === 'plus') {
      return console.log(
        'Result: ',
        add(Number(process.argv[2]), Number(process.argv[4]))
      );
    } else if (process.argv[3] === 'minus') {
      return console.log(
        'Result: ',
        subtract(Number(process.argv[2]), Number(process.argv[4]))
      );
    } else if (process.argv[3] === 'times') {
      return console.log(
        'Result: ',
        multiply(Number(process.argv[2]), Number(process.argv[4]))
      );
    } else if (process.argv[3] === 'over') {
      return console.log(
        'Result: ',
        divide(Number(process.argv[2]), Number(process.argv[4]))
      );
    }
  }
}

calculate();
