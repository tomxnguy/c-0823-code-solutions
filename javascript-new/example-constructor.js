function ExampleConstructor() {}

console.log('ExampleConstructor prototype: ', ExampleConstructor.prototype);
console.log(
  'type of ExampleConstructor: ',
  typeof ExampleConstructor.prototype
);

const exampleCall = new ExampleConstructor();
console.log('value of exampleCall: ', exampleCall);

const instanceOfExample = exampleCall instanceof ExampleConstructor;
console.log('value of instanceOfExample: ', instanceOfExample);
