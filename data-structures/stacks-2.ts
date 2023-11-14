import { Stack } from './lib/stack';

export function countValues<T>(stack: Stack<T>): number {
  for (let i = 0; i < stack.length; i++) {
    const items = [];
    items.push();
  }
  return items.length;
}

export function maxValue(stack: Stack<number>): number {
  return -Infinity;
}
