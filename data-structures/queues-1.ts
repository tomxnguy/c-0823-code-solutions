/* eslint-disable @typescript-eslint/no-empty-function */
import { Queue } from './lib/queue';

export function getFront<T>(queue: Queue<T>): T | undefined {
  const frontElement = queue.peek();
  return frontElement !== undefined ? frontElement : undefined;
}

export function addToBack<T>(queue: Queue<T>, value: T): void {
  queue.enqueue(value);
}

export function takeFront<T>(queue: Queue<T>): T | undefined {
  const takeFront = queue.dequeue();
  return takeFront !== undefined ? takeFront : undefined;
}

export function isEmpty<T>(queue: Queue<T>): boolean {
  return queue.peek() === undefined;
}
