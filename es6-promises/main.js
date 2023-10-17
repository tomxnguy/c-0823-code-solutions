import takeAChance from './take-a-chance.js';

takeAChance('Thomas')
  .then((resolve) => console.log(resolve))
  .catch((reject) => console.log(reject.message));
