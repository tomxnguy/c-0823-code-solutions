import { divideBy, evenNumbers, multiplyBy, toDollars } from './numbers';

describe('evenNumbers', () => {
  it('returns even numbers', () => {
    const inputArray = [1, 2, 3, 4, 5, 6, 7, 8];
    const expected = [2, 4, 6, 8];
    const result = evenNumbers(inputArray);
    expect(result).toEqual(expected);
  });

  it('returns empty array when odds', () => {
    const inputArray2 = [1, 3, 5, 7];
    expect(evenNumbers(inputArray2)).toEqual([]);
  });

  it('returns an empty array from empty array', () => {
    expect(evenNumbers([])).toEqual([]);
  });

  it('returns empty array from 0', () => {
    expect(evenNumbers([0])).toEqual([0]);
  });
});

describe('toDollars', () => {
  it('returns numbers in dollar format', () => {
    const inputAmount = 45;
    const expectedAmount = '$45.00';
    const result = toDollars(inputAmount);
    expect(result).toBe(expectedAmount);
  });

  it('returns numbers from fractional numbers', () => {
    expect(toDollars(45.0101)).toBe('$45.01');
  });

  it('returns 0 when 0', () => {
    expect(toDollars(0)).toBe('$0.00');
  });

  it('returns negative when negative number is used', () => {
    expect(toDollars(-10)).toBe('$-10.00');
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

  it('returns empty array when an empty array is used', () => {
    expect(divideBy([], 5)).toEqual([]);
  });

  it('returns decimals when divided by decimals', () => {
    expect(divideBy([1.5, 2.5, 3.5], 0.5)).toEqual([3, 5, 7]);
  });

  it('return fractions', () => {
    expect(divideBy([1, 2, 3], 3)).toEqual([1 / 3, 2 / 3, 1]);
  });

  it('should handle negative divisor', () => {
    expect(divideBy([10, 20, 30], -5)).toEqual([-2, -4, -6]);
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

  it('should return an object with values set to 0 when multiplier is 0', () => {
    const input = { a: 1, b: 2, c: 3 };
    const expectedOutput = { a: 0, b: 0, c: 0 };
    expect(multiplyBy(input, 0)).toEqual(expectedOutput);
  });

  it('should handle non-numeric values', () => {
    const input = { a: 1, b: 'two', c: [3] };
    const expectedOutput = { a: 2, b: 'two', c: [3] };
    expect(multiplyBy(input, 2)).toEqual(expectedOutput);
  });

  it('should handle a negative multiplier', () => {
    const input = { a: 1, b: 2, c: 3 };
    const expectedOutput = { a: -2, b: -4, c: -6 };
    expect(multiplyBy(input, -2)).toEqual(expectedOutput);
  });
});
