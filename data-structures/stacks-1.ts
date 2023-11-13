/* eslint-disable @typescript-eslint/no-empty-function */
import { Stack } from './lib/stack';

export function getTop<T>(stack: Stack<T>): T | undefined {
  const topElement = stack.peek();
  return topElement !== undefined ? topElement : undefined;
}

export function addToTop<T>(stack: Stack<T>, value: T): void {
  stack.push(value);
}

export function takeTop<T>(stack: Stack<T>): T | undefined {
  const takeTopElement = stack.pop();
  return takeTopElement !== undefined ? takeTopElement : undefined;
}

export function isEmpty<T>(stack: Stack<T>): boolean {
  return stack.peek() === undefined;
}
