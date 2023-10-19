import { writeFile } from 'node:fs/promises';

async function writeNew() {
  try {
    const ranNum = Math.random();
    await writeFile('random.txt', ranNum + '\n', 'utf-8');
  } catch (error) {
    console.error(error);
  }
}

writeNew();
