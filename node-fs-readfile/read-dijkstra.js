import { readFile } from 'node:fs/promises';

async function readDij() {
  try {
    const dijkstra = await readFile('dijkstra.txt', { encoding: 'utf8' });
    console.log(dijkstra);
  } catch (error) {
    console.error(error);
  }
}

readDij();
