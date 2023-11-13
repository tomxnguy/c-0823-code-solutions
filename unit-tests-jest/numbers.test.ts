import { divideBy, evenNumbers, multiplyBy, toDollars } from './numbers';

describe('evenNumbers', () => {
  it('returns even numbers', () => {
    const inputArray = [1, 2, 3, 4, 5, 6, 7, 8];
    const expected = [2, 4, 6, 8];
    const result = evenNumbers(inputArray);
    expect(result).toEqual(expected);
  });
});

describe('toDollars', () => {
  it('returns numbers in dollar format', () => {
    const inputAmount = 45;
    const expectedAmount = '$45.00';
    const result = toDollars(inputAmount);
    expect(result).toBe(expectedAmount);
  });
});

describe('divideBy', () => {
  it('returns new array divided by divisor', () => {
    const numbers = [5, 10, 15, 20, 25, 30];
    const divisor = 5;
    const expectedArray = [1, 2, 3, 4, 5, 6];
    const result = divideBy(numbers, divisor);
    expect(result).toEqual(expectedArray);
  });
});

describe('muliplyBy', () => {
  it('returns modified object by multiplying value of key', () => {
    const inputObj = {
      a: 2,
      b: 3,
      c: 'test string',
      d: 4,
    };
    const multiplier = 5;
    const expectedObj = {
      a: 10,
      b: 15,
      c: 'test string',
      d: 20,
    };
    const result = multiplyBy(inputObj, multiplier);
    expect(result).toEqual(expectedObj);
  });
});
